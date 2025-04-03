// call stack is known as which function called what function and what function called what function 
// it is alos debugging methood which helps to known exactly where in the herrarchy we found some error. 

function greet(name){
 return  console.log(`hello guys how are you ${name}`);
}

function go(){
  havenothing();
   greet('upendra');
}

function callhere(){
  let callit = greet(go());
  console.log(callit);
}

callhere();  // in the error we got : havenothingis not defined at go , at callhere at object.anonymous which show the function go is called which have error and go is called from callhere which is the call stack  
