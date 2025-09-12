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

///////////////////////////////////////CREATING WORKOUT CLASS I.E PARENT CLASS

class workout {
  date = new Date();
  id = Date.now();
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
    this.id ;
    this.date ;
  }
}


// ....... //// CREATING RUNNING CLASS 
     class running extends workout {
      constructor(coords, distance, duration , cadence){
        super(coords,distance,duration);
        this.cadence = cadence;
        this.calcPace();
      }

      calcPace(){
        let pace = this.duration/ (this.distance/60);
        return pace;
      }
     }

     
// ....... //// CREATING CYCLING CLASS 
     class cycling extends workout {
      constructor(coords, distance, duration , elevationGain){
        super(coords,distance,duration);
        this.elevationGain = elevationGain;
        this.calcspeed();
      }

      calcspeed(){
        let speed = this.distance / this.duration;
        return speed;
      }
     }

     let  run1 = new running([23,12], 23 , 60 , 120);
     let  cycle1  = new cycling([22.3,13], 60 , 20, 234);
     console.log(run1,cycle1);
// =========================Using an App class to bind  all functionalities together in a one place ============
class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();

    // Listen for form submission
    form.addEventListener('submit', this._newWorkout.bind(this));

    // Listen for workout type change (running/cycling)
    inputType.addEventListener('change', this._toggleEvents.bind(this));
  }

  // ============ Get user position ============
  _getPosition() {
    form.classList.remove('hidden');
    inputDistance.focus();
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this), // ✅ success callback
        (error) => {
          console.error("Error Code:", error.code, "-", error.message);
          alert("Could not get your location.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      alert("Geolocation is not supported by your browser.");
    }
  }

  // ============ Load map ============
  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    // Create map at user location
    this.#map = L.map('map').setView(coords, 14);

    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(this.#map);

    // Save map click event + show form
    this.#map.on('click', (mapE) => {
      this.#mapEvent = mapE;   // ✅ store clicked location
      this._showForm();
    });

    // Show user marker
    L.marker(coords)
      .addTo(this.#map)
      .bindPopup(`📍 You are here for workout`)
      .openPopup();
  }

  // ============ Show workout form ============
  _showForm() {
    form.classList.remove('hidden');
    inputDistance.focus();

    // Clear fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
      '';
  }

  // ============ Toggle form fields (running/cycling) ============
  _toggleEvents() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // ============ Add new workout ============
  _newWorkout(e) {
    e.preventDefault();

    // Clear and refocus
    inputDistance.focus();
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
      '';

    // Get latitude & longitude from saved click
    const coords = this.#mapEvent.latlng;

    // Add marker on clicked location
    L.marker(coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('💪 Workout here!')
      .openPopup();
  }
}

new App();



//=[==========================================================================LEARNINGS  =======================]