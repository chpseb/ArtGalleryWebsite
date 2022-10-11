let map = L.map("#map").setView([51.505, -0.09], 13);

// Adding tile layer to our map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add Marker to the Map
let marker = L.marker([51.5, -0.09]).addTo(map);
