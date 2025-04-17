console.clear();

// we know what is function in console.log() , log() is function , console have many more functions 
// if we have console.clear() , here clear() is also a function so,
// console. is a object and clear(), log(),alert() ,assert() are all function inside the object console
// so ,{  CONSOLE.LOG() } is known as method.

// let us define some methods inside object upendra

 let Upen = {
  name : 'upendra',
  // normal method making way
   greet :function (){
    console.log(this.name);
  },

  // shorthand way of defining method
  greetagain(){
    console.log('hey hi upen');
  },

  //arrow function method
  greetme :() => console.log(`hi man what's up ${this.name} `) ,   // using this in arrow function is not allowed in a method  so . this will show you undefined in the output.

}

Upen.greet();
Upen.greetme();
Upen.greetagain();
