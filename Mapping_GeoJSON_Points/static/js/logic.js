// Add console.log to check to see if our code is working.
// console.log("working");

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// // Add GeoJSON data.
// let sanFranAirport =
// {
//     "type": "FeatureCollection", "features": [{
//         "type": "Feature",
//         "properties": {
//             "id": "3469",
//             "name": "San Francisco International Airport",
//             "city": "San Francisco",
//             "country": "United States",
//             "faa": "SFO",
//             "icao": "KSFO",
//             "alt": "13",
//             "tz-offset": "-8",
//             "dst": "A",
//             "tz": "America/Los_Angeles"
//         },
//         "geometry": {
//             "type": "Point",
//             "coordinates": [-122.375, 37.61899948120117]
//         }
//     }
//     ]
// };

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function (feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3> <hr> <h4>Airport name: " 
//         + feature.properties.name + "</h4>")
//     }
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY
});

streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/lmankiwskyj/Mapping_Earthquakes/1d29fa1049506db14704e8580cbfdcd9ea0b28cc/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function (data) {
    console.log(data);
    //     // Creating a GeoJSON layer with the retrieved data.
    //     L.geoJSON(data).addTo(map);
    // });
    L.geoJSON(data, {
        // We turn each feature into a marker on the map.
        onEachFeature: function (feature, layer) {
            console.log(layer);
            layer.bindPopup("<h3>Airport code: " + feature.properties.faa + "</h3> <hr> <h4>Airport name: "
                + feature.properties.name + "</h4>")
        }
    }).addTo(map);
});
