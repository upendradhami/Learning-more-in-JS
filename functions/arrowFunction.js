// arrow function is also a type of an anonymous function which do not take any function name. eg:

// let CelToFah = (cel) => { // this is small example of arrow function .
//   return 9/5*cel +32;
// }

// let fahren = (cel) => 9/5*cel +32;   // this short an arrow function can be made by removing return and braces

// console.log(fahren(37));


// // we also learn about the default value
// let add = (a,b=23) => a+b;

// console.log(add(22,43));  // here we will learn about the default function pararmets 
// console.log(add(22));    //if we don't give parameters then it will make b = 23 whiech is defined default 




// using arrow function we can also return objects;
// let baby = function (first,last){
//   let name = `${first} ${last}`;
//   let age =0;
//   return {name,age};
// }

// easy way to above function definition is using arrow functions i.e
let baby = (first,last ) => ({name:`${first} ${last}` , age:0});

console.log(baby('upendra','dhami'));