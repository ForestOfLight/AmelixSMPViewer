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
            font: "14px Calibri,sans serif",
        },
        {
            x: 50,
            z: 1404,
            text: "Starter Village", 
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Old Raid Farm",
            x: -1080,
            z: 850,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            x: -1482,
            z: 473,
            text: "Warden Farm", 
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            x: -1352,
            z: -179,
            text: "8x Iron Farm", 
            textColor: "white", 
            font: "14px Calibri,sans serif",
        },
        {
            x: 171,
            z: -3141,
            text: "End Portal", 
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            x: 728,
            z: 588,
            text: "Oare Town", 
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            x: 744,
            z: 351,
            text: "Drowned Farm",
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Cleric Hall",
            x: 893,   
            z: 838,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Raymond's Base",
            x: 2000,
            z: 2000,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Ice Farm",
            x: 930,
            z: 2770,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Raid Farm",
            x: -878,
            z: 2737,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Stone Mason Hall",
            x: -23,
            z: 738,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Stone Factory",
            x: -2254,
            z: 441,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Amelix Villager Complex",
            x: -3510,
            z: 7025,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Gravity Block Duper",
            x: -4258,
            z: -4794,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "The BEAST",
            x: -6390,
            z: -4626,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Netherwart Farm",
            x: -2836,
            z: -5723,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Tool & Armor Trading Hall",
            x: -2673,
            z: -5201,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Squid Farm",
            x: 678,
            z: -563,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Mooshroom Farm",
            x: -698,
            z: 5054,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Rabbit's Foot Farm",
            x: -984,
            z: 256,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "ADI's Base",
            x: -2752,
            z: -171,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Old Creeper Farm",
            x: -5128,
            z: 4,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "25x Iron Farm",
            x: -1351,
            z: -566,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Disc Farm",
            x: -233,
            z: 1461,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Guardian Farm",
            x: 135,
            z: 155,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Old Raid Farm",
            x: -1080,
            z: 850,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Digsort",
            x: -17,
            z: 22,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Mini Mooshroom Farm",
            x: -4846,
            z: -98,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Fish Farm",
            x: 56,
            z: -504,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Old GBD",
            x: -3000,
            z: 740,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "General Mob Farm",
            x: 30,
            z: 250,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Old GMF",
            x: 305,
            z: 130,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Forest's Town",
            x: -2016,
            z: -3120,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Creeper-Preferred GMF",
            x: -2265,
            z: 5800,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Witch Hut HSS",
            x: -2280,
            z: 5770,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Dye Factory",
            x: -415,
            z: 241,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Cactus Farm",
            x: -1192,
            z: -88,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Church of Caleeb",
            x: -2137,
            z: 52,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Creeper Farm",
            x: -3976,
            z: 440,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "600k Sand Duper",
            x: -4328,
            z: 440,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Vine Farm",
            x: -5367,
            z: -3650,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Sand Quarry",
            x: -14010,
            z: 22187,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Looting Fish Farm",
            x: -479,
            z: 817,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Secret Santa Event",
            x: 107,
            z: 640,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Firebee's House",
            x: -456,
            z: 1648,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "R2's Diagonal Chessboard",
            x: -1074,
            z: 630,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Mini-Quarry",
            x: 5768,
            z: 5046,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "The Pickle Peri",
            x: -491,
            z: -678,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "OnlyFan",
            x: -8,
            z: -574,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Sculk Farm",
            x: -22,
            z: -811,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Sculk Vein Farm",
            x: -220,
            z: 297,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Forest's Escape Room",
            x: 588,
            z: -1144,
            textColor: "white",
            font: "14px Calibri,sans serif",
        }
    ]
}

UnminedCustomMarkersSMPNether = {
    isEnabled: true,

    markers: [
        {
            text: "Hub",
            x: 3,
            z: 40,
            textColor: "white",
            font: "bold 25px Calibri,sans serif",
        },
        {
            text: "Mike Homer's Base",
            x: 48,
            z: 149,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Starter Village",
            x: 6,
            z: 175,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Old Raid Farm",
            x: -135,
            z: 107,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text:"Warden Farm",
            x: -185,
            z: 63,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "25x Iron Farm",
            x: -166,
            z: -70,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "End Portal",
            x: 22,
            z: -396,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Oare Town",
            x: 92,
            z: 71,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Drowned Farm",
            x: 87,
            z: 52,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Cleric Hall",
            x: 111,
            z: 104,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Raymond's Base",
            x: 250,
            z: 250,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Ice Farm",
            x: 116,
            z: 346,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Raid Farm",
            x: -109,
            z: 340,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Stone Mason Hall",
            x: -2,
            z: 88,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Stone Factory",
            x: -281,
            z: 64,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Amelix Villager Complex",
            x: -427,
            z: 880,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Fortress Farm",
            x: -660,
            z: -415,
            textColor: "black",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Gravity Block Duper",
            x: -532,
            z: -605,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "The BEAST",
            x: -821,
            z: -591,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Froglight Farm",
            x: -738,
            z: 1490,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Woodland Mansion",
            x: 65,
            z: 1353,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Netherwart Farm",
            x: -354,
            z: -716,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Tool & Armor Trading Hall",
            x: -334,
            z: -650,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Squid Farm",
            x: 85,
            z: -69,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Glacier",
            x: 92,
            z: 504,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Blaze Farm",
            x: 382,
            z: 790,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Mooshroom Farm",
            x: -148,
            z: 588,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Warden Farm",
            x: -68,
            z: 259,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Rabbit's Foot Farm",
            x: -125,
            z: 28,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "ADI's Base",
            x: -344,
            z: -23,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Old Creeper Farm",
            x: -640,
            z: -3,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Witch Hut",
            x: -290,
            z: 1136,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Pandemonium's Outpost",
            x: -238,
            z: 376,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Forest's Town",
            x: -225,
            z: -395,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Creeper-Preferred GMF",
            x: -283,
            z: 725,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Dual Blaze Farm",
            x: -2564,
            z: 3600,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Sand Quarry",
            x: -1748,
            z: 2804,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Dye Factory",
            x: -52,
            z: 30,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Cactus Farm",
            x: -148,
            z: -31,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Looting Fish Farm",
            x: -53,
            z: 104,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "Mini-Quarry",
            x: 711,
            z: 623,
            textColor: "white",
            font: "14px Calibri,sans serif",
        },
        {
            text: "The Pickle Peri",
            x: -58,
            z: -86,
            textColor: "white",
            font: "14px Calibri,sans serif",
        }
    ]
}

UnminedCustomMarkersSMPEnd = {
    isEnabled: true,

    markers: [
        {
            text: "Chest Hall",
            x: 50,
            z: 112,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Bulk Hall",
            x: 126,
            z: 112,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Mapart District",
            x: -383,
            z: 700,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Mob Switch",
            x: -136,
            z: -170,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Enderman Platform",
            x: -336,
            z: 16,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Concrete Converter",
            x: -305,
            z: -785,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Furnace Array",
            x: -422,
            z: 955,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Nether Tree Farm",
            x: -483,
            z: 963,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Shulker Farm",
            x: 86,
            z: -135,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Wall Street",
            x: 225,
            z: -21,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Potion Brewer",
            x: 192,
            z: 101,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "4-Type Tree Farm",
            x: 1052,
            z: -322,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Slime Shady",
            x: -1032,
            z: 704,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Waffle House",
            x: -902,
            z: -345,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        }
    ]
}

UnminedCustomMarkersCMPOW = {
    isEnabled: true,

    markers: [
        {
            text: "Spawn",
            x: 0,
            z: 0,
            textColor: "white",
            font: "bold 25px Calibri,sans serif",
        },
        // PLOTS
        {
            text: "Daniel",
            x: 0,
            z: 100,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "ForestOfLight",
            x: 5000,
            z: 5000,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "kimowin",
            x: -4466,
            z: 1327,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Kono",
            x: 3700,
            z: 3700,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Bqyden",
            x: 1000,
            z: 1000,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "R2leyser",
            x: 6900,
            z: 6900,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Caleeb",
            x: 3560,
            z: 3560,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Luke7720",
            x: 7200,
            z: 7200,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Totem",
            x: 4000,
            z: 4000,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "WolfTammer730",
            x: -730,
            z: -730,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "LucaF",
            x: 2000,
            z: 2000,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "AI Adm1n",
            x: 10000,
            z: 10000,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "A.R.C.H.",
            x: -1000,
            z: -1000,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "A.I.M.",
            x: 4200,
            z: 4200,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Kairyu",
            x: 33333,
            z: 33333,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Xeno",
            x: -9175,
            z: -9175,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Raymond",
            x: 0,
            z: 4170,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Kevsws",
            x: 1000,
            z: -1000,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Lovely Gamer",
            x: 4500,
            z: 0,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Abstract Voxel",
            x: -2000,
            z: 0,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "ADI7811",
            x: 10000,
            z: 0,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "EmirAleph",
            x: 1000,
            z: 2000,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "BigCitrusFruit",
            x: -5000,
            z: 5000,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "JTO556",
            x: 5000,
            z: -4980,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "Potion Brewery",
            x: 6896,
            z: 6818,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "H.A.S.T.E.",
            x: -4200,
            z: -4200,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "b0a/GCPU Project",
            x: 9000,
            z: 3750,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        },
        {
            text: "R.U.D. Network",
            x: 36500,
            z: 36500,
            textColor: "black",
            font: "bold 14px Calibri,sans serif",
        }
    ]
}

UnminedCustomMarkersCMPNether = {
    isEnabled: true,

    markers: [
        {
            text: "Spawn",
            x: 0,
            z: 0,
            textColor: "white",
            font: "bold 25px Calibri,sans serif",
        },
        {
            text: "ForestOfLight",
            x: 730,
            z: 550,
            textColor: "white",
            font: "bold 14px Calibri,sans serif",
        }
    ]
}

UnminedCustomMarkersCMPEnd = {
}

var mapCustomMarkersArray = [UnminedCustomMarkersSMPOW, UnminedCustomMarkersSMPNether, UnminedCustomMarkersSMPEnd, UnminedCustomMarkersCMPOW, UnminedCustomMarkersCMPNether, UnminedCustomMarkersCMPEnd];
