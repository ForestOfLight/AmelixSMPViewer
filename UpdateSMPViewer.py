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
MAP_DIR = "map"
WORLD_CONFIGS = {
	"Amelix SMP": {
		"overworld": {
			"background": "#ffffff",
		},
		"nether": {
			"background": "#ffffff",
			"topY": 122,
			"bottomY": 0
		},
		"end": {
			"background": "#080403",
		}
	},
	"Amelix CMP": {
		"overworld": {
			"background": "#e4e4e4",
		},
		"nether": {
			"background": "#ffffff",
			"topY": 100,
			"bottomY": 0
		},
		"end": {
			"background": "#080403",
		}
	}
}
COMMON_CONFIG = {
	"zoomout": "6",
	"zoomin": "2",
	"shadows": "3do",
	"showgrid": "false",
	"log-level": "fatal"
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
		download_latest_worlds(service)
	else:
		print(f"Working directory {WORKING_DIR} already exists and is not empty. Skipping download.")
	if (not any(filename.startswith("unmined-") for filename in os.listdir(WORKING_DIR))):
		generate_unmined_webpages()
	else:
		print("Unmined webpages already exist in the working directory. Skipping generation.")
	combine_unmined_webpages()
	update_config()
	cleanup_working_directory()
	print("Amelix SMP Viewer updated successfully.")

def download_latest_worlds(service):
	latest_file_id = get_latest_backup_file_id(service)
	file_handle = download_file(service, latest_file_id)
	unzip_worlds(file_handle)
	keep_only_configured_worlds()
	
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

def keep_only_configured_worlds():
    count = 0
    for filename in os.listdir(WORKING_DIR):
        path = os.path.join(WORKING_DIR, filename)
        if not (filename in WORLD_CONFIGS.keys()):
            if os.path.isdir(path):
                shutil.rmtree(path)
                count += 1
        elif os.path.isfile(path):
                os.remove(path)
                count += 1
    print("Removed " + str(count) + " non-configured worlds from " + WORKING_DIR)

def generate_unmined_webpages():
	for filename in os.listdir(WORKING_DIR):
		for dimension in WORLD_CONFIGS.get(filename, {}).keys():
			generate_unmined_webpage(filename, dimension, WORLD_CONFIGS.get(filename, None).get(dimension, None))

def generate_unmined_webpage(world_filename, dimension, config=None):
	print(f"Creating unmined webpage for {world_filename} ({dimension})")
	if config is None:
		config = {
			"background": "#000000"
		}
	try:
		abs_download_dir = os.path.abspath(WORKING_DIR)
		world_path = os.path.join(abs_download_dir, world_filename)
		output_path = os.path.join(abs_download_dir, f"unmined-{world_filename.replace("Amelix ", "").lower()}-{dimension}")
		args = [
			"unmined-cli", "web", "render",
			"--world", world_path,
			"--output", output_path,
			"--dimension", dimension
		]
		for key, value in COMMON_CONFIG.items():
			args.extend([f"--{key}", str(value)])
		for key, value in config.items():
			args.extend([f"--{key}", str(value)])
		subprocess.run(args, check=True)
	except subprocess.CalledProcessError as e:
		print(f"Error creating unmined webpage: {e}")
		raise

def combine_unmined_webpages():
	if not os.path.exists(MAP_DIR):
		os.makedirs(MAP_DIR)
	move_tiles()
	merge_map_properties()
	merge_map_regions()
	merge_map_players()

def move_tiles():
	if not os.path.exists(os.path.join(MAP_DIR, "tiles")):
		os.makedirs(os.path.join(MAP_DIR, "tiles"))
	else:
		shutil.rmtree(os.path.join(MAP_DIR, "tiles"))
	for filename in os.listdir(WORKING_DIR):
		if filename.startswith("unmined-") and os.path.isdir(os.path.join(WORKING_DIR, filename)):
			tiles_path = os.path.join(WORKING_DIR, filename, "tiles")
			if os.path.exists(tiles_path):
				dimension = filename.split("-")[-1]
				world_name = filename.split("-")[1]
				dest_path = os.path.join(MAP_DIR, "tiles", f"{world_name}-{dimension}")
				if not os.path.exists(dest_path):
					os.makedirs(dest_path)
				print(f"Moving tiles from {tiles_path} to {dest_path}")
				for tile in os.listdir(tiles_path):
					shutil.move(os.path.join(tiles_path, tile), dest_path)

def merge_map_properties():
	properties = []
	property_ids = []
	for filename in os.listdir(WORKING_DIR):
		if filename.startswith("unmined-") and os.path.isdir(os.path.join(WORKING_DIR, filename)):
			dimension = filename.split("-")[-1]
			world_name = filename.split("-")[1]
			properties_path = os.path.join(WORKING_DIR, filename, "unmined.map.properties.js")
			if os.path.exists(properties_path):
				property_id = f"UnminedMapProperties_{world_name.upper()}_{dimension.upper()}"
				with open(properties_path, "r") as f:
					content = f.read()
					content = content.replace("var UnminedMapProperties = {", f"var {property_id} = {{\n	regionFolderName: '{world_name.lower()}-{dimension.lower()}',")
					content = content.replace(f"worldName: \"Amelix {world_name.upper()}\",", f'worldName: "{world_name.upper()} {dimension.capitalize()}",')
					properties.append(content)
				property_ids.append(property_id)
	if properties:
		properties_content = "/* Autogenerated file created by UpdateSMPViewer.py */\n" + "\n".join(properties)
		properties_content += f"\nvar mapPropertiesArray = {list(reversed(property_ids))};\n".replace("'", "")
		with open(os.path.join(MAP_DIR, "unmined.map.properties.js"), "w") as f:
			f.write(properties_content)
		print(f"Merged map properties into {MAP_DIR}/unmined.map.properties.js")

def merge_map_regions():
	regions = []
	region_ids = []
	for filename in os.listdir(WORKING_DIR):
		if filename.startswith("unmined-") and os.path.isdir(os.path.join(WORKING_DIR, filename)):
			dimension = filename.split("-")[-1]
			world_name = filename.split("-")[1]
			regions_path = os.path.join(WORKING_DIR, filename, "unmined.map.regions.js")
			if os.path.exists(regions_path):
				property_id = f"UnminedRegions_{world_name.upper()}_{dimension.upper()}"
				with open(regions_path, "r") as f:
					content = f.read()
					content = content.replace("var UnminedRegions = [", f"var {property_id} = [")
					regions.append(content)
				region_ids.append(property_id)
	if regions:
		regions_content = "/* Autogenerated file created by UpdateSMPViewer.py */\n" + "\n".join(regions)
		regions_content += f"\nvar mapRegionsArray = {list(reversed(region_ids))};\n".replace("'", "")
		with open(os.path.join(MAP_DIR, "unmined.map.regions.js"), "w") as f:
			f.write(regions_content)
		print(f"Merged map regions into {MAP_DIR}/unmined.map.regions.js")

def merge_map_players():
	players = []
	player_ids = []
	for filename in os.listdir(WORKING_DIR):
		if filename.startswith("unmined-") and os.path.isdir(os.path.join(WORKING_DIR, filename)):
			dimension = filename.split("-")[-1]
			world_name = filename.split("-")[1]
			players_path = os.path.join(WORKING_DIR, filename, "unmined.map.players.js")
			if os.path.exists(players_path):
				player_id = f"UnminedPlayers_{world_name.upper()}_{dimension.upper()}"
				with open(players_path, "r") as f:
					content = f.read()
					content = content.replace("var UnminedPlayers = {", f"var {player_id} = {{")
					players.append(content)
				player_ids.append(player_id)
	if players:
		players_content = "/* Autogenerated file created by UpdateSMPViewer.py */\n" + "\n".join(players)
		players_content += f"\nvar mapPlayersArray = {list(reversed(player_ids))};\n".replace("'", "")
		with open(os.path.join(MAP_DIR, "unmined.map.players.js"), "w") as f:
			f.write(players_content)
		print(f"Merged map players into {MAP_DIR}/unmined.map.players.js")

def update_config():
	update_last_updated_date()

def update_last_updated_date():
	config_path = "config.js"
	if not os.path.exists(config_path):
		with open(config_path, "w") as f:
			f.write("const config = {\n    lastUpdated: ''\n};\n")
	with open(config_path, "r") as f:
		content = f.read()
	last_updated = datetime.now().strftime("%m-%d-%Y")
	content = re.sub(r"lastUpdated:\s*'[^']*'", f"lastUpdated: '{last_updated}'", content)
	with open(config_path, "w") as f:
		f.write(content)

def cleanup_working_directory():
	shutil.rmtree(WORKING_DIR)

if __name__ == "__main__":
  main()