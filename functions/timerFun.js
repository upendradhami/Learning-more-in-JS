// Timer function are those function which performs some task after the given time
// It takes two things : 
// 1,,  task or function which is to be done
// 2..  time in miliseconds after which function is called.

function upen(){
  console.log(`hey buddy how are you man `);
}

setTimeout(upen, 3000); 


//another easy way to do it is by doing inside the timeout function
setTimeout(function greet(){
  console.log('how are you u' );
},1000);