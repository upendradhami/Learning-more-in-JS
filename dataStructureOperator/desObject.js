// Initial JavaScript File
'use strict';

(function() {
  const restaurant = {
    name: 'U-pen Restrau',
    location: 'Gaurigang -4, Rajipur , Kailali ',
    categories: ['indian' , 'chinese', 'continental', 'vegeterian', 'Organic'],
    starterMenu: ['vegetable mix', 'American fruit Salad' , 'garlic bread', 'caprese Salad'],
    mainMenu : ['Momos', 'rice' , 'aalu Paneer' , 'SAHHi Thaal '],
    order : function(starterIndex, mainIndex){
    //       console.log(` your order is : ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} .
   // `);
   return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex] ];
    },
    openingTime : {
        mon : {open:10 , close :22},
        thur : {open:10 , close: 9},
        fri : {open : 10, close: 23},
        sat : {open : 0, close :24},
    },
    showdetail: function({time, mainIndex, starterIndex , address}){
      console.log(`Order received ! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} \n Will be delivered to : ${address} at ${time}  `);
    }
  };

  //destructuring of objects 
const {location, starterMenu , mainMenu} = restaurant;
console.log(location,starterMenu,mainMenu);

// destructing the nested objects 
const {mon:{open:o,close:c}} = restaurant.openingTime;
console.log(o,c);

const nestedObj = {
  naam: 'upendra',
  adres : 'rajipur',
  Dob : {
    day: 11 ,month: 4, year:2060
  }
};

const {naam:n, Dob:{day:d,month:m,year:y}} = nestedObj; // assign some short names
console.log(`i am ${n} and my date of birth is: ${y},${m},${d}`);

//mutating the objects 
let a =100;
let b =200;
let obj = {a:23,b:20};
({a,b} =obj);
console.log(a,b);
console.clear();

//passing object to the function 
restaurant.showdetail({address:'chaumala', mainIndex:2, starterIndex:1 , time: '22:15'});


})();


