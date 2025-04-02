//IIFE>>  is  Immediately Invoked function Encapsulation 
// ==> useful for making incapsulation of functionnn
// ==> shorten the code this is not useful for others.

function calculator(num1,num2) {
   let add= () =>  num1+num2;
   let sub = () => num1-num2;
   let div = () => num1/num2;
   let mult = () => num1*num2;

   return {add,sub,div,mult};
}

let operation = calculator(4,6);
console.log(operation.add());