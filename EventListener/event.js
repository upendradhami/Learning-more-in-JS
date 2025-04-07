// function handleclick(){
//   console.log('Click me gets clicked !!!!!');
// }

// let butts = document.querySelector('.butts');
// butts.addEventListener("click",handleclick);
// console.log(butts.classList); // this will provide the button element in the console

// this is an example of simle event listener
// this is called binding an event listener to a button i.e taking a funcion and listening for an event



// let  create = document.createElement('button');
// create.classList.add('cool');
// create.innerText = 'click it';
// document.body.append(create);


// create.addEventListener("click",handleclick);
// document.querySelector('button').removeEventListener("click",handleclick); 
// // this is an example of remove event listener
// // this is also called unbinding  

// let buyButtons = document.querySelectorAll('button.buy');
//  console.log(buyButtons); // it will provide all the nodelist of the buttons


// function buttonclick(){
//   console.log('buy btton clicked');
// }

// // for adding event listener to buttons having similar class
// // forEach is used to iterate over the nodelist of buttons
// buyButtons.forEach(button => {
//   button.addEventListener('click', buttonclick);
// });


// this is used in removing the eventlistener
// buyButtons.forEach(button => {
//   button.removeEventListener('click',buttonclick);
// });

// ========================================================
let buyButton = document.querySelectorAll('button.buy');

buyButton.forEach (function(button) {
 button.addEventListener('click', handleButtonClick);
},true);


// by passing the even in the event function we are allowed to access the various method connected with the event like event.target , event.buttons , .clientY , .defaultPrevented , .currentTarget)

function handleButtonClick(event){

 console.log(event.currentTarget);
  console.log(event.target); 
  console.log(event.target === event.currentTarget); 
  console.log(event.target.innerText)
  //  console.log(event.clientY);
  // console.log(event.target.dataset);
  // console.log(event.target.className);
};





































































































































































































































