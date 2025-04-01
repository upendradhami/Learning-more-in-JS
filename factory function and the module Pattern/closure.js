//closure refers to the combination of a function and the surrounding state in which the function was declared.

function sumfirst (num1){
  return function sumall (num2){
    console.log(num1 + num2);
  }
}
// sumfirst(5) is called, which returns the sumall function while keeping num1 = 5 in memory.
// add5 = sumfirst(5); stores the returned function with num1 retained.
// When add5(2) is called, sumall executes and still has access to num1 = 5, so it computes 5 + 2 = 7.



let add5 = sumfirst(5);
add5(2); // It will provide an output 7 due to the closure inside the function sumfirst above 
