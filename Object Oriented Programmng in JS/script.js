`use strict`;
(function() {

  // constructor function
const Person  = function(username, birthDate){
  this.username = username;
  this.birthDate = birthDate;

//   // don't do this 
//  this.calAge = function () {
//     console.log( `${this.username} your Age is = ${2025 - this.birthDate}`);}
}

const Upendra =new Person ('Upendra', 2003);
//1. 'new' operator creates an empty new object/{}
//2. function is called , this == object created
//3. new object {}  is linked to prototype
//4. function is automatically returned to new {}
//5. as many new objects can be created as we wanted 

const Aarshabh = new Person ('Aarshabh',2019);
const Aaradhya = new Person ('Aaradhya',2013);

// Instead prototypal inheritance is used .
Person.prototype.calAge = function() {
    console.log( `${this.username} your Age is = ${2025 - this.birthDate}`);
}

// console.log(Aaradhya,Aarshabh);

// // Upendra.calAge();
// // Aaradhya.calAge();
// Aarshabh.calAge();

// console.log(Upendra instanceof Person );

// // __proto__ is used by any object to link itself with the object prototype 
// // In Person.prototype , prototype is not of the Person  but it is of the main object which is linked to all the objects created.

// console.log(Upendra.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(Upendra));
// console.log(Person.prototype.isPrototypeOf(Person));

// console.log(Object.prototype.isPrototypeOf(Person));

// // linked to object prototype
// Person.prototype.species = " Homo Sapiens";
// console.log(Upendra.species, Aaradhya.species);
// console.log(Upendra.hasOwnProperty('username'));
//  // console.log(Upendra.hasOwnProperty('species'));

// // let's see prototypal inheritance chain
// console.log(Aaradhya.__proto__);
// console.log(Aaradhya.__proto__.__proto__);
// console.log(Aarshabh.__proto__.__proto__.__proto__);

// // this will show you whole Person's definition
// console.dir(Person.prototype.__proto__.constructor);
// console.dir(Aarshabh.__proto__.constructor
// );


// // now let's see the prototype of  of the array 
//  let arr = [2,2,3,5,9,9,7,7];
//  console.log(arr.__proto__ === Array.prototype);
//  console.log(arr.__proto__);
 
//  // we  can set our own properties or method at the main prototype but it is not recommmended 

//  Array.prototype.unique = function()  {
//   return [...new Set(this)];
//  };
//  console.log(arr.unique());
 
//  // now for fun let's see how is this H1 's prototype chain is moving over 
 
//  console.dir(document.querySelector('h1').__proto__)



///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// const Car = function(make, speed) {
//  this.make = make;
//  this.speed = speed;
// }

// Car.prototype.accelerate = function() {
// return (this.speed += 10) ;
// }

// Car.prototype.brake = function() {
// return (this.speed -= 5) ;
// }


// const car1= new Car('BMW', 120);
// const car2= new Car('Mercedes', 95);

// console.log(car1,car2);
// console.log(car1.accelerate());
// console.log(car2.brake());


// ES6 classes 
  
// class expression 
  // const PersonCl = class{}

// class declaration 
 class PersonCl{
  constructor(firstName, DOB){
    this.firstName = firstName;
    this.DOB = DOB;
  }

  // calAge(){
    
  // }
 }


 // calling is similar to objects creation using 'new' keyword
  const diyan = new PersonCl('Diyan', 2024);
  console.log(diyan);
  

  PersonCl.prototype.calAge = function(){
    this.DOB = 2025- this.DOB;
    console.log(`${this.firstName} , your age is : ${this.DOB}`);
  }

  diyan.calAge();
  
  



}) ();