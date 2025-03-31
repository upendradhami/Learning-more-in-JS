// here we will see how prototypal inheritance actually looks like
function Person(name,age){
  this.name = name,
  this.age = age;
}

 function People(name){
  this.name = name
 };
 People.prototype.show = function(){
  console.log(` hello everyone it's me ${this.name}`);
};

 let dam = Object.getPrototypeOf(People.prototype);
  console.log(dam);

Object.setPrototypeOf(Person.prototype,People.prototype);
Object.getPrototypeOf(Person.prototype);


let man1 = new Person('upendra',21);
console.log(man1.show());
