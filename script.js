// Initialize the map
const map = L.map('map').setView([0, 0], 2); // Default view at the center of the world

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker with a popup
const marker = L.marker([51.505, -0.09]).addTo(map);
marker.bindPopup("<b>Welcome to London!</b><br>This is a sample popup.").openPopup();

// Add a circle
const circle = L.circle([48.8566, 2.3522], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 50000
}).addTo(map);
circle.bindPopup("This is a circle around Paris.");

// Add a polygon
const polygon = L.polygon([
  [40.7128, -74.0060],
  [34.0522, -118.2437],
  [41.8781, -87.6298]
], {
  color: 'blue'
}).addTo(map);
polygon.bindPopup("This is a polygon connecting three US cities.");

// Add geolocation feature
map.locate({ setView: true, maxZoom: 12 });
map.on('locationfound', (e) => {
  L.marker(e.latlng).addTo(map).bindPopup("You are here!").openPopup();
});

// Add event listener for clicks on the map
map.on('click', (e) => {
  const { lat, lng } = e.latlng;
  L.marker([lat, lng]).addTo(map).bindPopup(`Coordinates: ${lat.toFixed(5)}, ${lng.toFixed(5)}`).openPopup();
});
