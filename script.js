// Create a Leaflet map centered on the Netherlands
var map = L.map('map').setView([52.1326, 5.2913], 7);

// Add a base map layer (you can choose different tile layers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// You can add markers, polygons, or other map elements here as needed
// Example: Adding a marker
L.marker([52.379189, 4.899431]).addTo(map)
    .bindPopup('Amsterdam, Netherlands')
    .openPopup();
