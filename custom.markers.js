/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

example = {

    isEnabled: false,

    markers: [

        // Example 1: Simple marker
        {
            x: -200,
            z: -200,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
        },

        // Example 2: Marker with text
        {
            x: 0,
            z: 0,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Marker with text",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

        // Example 3: Text only
        {
            x: 200,
            z: 200,
            text: "Text only", 
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 50px Calibri,sans serif",
        },

        // add your markers here




        // do not delete the following two closing brackets
    ]
}

UnminedCustomMarkersSMPOW = {
    isEnabled: true,

    markers: [
        {
            x: 0,
            z: 0,
            text: "Spawn",
            textColor: "white",
            font: "bold 30px Calibri,sans serif",
        },
        {
            x: 389,
            z: 1194,
            text: "Mike Homer's Base", 
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            x: 50,
            z: 1404,
            text: "Starter Village", 
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            x: -1482,
            z: 473,
            text: "Warden Farm", 
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            x: -1352,
            z: -179,
            text: "8x Iron Farm", 
            textColor: "white", 
            font: "12px Calibri,sans serif",
        },
        {
            x: 171,
            z: -3141,
            text: "End Portal", 
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            x: 728,
            z: 588,
            text: "Oare Town", 
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            x: 744,
            z: 351,
            text: "Drowned Farm",
            textColor: "white",
            font: "12px Calibri,sans serif",
        }
    ]
}

UnminedCustomMarkersSMPNether = {
}

UnminedCustomMarkersSMPEnd = {
}

UnminedCustomMarkersCMPOW = {
    isEnabled: true,

    markers: [
        {
            x: 0,
            z: 0,
            text: "Spawn",
            textColor: "white",
            font: "bold 30px Calibri,sans serif",
        },
    ]
}

var mapCustomMarkersArray = [UnminedCustomMarkersSMPOW, UnminedCustomMarkersSMPNether, UnminedCustomMarkersSMPEnd, UnminedCustomMarkersCMPOW];
