// while revisin always go from top to bottom
'use strict';

(function() {
  // =-=============-=-==-=-=-=-=--==-=-=-=-=default parameters=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
  
  //  function booking(flightName, passengerNum =1 , price = 199*passengerNum){
  //   const book = {flightName,passengerNum,price};
  //  console.log(`${book.flightName}, total passenger: ${book.passengerNum} and Price is: ${book.price}rupees`);
  // }

  // booking('yeti' ,8 ,1600);
  // booking('helloAir',23);
  // booking('buddha');

//  // =============================passsing reference values to functions i.e. objects======================
//   let flightName = "Yeti Airlines";
//   let upendra = {
//     name: 'Upendra Dhami',
//     passportNo : 89845324522,
//   };

//   let checkIn = function(flight,passenger) {
//     flight = 'Shree Airlines';
//     passenger.name = 'Mr. ' + passenger.name;
//     if(passenger.passportNo === 89845324522){
//       console.log('you are welcome');
//     }else{
//       console.log('sorry your passport number not matched ..');
//     }
//   };

//   // objects are passed as reference value in funtion
  
//   checkIn(flightName,upendra);;
//   console.log(flightName);
//   console.log(upendra);


// // ==============================Normal functions And higher order functions =============================


// const oneWord = function (str) {
//   // (this '/ /g' is called a regular expression in js which is a ES5 tool which works similar to replaceAll(' ', ''))

//   return str.replace(/ /g,'').toLowerCase();
// };

// const firstHigher = function (str) {
//   let [first , ...others ] = str.split(' ');
//   let newstr = first.toUpperCase()+' ' +others.join(' ');
//   return newstr;
// }

// // this is here a  higher order function which take two callback functions

// const conversion = function(str,fnct){
//   console.log(`original String: ${str}`);
//   console.log(`transformation: ${fnct(str)}`);
//   console.log(`transformed by : ${fnct.name}`);

// }

// // calling higher order function by callback functions 
//  conversion('this is me upendra dhami',oneWord);
//  conversion('this is me Upendra dhami', firstHigher);


//  // another example of higherOrder function is addEventListener
//  function clicked(){
//   console.log('you have clicked');
//  }
//  document.body.addEventListener('click', clicked);


})();