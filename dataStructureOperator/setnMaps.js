// while revisin always go from top to bottom
'use strict';

(function() {

  const openingTime ={
    // this is also an ES6 method
     mon: {open:10 , close :22},
    tue : {open : 10, close: 23},
   [`day${1}`] : {open: 0, close: 0 },
    thur : {open:10 , close: 9},
    fri : {open : 10, close: 23},
    sat : {open : 0, close :24},
  };
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
console.log(rest.has('name'));     console.log(rest.has('some'));

//delete method
rest.set('ok', 'soemt');console.log(rest);  rest.delete('ok');console.log(rest);

//example 
let time = 5;
(time < rest.get('open') && console.log("hotel is open")) || (time >rest.get('close') && console.log(" the hotel is close "));

// Maps definition directly without set method 
 const question =new Map([
  ['quest', 'which is the best programming in the world ?'],
  [1, 'C/C++'],
  [2, 'Java '],
  [3, 'Javascript'],
  ['answer', 3],
  [true, 'Correct !!!'],
  [false , 'Try again'],
]);
 
 // converting to  maps  from the objects 
  const hours = new Map(Object.entries(openingTime));
  console.log(hours);

// Example of quiz app 
  console.log(question.get('quest'));
  for( const [ key,value] of question){
    if(typeof key === "number") {
      console.log(`Option ${key}: ${value}`);
    }
  }
  // let ans = Number(prompt('what is your answer ? (choose option 1,2,3)'));
   let ans =3;
  // question.get('answer') === ans && console.log(question.get(true)) ;
  // question.get('answer') === ans || console.log(question.get(false)) ;

  // as we have boolean return from ans we can do it as :: 
    console.log(question.get(question.get('answer') == ans));

  // maps as array 
  let arr = [...question];
  console.log(...arr);

  // size of maps 
  console.log(question.size);  /// 7 elements on array 
      

})();