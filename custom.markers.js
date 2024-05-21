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
            x: -3,
            z: 359,
            text: "Spawn",
            textColor: "white",
            font: "bold 25px Calibri,sans serif",
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
        },
        {
            text: "Cleric Hall",
            x: 893,   
            z: 838,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Raymond's Base",
            x: 2000,
            z: 2000,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Ice Farm",
            x: 930,
            z: 2770,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Raid Farm",
            x: -878,
            z: 2737,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Stone Mason Hall",
            x: -23,
            z: 738,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Stone Factory",
            x: -2254,
            z: 441,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Amelix Villager Complex",
            x: -3500,
            z: 6850,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Gravity Block Duper",
            x: -4258,
            z: -4794,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "The BEAST",
            x: -6398,
            z: -4707,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Netherwart Farm",
            x: -2836,
            z: -5723,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Tool/Armor Trading Hall",
            x: -2673,
            z: -5201,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Squid Farm",
            x: 678,
            z: -563,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Mooshroom Farm",
            x: -1180,
            z: 4669,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Rabbit Foot Farm",
            x: -984,
            z: 256,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "ADI's Base",
            x: -2752,
            z: -171,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
        {
            text: "Creeper Farm",
            x: -5128,
            z: 4,
            textColor: "white",
            font: "12px Calibri,sans serif",
        },
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
            font: "bold 25px Calibri,sans serif",
        },
    ]
}

var mapCustomMarkersArray = [UnminedCustomMarkersSMPOW, UnminedCustomMarkersSMPNether, UnminedCustomMarkersSMPEnd, UnminedCustomMarkersCMPOW];
