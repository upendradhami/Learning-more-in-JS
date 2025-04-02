// let us make two functions callme and callmeagain by two methods 
// what happen when we call both the function before defining them 

// callme('upendra dhami');    // this line will show error 

callmeagain('upendra dhami');  

// but this will not show error because function defined with the function keyword will be   taken to up up and hence this is called hoisting. 

let callme = function(name){       // this is called as variable function 
   console.log(`hello it's me ${name}`);
}

function callmeagain(name){
  console.log(`hello it's me ${name}`);   // 
}


// variable functions are used for storing the anonymous functions function (name) is anonymous function.