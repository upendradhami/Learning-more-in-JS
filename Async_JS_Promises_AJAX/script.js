'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


// const rendercountry = function (data, className = '') {

//   const naam = data.name.common;
//   console.log(naam);
//   const flag = data.flags.png;
//   const region = data.region;
//   const population = data.population;
//   const language = Object.values(data.languages)[0];
//   const currency = Object.values(data.currencies)[0].symbol;
//   const html = `
//        <article class="country ${className}">
//        <img class="country__img" src="${flag}" />
//        <div class="country__data">
//         <h3 class="country__name">${naam}</h3>
//         <h4 class="country__region">${region}</h4>
//         <p class="country__row"><span>👫</span>${(population / 1_000_000).toFixed(1)} M</p>
//         <p class="country__row"><span>🗣️</span>${language}</p>
//         <p class="country__row"><span>💰</span>${currency}</p>
//        </div>
//        </article>
//       `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;

// };


// const showerror = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// }
/////////////////////////////////////// OLD School method of AJAX call 
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


////////////////// call back hell in the OLD School method 

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

//       rendercountry(neigh,'neighbour');
//     })
//   });

// }

// getCountryandNeighbour('Nepal');


/////////////////////////// AJAX CALL USING PROMISES /////////////////////////////

// country 1 data will be passed here
// const getcountry = function (country) {

//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country name not found ${response.status}`);
//       return response.json();       //  err => alert(err) response for sucess , err for error in promises call
//     }
//     ).then((data) => {
//       rendercountry(data[0])

//       // country no.2 will be passed here
//       const neighbour = data[0].borders[0];

//       // CHAIINING USING PROMISES 
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     }).then((response) => {
//       if (!response.ok)
//         throw new Error(`Country name not found ${response.status}`);
//       return response.json();       //  err => alert(err) response for sucess , err for error in promises call
//     }
//     ).then(data =>
//       rendercountry(data[0], 'neighbour')
//     ).catch(err => {    // used to catch any error occuring in the upper callbacks 
//       console.log(err);
//       showerror(`Something went wrong ${err.message}. Try again`);
//     }).finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
// }



//////////////// manually throwing and catching errors //////////////////////////
// const fetchMSG = function (url, msg) {
//   return fetch(url)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`${msg} ${response.status}`);
//       return response.json();       //  err => alert(err) response for sucess , err for error in promises call
//     }
//     );
// }


// const getcountry = function (country) {
//   fetchMSG(`https://restcountries.com/v3.1/name/${country}`, 'country name not found').then((data) => {
//     rendercountry(data[0])
//     // country no.2 will be passed here
//     const neighbour = data[0].borders[0];
//     if(!neighbour) { throw new Error("neighbour not found");} 
    
//     return fetchMSG(`https://restcountries.com/v3.1/alpha/${neighbour}`,
//       'country not found');
//   }).then(data =>
//     rendercountry(data[0], 'neighbour')
//   ).catch(err => {  
//     console.log(err);  // used to catch any error occuring in the upper callbacks 
//     showerror(`Something went wrong ${err.message}. Try again`);
//   }).finally(() => {
//     countriesContainer.style.opacity = 1;
//   })
// }


// btn.addEventListener('click', () => getcountry('Australia'));


// // /////////////////////////////////// CODING CHALLENGE1 /////////////////

// const whereAmI = function(lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   .then((response) => {
//     // Check if the response is successful
//     if (!response.ok) {
//       throw new Error(`Something went wrong! Status: ${response.status}`);
//     }
//     // Parse the response as text, since the API returns XML
//     return response.json(); 
//   }).then((data) => {
//     console.log(data); // This will log the XML string
//     // You would need to parse the XML here if you wanted to work with the data.
//   }).catch(err => {
//     console.log(` ${err.message}`);
//   });
// }

// // Example usage
// whereAmI(27.71, 85.32);




////////////////////////////////////// EVENT LOOPS IN PRACTICE /////////////////
/////////// here we will learn the practical implication of call backs and microtask queues 

// console.log('task started');
// setTimeout(() => {
//   console.log('timer after 2 sec');
// }, 2000);          /// it is passed in the callback queue

// Promise.resolve().then((res) =>{ 
//   for(let i=0; i<6000000000; i++){};
//    console.log('promise section is called here')}
//   );                                      /// it is in the microtask queue so , it will be executed first 
// console.log('Task is ended');



// //// building own promises 
//  const lotteryres = new Promise(function(resolve, reject){
//   console.log(' LOttery is being drawn , loading result ::>>> 🔮');
//   setTimeout(() => {
//      if(Math.random() >= 0.5){
//     resolve('Hurray !!  You Win 🤑🧧💰💶');
//   }else{
//     reject(new Error('YOU lost your money'));
//   }
//   }, 2000);
//  });

//  lotteryres.then(res => console.log(res)).catch(err => console.error(`${err}`));


/// showing callback hell in another method
 const wait= function(second) {
    return new Promise((resolve)=>{ setTimeout(resolve, second*1000)});
 };

 wait(2).then(()=>{
    console.log('you have waited for 2 seconds');
    return wait(3);
 }).then(()=> {
   console.log('you have waited for 3 seconds');
    return wait(4);
 }).then(()=> {
  console.log('you have waited for 4 seconds');
 })