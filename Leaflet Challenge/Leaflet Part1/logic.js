 // Function to fetch earthquake data
function fetchEarthquakeData() {
    const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched earthquake data:', data); // Log the fetched data
            // Once data is fetched, call a function to visualize it
            visualizeEarthquakeData(data);
        })
        .catch(error => {
            console.error('Error fetching earthquake data:', error);
        });
}

// Function to visualize earthquake data on the map
function visualizeEarthquakeData(data) {
    // Your visualization code here...
}

// Function to get color based on earthquake depth
function getColor(depth) {
    if (depth < 100) {
        return '#ffeda0'; // Shallow earthquakes
    } else if (depth < 300) {
        return '#feb24c'; // Intermediate earthquakes
    } else {
        return '#f03b20'; // Deep earthquakes
    }
}

// Call the fetchEarthquakeData function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchEarthquakeData();
});// Function to visualize earthquake data on the map
function visualizeEarthquakeData(data) {
    // Create a Leaflet map
    const map = L.map('map').setView([0, 0], 2);

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Loop through each earthquake feature and create markers
    data.features.forEach(feature => {
        const coordinates = feature.geometry.coordinates;
        const magnitude = feature.properties.mag;
        const depth = coordinates[2];

        // Create a marker at the earthquake coordinates
        L.circleMarker([coordinates[1], coordinates[0]], {
            radius: Math.sqrt(Math.abs(magnitude)) * 5, // Adjust marker size based on earthquake magnitude
            fillColor: getColor(depth), // Get color based on earthquake depth
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }).bindPopup(`Magnitude: ${magnitude}<br>Depth: ${depth}`).addTo(map);
    });

    // Add legend
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function (map) {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = `
            <p><strong>Legend</strong></p>
            <p><span style="background-color:${getColor(0)}"></span>Shallow</p>
            <p><span style="background-color:${getColor(300)}"></span>Intermediate</p>
            <p><span style="background-color:${getColor(700)}"></span>Deep</p>
        `;
        return div;
    };
    legend.addTo(map);
}

// Call the fetchEarthquakeData function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchEarthquakeData();
});