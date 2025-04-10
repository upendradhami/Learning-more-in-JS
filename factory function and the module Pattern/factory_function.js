// factory function is a function which takes and returns objects .
// also supports the private variables which provides encapsulation 
 
 function greet(name){
     name = name;
     email = '@'+name;
     let count = 0;  // this is called a private variable .
     let reputaion = () => { count++ ; return count;};
     let  givereputation = () => { count++  ; return count; };
     return {name,email,reputaion,givereputation};
 }

 let obj1 = greet('ram');
 console.log(obj1);
 console.log(obj1.email);
 console.log(obj1.reputaion());
 console.log(obj1.givereputation());
 

 //another example;

//  const Anything = function (){
//     let count = 0;    // this is private variable 
//     function showCount(){       // this is a private function as it is not returned as object
//         console.log(`your count is ${count}`);
//     }
//     return{
//         increase(){
//         count++;
//         showCount();},    //private functions are accessed by these functions 
//        decrement(){
//         count--; 
//         showCount()},
//        getcount(){
//         return count;
//     }
//  }; 

// }

// let first = Anything();
// //  first.showCount();  // show count cannot be accessed because it is a private function and not returned as object  ERROR !!! 
// first.increase();
// first.increase();
// first.decrement();

// console.log(first.getcount());
