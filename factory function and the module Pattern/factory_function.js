// factory function is a function which takes and returns objects .
// also supports the private variables which provides encapsulation 
 
 function greet(name){
     name = name;
     email = '@'+name;
     let count = 0;  // this is called a private variable .
     let reputaion = () =>  count++ ;
     let givereputation = () => count++;
     return {name,email,reputaion,givereputation};
 }

let obj1 = greet('ram');
 console.log(obj1);
 console.log(obj1.email);
 console.log(obj1.reputaion());
 console.log(obj1.givereputation());
 