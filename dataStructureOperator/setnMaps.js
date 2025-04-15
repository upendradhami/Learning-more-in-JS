// while revisin always go from top to bottom
'use strict';

(function() {
  // ===============================SETS ==================================
  // here we will learn about sets , Set is a collection of unique values 
//string as set 
const name = new Set('upendra');
console.log(name);

//array as set
const hotelMem = new Set(['waiter' , 'manager' , 'bartender' ,'waiter' , 'bartender', 'clurk']);
console.log(hotelMem);
console.log([...hotelMem].length); 

//has method
console.log(hotelMem.has('upendra'));
console.log(hotelMem.has('waiter'));

//add & delete
hotelMem.add('upendra');
hotelMem.delete('manager');
console.log(hotelMem);

// iterating over sets
for (const mem of hotelMem){
  console.log(mem);
}
// clearing set
hotelMem.clear();
console.log(hotelMem);
console.clear(); 

// ========================================= MAPS +++++================================
let rest = new Map();    // defining maps
rest.set('name' , 'KHAJAGHAR KAILALI'); 
rest.set('open',9).set('close',21);
  // setting keys and values in the set

rest.set('categories' , ['bajhangi', 'achhami' , 'bhramin' , 'indian ' , 'thakali']).set('starter' , ['fruit salad', 'creamroll' , 'vegetable salad' , 'pahadi soup']).set('review', 'kadak 5.0');      // we can set elements continuously.

//getting elements 
console.log(rest.get('categories'));
console.log(rest.get('review'));

//has method
console.log(rest.has('name')); console.log(rest.has('some'));

//delete method
rest.set('ok', 'soemt');console.log(rest); rest.delete('ok');console.log(rest);

//example 
let time = 5;
(time < rest.get('open') && console.log("hotel is open")) || (time >rest.get('close') && console.log(" the hotel is close "));



})();