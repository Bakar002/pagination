const map = L.map('map').setView([31.5204, 74.3587], 13); // Set the default location and zoom level for the map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // Load the OpenStreetMap tiles
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

const marker = L.marker([31.5204, 74.3587]).addTo(map); // Add a marker to the map at the default location
marker.bindPopup("<b>Cartlify</b><br>Lahore, Pakistan").openPopup(); // Add a popup to the marker with the company's address
