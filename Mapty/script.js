// 'use strict' helps you write cleaner code by throwing errors
// when you use undeclared variables or bad practices.
// It's recommended for beginners to avoid mistakes.
'use strict';

// prettier-ignore tells Prettier (a code formatter) not to reformat this line
// We are creating an array (list) of all month names for later use
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// ===== Selecting HTML elements to use later =====
// document.querySelector() is used to grab (select) elements from the HTML page

const form = document.querySelector('.form'); // the workout input form
const containerWorkouts = document.querySelector('.workouts'); // where workouts are shown
const inputType = document.querySelector('.form__input--type'); // dropdown for workout type
const inputDistance = document.querySelector('.form__input--distance'); // input field for distance
const inputDuration = document.querySelector('.form__input--duration'); // input field for duration
const inputCadence = document.querySelector('.form__input--cadence'); // input for running cadence
const inputElevation = document.querySelector('.form__input--elevation'); // input for cycling elevation

let map, mapEvent;

// ====== Using Geolocation API ======
// navigator.geolocation.getCurrentPosition() is used to get user's location (latitude & longitude)
// It accepts 3 things:
// 1. successCallback → runs if location is found
// 2. errorCallback → runs if location fails
// 3. options → extra settings (accuracy, timeout etc.)

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    // ✅ SUCCESS callback function
    (position) => {
      // Extract (pull out) latitude & longitude from position.coords
      const { latitude, longitude } = position.coords;

      // Store coordinates in an array [lat, lng] format for map use
      const coords = [latitude, longitude];

      // ====== Creating Map using Leaflet.js ======
      // L.map('map') → create a map inside element with id="map"
      // setView(coords, 14) → set map center to user location, zoom level 14
      map = L.map('map').setView(coords, 14);

      // ====== Adding Tile Layer ======
      // A tile layer gives the actual map background (like Google Maps style).
      // Here we are using ESRI World Street Map service
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ).addTo(map); // add the layer to the map



      // ===================== Handling Click Events on Map ======
      map.on('click', function (mapclk) {

        mapEvent = mapclk;
        // ===== Show the form after loading =====
        // removes the 'hidden' class so that form becomes visible
        form.classList.remove('hidden');

        
        // making focus whenever page
        inputDistance.focus();
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ' ';


      });

      // ====== Initial Marker for Current Location ======
      // Show a marker at user's current location with popup
      L.marker(coords)
        .addTo(map)
        .bindPopup(`📍 You are here for workout`)
        .openPopup();
    },

    // ❌ ERROR callback function
    (error) => {
      console.error("Error Code:", error.code, "-", error.message);
      alert("Could not get your location."); // message for user
    },

    // ⚙️ Options for geolocation
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  );
} else {
  // If browser does not support geolocation
  console.error("Geolocation is not supported by this browser.");
  alert("Geolocation is not supported by your browser.");
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //clear the field and focus on the distance 
  inputDistance.focus();
  inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ' ';

  // Get latitude & longitude where user clicked
  let coords = { ...mapEvent.latlng };
  // Add a marker (pin) at that clicked location
  L.marker(coords)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false, // popup stays open
        closeOnClick: false, // clicking elsewhere doesn’t close it
        className: 'running-popup', // custom CSS style
      })
    )
    .setPopupContent('comeon workout') // text inside popup
    .openPopup();
});

// =================== making toggle the hidden row element so that while selecting between running and cycling the value of the  elevation and cadence is change =================================

inputType.addEventListener('change',function(){
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');

})