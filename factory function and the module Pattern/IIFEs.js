//IIFE>>  is  Immediately Invoked function Encapsulation 
// ==> useful for making incapsulation of functionnn
// ==> shorten the code this is not useful for others.

// function calculator(num1,num2) {
//    let add= () =>  num1+num2;
//    let sub = () => num1-num2;
//    let div = () => num1/num2;
//    let mult = () => num1*num2;

//    return {add,sub,div,mult};
// }

// let operation = calculator(4,6);
// console.log(operation.add());


// function (){
//    console.log('you are using a IIFE function');
//    return `you are cool`;
// }();
// this will not work  but adding braces will make it work .i.e a another function or use of IIFE

   (function (){
      console.log('you are using a IIFE function');
      return `you are cool`;
   })   ();