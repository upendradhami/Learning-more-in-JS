`use strict`;
(function() {

  //=============================================== constructor function===============================
const Person  = function(username, birthDate){
  this.username = username;
  this.birthDate = birthDate;

//   // don't do this 
//  this.calAge = function () {
//     console.log( `${this.username} your Age is = ${2025 - this.birthDate}`);}
}

const Upendra =new Person ('Upendra dhami', 2003);

//======================================================================
// 1. 'new' operator creates an empty new object/{}
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

// //===================================================================================
// // __proto__ is used by any object to link itself with the object prototype 
// // In Person.prototype , prototype is not of the Person  but it is of the main object which is linked to all the objects created.

// console.log(Upendra.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(Upendra));
// console.log(Person.prototype.isPrototypeOf(Person));

// console.log(Object.prototype.isPrototypeOf(Person));

// //====================================== linked to object prototype
// Person.prototype.species = " Homo Sapiens";
// console.log(Upendra.species, Aaradhya.species);
// console.log(Upendra.hasOwnProperty('username'));
//  // console.log(Upendra.hasOwnProperty('species'));

// //================================== let's see prototypal inheritance chain
// console.log(Aaradhya.__proto__);
// console.log(Aaradhya.__proto__.__proto__);
// console.log(Aarshabh.__proto__.__proto__.__proto__);

// //=============================== this will show you whole Person's definition
// console.dir(Person.prototype.__proto__.constructor);
// console.dir(Aarshabh.__proto__.constructor
// );


// //======================================= now let's see the prototype of  of the array 
//  let arr = [2,2,3,5,9,9,7,7];
//  console.log(arr.__proto__ === Array.prototype);
//  console.log(arr.__proto__);
 
//  //========================= we  can set our own properties or method at the main prototype but it is not recommmended 

//  Array.prototype.unique = function()  {
//   return [...new Set(this)];
//  };
//  console.log(arr.unique());
 
//  //============================== now for fun let's see how is this H1 's prototype chain is moving over 
 
//  console.dir(document.querySelector('h1').__proto__)


// ================================ STATIC METHOD ================================================
// it is used only for the case if you want any single function for the object
// Static method assigned directly to the constructor
// Person.getSurname = function(username) {
//   // Split the username by spaces and return the last element
//   const parts = username.trim().split(" ");
//   return parts.length > 1 ? parts[parts.length - 1] : "";
// };


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


// // =============================================================ES6 classes =================================
  
// //=========================== class expression 
//   // const PersonCl = class{}

// //============================== class declaration 
//  class PersonCl{
//   constructor(firstName, DOB){
//     this.firstName = firstName;
//     this.DOB = DOB;
//   }

//   // calAge(){
    
//   // }
//  }


//  //================= calling is similar to objects creation using 'new' keyword
//   const diyan = new PersonCl('Diyan', 2024);
//   console.log(diyan);
  
//   // .................adding function using prototype.........
//   PersonCl.prototype.calAge = function(){
//     this.DOB = 2025- this.DOB;
//     console.log(`${this.firstName} , your age is : ${this.DOB}`);
//   }

//   console.log(PersonCl.__proto__);
//   diyan.calAge();

//  // =========================== GETTERS AND SETTERS ===================================
//    const car ={
//     name: "roylles royce",
//     price: "10000$",
//     version: [3.4 , 4.2 , 5 , 6],

//    ///.,.........getter............
//     get latestVersion(){
//       return this.version.slice(-1);
//     },
//    ///............setter............
//     set latestVersion(value){
//       this.version.push(value);
//     }

//    }
  
//    console.log(car.latestVersion);
//    car.latestVersion= 77;
//    console.log(car.latestVersion);

// //--------------=================OBject.CReate()---------===========================
// const clock = {
//   call: ()=>{
//     console.log(`It is exactly ${new Date().getHours()}o'clock now.`);
//   },
//   setalarm: (time,merdian)=>{
//      console.log(`you have set an ,alarm for ${time} ${merdian}`)
//   }
  
//  }

//  const Alarm = Object.create(clock);  // we use this instead of new operator for creating object
//  Alarm.setalarm(7,'am');
//  Alarm.call();

 // Let's now perform inhertance of student object from the object Person using constructor functions
 //---------------------------------------------------------------------------------------------
 
 
 const Student = function(username, birthDate, id,course){
   Person.call(this,username,birthDate);  // this is used for inheriting the similar things
   this.course = course;
   this.id = id;
 }

 Student.prototype = Object.create(Person.prototype);
 Student.prototype.intro = function(){
  console.log(`The name of id of student is ${this.id} and currently studying ${this.course} `)
 }

 const Ram = new Student('ram Bhatta',2005,23,'computer engineering');
 Ram.intro();
 Ram.calAge();   // now this Ram student can access to the calAge of Person.prototype
 

 console.log(Ram.__proto__);
 console.log(Ram.__proto__.__proto__ );

 console.log(Ram instanceof Student);
 console.log(Ram instanceof Person);
 console.log(Ram instanceof Object);

// -------------------PERFORMING INHERITANCE IN ES6 CLASSES -------------------------------------
 class PersonCl{
  constructor(firstName, DOB){
    this.firstName = firstName;
    this.DOB = DOB;
  }

   calAge(){
     console.log(`${this.firstName} , your age is : ${2025-this.DOB}`);
   }
 }

   class StudentCl extends PersonCl {
     constructor(firstName,DOB,id,course){
      
      super(firstName,DOB);
      this.course = course; 
      this.id = id;
      this.intro = function(){
        console.log(`The name of id of student is ${this.id} and currently studying ${this.course} `)
       }
     }
   }

   const Manju = new StudentCl("Manju Jagri",2003,43, "bbs");
   Manju.calAge();
   Manju.intro();

   //------------------------------------------now using object.create------------------------------------

    const studentProto = function(firstName,birthDate){
       this.firstName = firstName;
       this.birthDate = birthDate;
    }

    const Student1 = Object.create(studentProto);
    const Upen = Object.create(Student1);
    console.log(Upen);

}) ();