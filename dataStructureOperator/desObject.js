// Initial JavaScript File
'use strict';

(function() {
   let weekdays = ['sun' , 'mon' , 'tue' , 
  'wed' , 'thurs' , 'fri', 'sat'];

  // defining this object here and accessing in restaurant object using it's name 
  const openingTime ={
    // this is also an ES6 method
   [weekdays[1]]: {open:10 , close :22},
   [weekdays[2]] : {open : 10, close: 23},
   [`day${1}`] : {open: 0, close: 0 , case:'holiday'},
    thur : {open:10 , close: 9},
    fri : {open : 10, close: 23},
    sat : {open : 0, close :24},
  };

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
    
    //openingTime : openingTime,
    // this below is a ENhanced usecase of the ES6 js  .
    openingTime ,


    // showdetail: function({time, mainIndex, starterIndex , address}){};
    // we can do this thing from the way below we don't need to define function in a object , this is Enhanced OBject LIteral 
     showdetails(time,mainIndex, starterIndex,address){
      console.log(`Order received ! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} \n Will be delivered to : ${address} at ${time}  `);
    }
  };

  // console.log(restaurant);

//   //destructuring of objects 
// const {location, starterMenu , mainMenu} = restaurant;
// console.log(location,starterMenu,mainMenu);

// // destructing the nested objects 
// const {mon:{open:o,close:c}} = restaurant.openingTime;
// console.log(o,c);

// const nestedObj = {
//   naam: 'upendra',
//   adres : 'rajipur',
//   Dob : {
//     day: 11 ,month: 4, year:2060
//   }
// };

// const {naam:n, Dob:{day:d,month:m,year:y}} = nestedObj; // assign some short names
// console.log(`i am ${n} and my date of birth is: ${y},${m},${d}`);

// //mutating the objects 
// let a =100;
// let b =200;
// let obj = {a:23,b:20};
// ({a,b} =obj);
// console.log(a,b);
// console.clear();

// //passing object to the function 
// restaurant.showdetail({address:'chaumala', mainIndex:2, starterIndex:1 , time: '22:15'});
// console.clear();

// //==============================================clean================================

// // ES20 introudces two useful things in JS .ie OPtional chaining(?.) and ?? nullish operator . ?. checks if exist or not 
// // OPTIONAL chaining (?. ) is used if anything is undefined then it will not show error it returns undefined value.
// //console.log(restaurant.openingTime.sun.open); 
// console.log(restaurant.openingTime.sun?.open ??  'this day doesnot exist'); 

// let week= ['sun' , 'mon' , 'tue' , 
//   'wed' , 'thurs' , 'fri', 'sat'];

//   for (const day of week) {
//     // note 1: if we put || instead of ?? this treat 0 as false value
//     // note 2: if openingTime has object in variable day then we use it as below[day].
     
//     let open = restaurant.openingTime[day]?.open ?? 'no time (this day is holiday)';
//     console.log( `on the ${day} ,   resturant opens at ${open} `);
//   }


  // // we can use optional chaining to check whether function exits or not. 
  // console.log(restaurant.order?.(0,1) ?? 'function doesn\'t exits');
  // console.log(restaurant.orderw?.(0,1) ?? 'function doesn\'t exits');


  // // also use in arrays 
  // console.log(restaurant.mainMenu?.[3] ?? 'there is no such item');
  // console.log(restaurant.mainMenu?.[9] ?? 'there is no such item');

  // // =======================================    OBJECTS KEYS , values , entries. ========================================================================
  // const properties = Object.keys(restaurant);// it provides the array of keys in the objects   
   const properties = Object.keys(openingTime);  
   console.log(`the total working days are ${properties.length} and are: `);
   let daySTR = "  "
   for(const days of properties){
       daySTR += ` ${days } ,`;
   }
   console.log(daySTR);


   //object values 
   const games = Object.values(openingTime); // IT provides the array of the values in e4ach keys of objects
   console.log(games);


   //object keys
   const names = Object.entries(openingTime);  // it provides the arry of both keys and values  
   // we can destruct the array and use the keys and values 
   for (const [day , {open:o, close:c}] of names){
    console.log(`on the day of ${day} , resautrant opens at ${o} and closes at ${c}`);
   }
 


})();


