var mapSelectorContainer = document.createElement('div');
mapSelectorContainer.className = 'map-switcher';

let mapNames = mapPropertiesArray.map(map => map.worldName);

// Create and append radio buttons for each map
mapNames.forEach((map, index) => {
    let radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = 'mapSelector';
    radioButton.value = map;
    radioButton.id = 'map' + index;
    radioButton.defaultChecked = index === 0;

    let label = document.createElement('label');
    label.htmlFor = 'map' + index;
    label.appendChild(document.createTextNode(map));

    mapSelectorContainer.appendChild(radioButton);
    mapSelectorContainer.appendChild(label);
    mapSelectorContainer.appendChild(document.createElement('br'));
});

document.body.appendChild(mapSelectorContainer);

// Add event listener to switch maps when a radio button is selected
document.getElementsByName('mapSelector').forEach((radioButton, index) => {
    radioButton.addEventListener('change', function() {
        if (this.checked) {
            let selectedMapProperties = mapPropertiesArray[index];
            let selectedMapRegions = mapRegionsArray[index];
            let selectedMapMarkers = mapCustomMarkersArray[index];
            let selectedMapPlayers = mapPlayersArray[index];

            if (selectedMapMarkers && selectedMapMarkers.isEnabled && selectedMapMarkers.markers) {
                selectedMapProperties.markers = selectedMapProperties.markers.concat(selectedMapMarkers.markers);
            }

            if (selectedMapPlayers && selectedMapPlayers.length > 0) {
                selectedMapProperties.markers = selectedMapProperties.markers.concat(unmined.createPlayerMarkers(selectedMapPlayers));
            }

            document.getElementById('map').innerHTML = ''; // clear current map
            unmined.map('map', selectedMapProperties, selectedMapRegions);
        }
    });
});