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

buyButton.forEach(function(event){
  event.addEventListener('click',handleButtonClick);
})

// by passing the even in the event function we are allowed to access the various method connected with the event like event.target , event.buttons , .clientY , .defaultPrevented , .currentTarget)

function handleButtonClick(event){

//  console.log(event.currentTarget);
//   console.log(event.target); 
// console.log(event.target === event.currentTarget); 
  console.log('you have clicked on the button');
  console.log(event.target.innerHTML);
  // event.stopPropagation();
  //  console.log(event.clientY);
  // console.log(event.target.dataset);
  // console.log(event.target.className);
};


// ==================================================================

window.addEventListener('click',function (event) {
  console.log("clicked the window from anywhere ");
  event.stopPropagation();
},{capture:true});

// this {capture:true} is enabled by disabling the event.stoppropagation() above in handleButtonClick and hence , what it does is , first it always show the capture mode i.e clicking is starting from window, document, html ,body, button...... iin this way.


// if we add event.stopPropagation() in this window.addEventListener , it will stop progagation to go down flow  . now no other button click will get blocked .


// Captures goes down and bubble goes up (default)  and event.stopPropagation stop both of them at step 1st of either capture or bubble.

let photo1 = document.querySelector('.photo');
photo1.addEventListener('mouseenter',function(e){
  console.log(e.target);
  console.count(this);
});


// this mousemove event calls the eventlistener millions of time when we move our mouse
// we also have mouseenter event which fires up when we enter and leave the image 


// what happens if we console log (this ) in the photo1 above let's see.
// it will perform similar to that of the console.log(e.target);




























































































































































































































