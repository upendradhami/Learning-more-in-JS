const wes = document.querySelector('.wes');

// e.preventDefault() is function which is used to prevent whatever the action of the selected element and we can add an event of our own.

// now let us make a function which ask permission whether to go to the page or not by :

wes.addEventListener('click', function(e){
  e.preventDefault();
  let askuser = confirm('This page might take you to malicious site ! Do you wish to proceed ? ');
 
  if (askuser){
   window.location = e.currentTarget.href;
  }
  // another way is 
  // if (!askuser) {e.preventDefault};
  
  console.log(askuser);
});


// now let's know about selecting  the form from the attribute Like name= "signup" or other attribute .

const signupForm = document.querySelector('[name = "signup"]');



// now as we know how to select the form then how can we get the values of the various things inside it.  we can use .currenttarget.(name of the element of the form like (name, email , password , date, etc ))

signupForm.addEventListener("submit", function(event) {
  console.dir(event); // this will show the attribute in the console

  // console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);

  // lets say if we want to ban the name "upendra" then, can do as follow 
  let name = event.currentTarget.name.value;
  //  if (name == 'upendra')
    if(name.includes('upendra')){
    alert('you are banned bro sorry');
    event.preventDefault();
   }
  
});
