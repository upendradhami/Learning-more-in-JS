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

// ==========================returning Function from a function ==========================

// let greet = function (greeting){
//    return function (name) {
//     name = name.replace(name[0],name[0].toUpperCase())
//     console.log(`${greeting} , ${name}`);
//    }
// };



// // let's construct the above function using arrow function
// let  greet = greeting =>  name => { name = name.replace(name[0],name[0].toUpperCase());
// console.log(`${greeting} , ${name}`);
// }; 


   
// let greetName = greet('hi dear');
// greetName('upendra');
// greetName('pyare');

// ======================================= Call and Apply Methods ====================
// AS Normal function in javascript are type of objects so there are some methods used they are call and apply methods 

let yeti = {
  name : 'Yeti Airlines',
  flight :'dhangagi to ktm',
  booking :[],
  book(flightNO, passengerName){
    console.log(`${passengerName} Booked a flight on  ${this.name} => ${this.flight} // flight number is: ${flightNO}`);

    this.booking.push({name: this.name, flight:this.flight, flightNO, passengerName});
   
  }
}

yeti.book(785,'upendradhami');
// if we want to copy this book function to another object like buddha ,shree , etc then we can now directly use the name of this function like below but need not to define whole function again i.e 

const buddha ={
  name: 'Budhha Airlines',
  flight: 'MNR to KTM',
  booking:[],
};

const shree ={
  name: 'Shree Airlines',
  flight: 'Pokhara to KTM',
  booking:[],
};

const book = yeti.book;
// book(87,'upendra'); // this will not work as normal functions because our yeti.book() is using this.name and this.flight  , so Normal function don't take 'this' keyword .
// So, to overcome this we have two methods call () and apply ().


// // Call method takes parameters as (object name , rest parameters )
// book.call(buddha,78, 'upendra');
// book.call(shree, 98, 'Upen ji');


// // Apply method is similar to call method but it takes parameters (object name, [array of parameters])
// book.apply(buddha , [34,'Mohan Ji']);
// book.apply(shree , [23,'Hari Ji']);


// =================== ================= Bind Method ========================  --0-0-00-0-

// bind method provides a function with a first parameter of this and other same i.e

let bookshree = book.bind(shree); // shree is for this 
let bookbuddha = book.bind(buddha ,21) ; // buddha is for this scope in buddha object , we can define a variable which has to use repeatedly for ex. as above 

bookshree(234,'upendra ji');
bookbuddha( 'B Praak');
bookbuddha('Shree RAdha Rani JI ');
bookbuddha('Shree Kanhaiyya JI');
console.clear();


// ==== bind method on event listener 
 yeti.plane =343;
 yeti.buyplane = function(){
    console.log(this);
    this.plane++;
    console.log(`${this.plane} is total number of plane we have`);
  };

  document.querySelector('.buy').addEventListener('click',yeti.buyplane.bind(yeti));


  //=============== ======================partial Application ====================== ======= =====

//   const addValue = (rate,value) => { console.log(` original value :${value} , After tax: ${value = value + value*rate/100}`);
// }

//    const calVAT =   addValue.bind(NaN,13);
//    calVAT(100);
//    calVAT(200);
//    calVAT(300);

const addValue = function(rate) {
return function(value){
  console.log(` original value :${value} , After tax: ${value = value + value*rate/100}`);

}}

let calVAT = addValue(13);
calVAT(100);
calVAT(200);
calVAT(300);



})(); 