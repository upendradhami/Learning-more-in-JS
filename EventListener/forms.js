// const wes = document.querySelector('.wes');

// // e.preventDefault() is function which is used to prevent whatever the action of the selected element and we can add an event of our own.

// // now let us make a function which ask permission whether to go to the page or not by :

// wes.addEventListener('click', function(e){
//   e.preventDefault();
//   let askuser = confirm('This page might take you to malicious site ! Do you wish to proceed ? ');
 
//   if (askuser){
//    window.location = e.currentTarget.href;
//   }
//   // another way is 
//   // if (!askuser) {e.preventDefault};
  
//   console.log(askuser);
// });

// //=========================================================================================================
// // now let's know about selecting  the form from the attribute Like name= "signup" or other attribute .

// const signupForm = document.querySelector('[name = "signup"]');

 

// // now as we know how to select the form then how can we get the values of the various things inside it.  we can use .currenttarget.(name of the element of the form like (name, email , password , date, etc ))

// signupForm.addEventListener("submit", function(event) {
//   console.dir(event); // this will show the attribute in the console

//   // console.log(event.currentTarget.name.value);
//   console.log(event.currentTarget.email.value);

//   // lets say if we want to ban the name "upendra" then, can do as follow 
//   let name = event.currentTarget.name.value;
//   //  if (name == 'upendra')
//     if(name.includes('upendra')){
//     alert('you are banned bro sorry');
//     event.preventDefault();
//    }
  
// });

// //==================================================================================================
// // keydown and keyup are another two events , they are the keyboard events , they gets trigerred according to their name i.e. 
// // when the key is pressed down at that time 'keydown' gets fired and when pressed up "keyup " get fired

// function logKey(event){
//     console.log(event.type);
//     console.log(event.currentTarget.value);
   
//     };

// signupForm.name.addEventListener('keyup', logKey);
// signupForm.name.addEventListener('keydown',logKey);


// //==========================================================================================================

// // focus is another event which gets fired when we i.e when we focus on some input i.e if we enter the input area in the form it get trigerred . 
// // it can be used to provide some tips while entering something .

// // similarly when we get out of the input type then we get the "blur" event fired up. 

// signupForm.name.addEventListener("blur"
//   ,()=>{
//    console.log(event.target);
//    console.log(event.type);
//    console.log(event.currentTarget.value)
//  });

// signupForm.email.addEventListener("focus"
//   ,()=>{
//    console.log(event.target);
//    console.log(event.type);
//    console.log(event.currentTarget.value)
//  });

// //========================================================================================================
// // here we will learn about the keyboard accessibility  ; It is done when you have to access your website from the keyboard rather than the mouse sometime. 

const pic = document.querySelector('.photo');

function ClickorTab(event){
  if(event.type === 'click' || event.key === "Enter"){
    console.log("clicked");     
  }

}


pic.addEventListener('click',ClickorTab);

pic.addEventListener('keyup',ClickorTab);