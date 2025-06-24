import os.path
import shutil
import re
import io
import zipfile
from datetime import datetime
from tqdm import tqdm
import subprocess


from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload


SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]
WORKING_DIR = "tmp"
WORLD_CONFIGS = {
	"Amelix SMP": {
		"overworld": {
			"background": "#000000",
			"shadows": "3do"
		},
		"nether": {
			"background": "#000000",
			"shadows": "3do",
			"topY": 128,
			"bottomY": -64
		},
		"end": {
			"background": "#000000",
			"shadows": "3do"
		}
	},
	"Amelix CMP": {
		"overworld": {
			"background": "#000000",
			"shadows": "3do"
		},
		"nether": {
			"background": "#000000",
			"shadows": "3do",
			"topY": 128,
			"bottomY": -64
		},
		"end": {
			"background": "#000000",
			"shadows": "3do"
		}
	}
}

def main():
	creds = None
	if os.path.exists("token.json"):
		creds = Credentials.from_authorized_user_file("token.json", SCOPES)
	if not creds or not creds.valid:
		if creds and creds.expired and creds.refresh_token:
			creds.refresh(Request())
		else:
			flow = InstalledAppFlow.from_client_secrets_file(
				"credentials.json", SCOPES
			)
			creds = flow.run_local_server(port=0)
		with open("token.json", "w") as token:
			token.write(creds.to_json())
	
	try:
		service = build("drive", "v3", credentials=creds)
		update_amelix_smp_viewer(service)
	except HttpError as error:
		print(f"An error occurred: {error}")

def update_amelix_smp_viewer(service):
	if (not os.path.exists(WORKING_DIR)) or (not os.listdir(WORKING_DIR)):
		download_latest_smp_and_cmp_worlds(service)
	if (not any(filename.startswith("unmined-") for filename in os.listdir(WORKING_DIR))):
		generate_unmined_webpages()
	combine_unmined_webpages()
	cleanup_working_directory()
	print("Amelix SMP Viewer updated successfully.")

def download_latest_smp_and_cmp_worlds(service):
	latest_file_id = get_latest_backup_file_id(service)
	file_handle = download_file(service, latest_file_id)
	unzip_worlds(file_handle)
	keep_only_smp_and_cmp_worlds()
	
def get_latest_backup_file_id(service):
	pattern = re.compile(r'Amelix-(\d{1,2})-(\d{1,2})-(\d{2})\.zip') # Matches names like Amelix-6-21-25.zip
	results = service.files().list(
		q="name contains 'Amelix-' and name contains '.zip'",
		fields="files(id, name)",
		spaces='drive'
	).execute()
	files = results.get('files', [])

	dated_files = []
	for f in files:
		match = pattern.match(f['name'])
		if match:
			month, day, year = map(int, match.groups())
			year += 2000 if year < 100 else 0
			file_date = datetime(year, month, day)
			dated_files.append((file_date, f['id'], f['name']))
	if not dated_files:
		raise Exception("No matching Amelix-MM-DD-YY.zip files found.")
	latest_file = max(dated_files, key=lambda x: x[0])
	file_date, file_id, file_name = latest_file
	print(f"Latest file: {file_name}")

	return file_id

def download_file(service, file_id):
	request = service.files().get_media(fileId=file_id)
	file_handle = io.BytesIO()
	downloader = MediaIoBaseDownload(file_handle, request)

	done = False
	file_metadata = service.files().get(fileId=file_id, fields="size").execute()
	total_size = int(file_metadata.get("size", 0))
	pbar = tqdm(total=total_size, unit='B', unit_scale=True, desc="Downloading", ncols=80)
	done = False
	while not done:
		status, done = downloader.next_chunk()
		if status:
			pbar.update(status.resumable_progress - pbar.n)
	pbar.close()
	return file_handle

def unzip_worlds(file_handle):
	print("Unzipping worlds...")
	file_handle.seek(0)
	with zipfile.ZipFile(file_handle) as z:
		z.extractall(WORKING_DIR)
		print(f"Worlds placed in {WORKING_DIR}")

def keep_only_smp_and_cmp_worlds():
    count = 0
    for filename in os.listdir(WORKING_DIR):
        path = os.path.join(WORKING_DIR, filename)
        if not (filename.startswith("Amelix SMP") or filename.startswith("Amelix CMP")):
            if os.path.isdir(path):
                shutil.rmtree(path)
                count += 1
        elif os.path.isfile(path):
                os.remove(path)
                count += 1
    print("Removed " + str(count) + " non-SMP/CMP worlds from " + WORKING_DIR)

def generate_unmined_webpages():
	for filename in os.listdir(WORKING_DIR):
		for dimension in WORLD_CONFIGS.get(filename, {}).keys():
			generate_unmined_webpage(filename, dimension, WORLD_CONFIGS.get(filename, None).get(dimension, None))

def generate_unmined_webpage(world_filename, dimension, config=None):
	print(f"Creating unmined webpage for {world_filename} ({dimension})")
	if config is None:
		config = {
			"background": "#000000",
			"shadows": "3do"
		}
	try:
		abs_download_dir = os.path.abspath(WORKING_DIR)
		world_path = os.path.join(abs_download_dir, world_filename)
		output_path = os.path.join(abs_download_dir, f"unmined-{world_filename.replace("Amelix ", "").lower()}-{dimension}")
		args = [
			"unmined-cli", "web", "render",
			"--world", world_path,
			"--output", output_path,
			"--dimension", dimension,
			"--zoomout", "6",
			"--zoomin", "2"
		]
		for key, value in config.items():
			args.extend([f"--{key}", str(value)])
		subprocess.run(args, check=True)
		print(f"Unmined webpage created at {output_path}")
	except subprocess.CalledProcessError as e:
		print(f"Error creating unmined webpage: {e}")
		raise

def combine_unmined_webpages():
	move_tiles()
	# merge unmined.map.properties files and place in generated_maps
	# merge unmined.map.regions files and place in generated_maps
	# move the first found unmined.openlayers.js file to generated_maps

def move_tiles():
	# Tiles are in tmp/unmined-<world>-<dimension>/tiles currently, and must be moved to gemerated_maps/tiles/<world>-<dimension>
	pass

def cleanup_working_directory():
	pass
	shutil.rmtree(WORKING_DIR)
	

if __name__ == "__main__":
  main()