# Leaflet Challenge

This project is part of a challenge to visualize earthquake data using Leaflet, a JavaScript library for interactive maps. The goal is to plot earthquake data obtained from the USGS GeoJSON feed and tectonic plates data obtained from the provided source URL.

## Part 1: Earthquake Visualization

In Part 1 of the challenge, we fetch earthquake data from the USGS GeoJSON feed and plot it on a Leaflet map. The markers on the map represent earthquakes, with the size of the markers indicating the magnitude of the earthquakes and the color indicating the depth.

### Instructions

- Get the earthquake dataset from the USGS GeoJSON feed.
- Visualize the earthquake data on a Leaflet map.
- Customize the markers to reflect the magnitude and depth of the earthquakes.
- Include popups with additional information about each earthquake.
- Create a legend to provide context for the map data.

## Part 2: Tectonic Plates Data

In Part 2 of the challenge (optional), we fetch tectonic plates data from the provided URL and plot it on the same map alongside the earthquake data. We also add base maps to choose from and create separate overlays for the earthquake and tectonic plates data, with layer controls to toggle them on and off independently.

### Instructions

- Fetch tectonic plates data from the provided URL.
- Visualize the tectonic plates data on the same Leaflet map.
- Add base maps to choose from.
- Create separate overlays for the earthquake and tectonic plates data.
- Add layer controls to toggle the overlays on and off independently.

## Source

- Earthquake data: [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
- Tectonic plates data: [Tectonic Plates GeoJSON](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)
