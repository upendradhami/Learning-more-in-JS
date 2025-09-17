'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const showCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [countryData] = JSON.parse(this.responseText);

//     if (!countryData) {
//       console.error('Country not found!');
//       return;
//     }

//     console.log(countryData);

//     const name = countryData.name.common;
//     const region = countryData.region;
//     const population = countryData.population;
//     const language = Object.values(countryData.languages)[0];
//     const currency = Object.values(countryData.currencies)[0].name;
//     const flag = countryData.flags.png;

//     const html = `
//   <article class="country">
//   <img class="country__img" src="${flag}" />
//   <div class="country__data">
//    <h3 class="country__name">${name}</h3>
//    <h4 class="country__region">${region}</h4>
//    <p class="country__row"><span>👫</span>${(population / 1_000_000).toFixed(1)} M</p>
//    <p class="country__row"><span>🗣️</span>${language}</p>
//    <p class="country__row"><span>💰</span>${currency}</p>
//   </div>
//   </article>
//  `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }; // This is the closing brace for the showCountry function.

// showCountry('Nepal');


// // 

const rendercountry = function(data){

  const name = Object.values(data.name)[0];
  const flag = data.flags.png;
  const region = data.region;
  const population = data.population;
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].symbol;
  const html = `
       <article class="country">
       <img class="country__img" src="${flag}" />
       <div class="country__data">
        <h3 class="country__name">${name}</h3>
        <h4 class="country__region">${region}</h4>
        <p class="country__row"><span>👫</span>${(population / 1_000_000).toFixed(1)} M</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
       </div>
       </article>
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;

}


// const getCountryandNeighbour = function (country) {
//   const request1 = new XMLHttpRequest();
//   request1.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request1.send();

//   request1.addEventListener('load', function () {
//     const [data] = JSON.parse(request1.responseText);
//     const neighbour = data.borders[0];
//     console.log(neighbour);
//     console.log(data);

//     if (!data) return;
//   // rendering country 
//      rendercountry(data);
//     const request2 = new XMLHttpRequest();
//     request2.open('GET',` https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
    
//     request2.addEventListener('load',function(){
//       const [neigh] = JSON.parse(this.responseText);
//       if(!neigh) return ;

//       rendercountry(neigh);
//     })
//   });

// }

// getCountryandNeighbour('Nepal');


/////////////////////////// USING PROMISES /////////////////////////////

 const getcountry = function(country) { 

fetch(` https://restcountries.com/v3.1/alpha/${country}`).then(function(response){
  return response.json();
}).then(function(data){
   console.log(data);
})
}

getcountry('nepal');