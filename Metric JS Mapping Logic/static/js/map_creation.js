// We create the dark view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    'Streets': streets,
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [40.7, -94.5],
	zoom: 3,
  layers: [streets]
});

// Create the layers for our map.
let expectancies = new L.layerGroup();
let borders = L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.
let overlays = {
  "Life Expectancy": expectancies,
  "Country Borders": borders,
};

// Then we add a control to the map that will allow the user to change
// which layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Retrieve the expectancy GeoJSON data.
d3.json("https://raw.githubusercontent.com/AndrewZinc/Expect_Life/Vivek_Project/Data%20for%20JS%20Mapping/point_data_with_life.json").then(function(data) {
  console.log(data)
// Creating a GeoJSON layer with the retrieved data.

// This function returns the style data for each of the life expectancy we plot on
// the map. We pass the magnitude of the life expectancy into two separate functions
// to calculate the color and radius.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.life_expectancy),
    color: "#000000",
    radius: getRadius(feature.properties.life_expectancy),
    stroke: true,
    weight: 0.5
  };
}

// This function determines the radius of the life expectancy marker based on its magnitude.
function getRadius(expectancy) {
  if (expectancy === 0) {
    return 1;
  }
  return expectancy / 5;
}

// This function determines the color of the circle based on the value of life expectancy.
function getColor(expectancy) {
  if (expectancy > 80) {
    return "#98ee00";
  }
  if (expectancy > 70) {
    return "#d4ee00";
  }
  if (expectancy > 60) {
    return "#eecc00";
  }
  if (expectancy > 50) {
    return "#ee9c00";
  }
  return "#ea2c2c";
}



// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  // We turn each feature into a circleMarker on the map.
  pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    },
  // We set the style for each circleMarker using our styleInfo function.
style: styleInfo,
  // We create a popup for each circleMarker to display the magnitude and
  //  location of the expectancy after the marker has been created and styled.
  onEachFeature: function(feature, layer) {
  layer.bindPopup("Country: " + feature.properties.sr_subunit + "<br>Life Expectancy: " + feature.properties.life_expectancy);
}
}).addTo(expectancies);
  expectancies.addTo(map);
});

// Create a legend control object.
let legend = L.control({position: 'bottomright'});

// Then add all the details for the legend.
legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend");
  const magnitudes = [40, 50, 60, 70, 80];
  const colors = [
    "#ea2c2c",
    "#ee9c00",
    "#eecc00",
    "#d4ee00",
    "#98ee00"
];
  // Looping through our intervals to generate a label with a colored square for each interval.
  for (var i = 0; i < magnitudes.length; i++) {
    console.log(colors[i]);
    div.innerHTML +=
      "<i style='background: " + colors[i] + "'></i> " +
      magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
 }
  return div;
};

legend.addTo(map);

// Create a style for the lines.
let myStyle = {
    color: "#030303",
    weight: 1,
    fillOpacity: 0.0

  }

// 3. Use d3.json to make a call to get our country border geoJSON data.
d3.json("https://raw.githubusercontent.com/AndrewZinc/Expect_Life/Vivek_Project/Data%20for%20JS%20Mapping/custom.geo.json").then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        // We turn each feature into a circleMarker on the map.
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng);
          },
        // We set the style for each circleMarker using our styleInfo function.
      style: myStyle,
        // We create a popup for each circleMarker to display the magnitude and
        //  location of the life expectancy after the marker has been created and styled.
      }).addTo(borders);
        borders.addTo(map); 
  });




