'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Learnings are all here ==========================================================================

// //  SELECTING THE ELEMENT 
// console.log(document.documentElement); // selects the whole document.
// console.log(document.head);
// console.log(document.body);

const header =document.querySelector('.header');   // selects the first  element with the header class 
// console.log(document.querySelectorAll('.header'));  // returns a nodelist with the class header elements 
// console.log(document.getElementById('logo'));  //selects by id
// console.log(document.getElementsByClassName('highlight')); // return  a HTMLCollection with the highlight classname
// console.log(document.getElementsByTagName('button')); // also returns a HTMLcollection having the tagname button

// ================================== creating and deleting elements =------=--------=-============

// creating ---
 let cookie = document.createElement('div');
 cookie.classList.add('cookie-message');
 cookie.textContent = ' HEre are some coookies if you want to add ';
 cookie.innerHTML = ` Here are some coookies if you want to add     <button class ='btn btn--close'>close</button>`;

 // inserting into document

//  header.prepend(cookie);
 header.append(cookie);  // prepend and append are methods for inserting element as child 
 //header.append(cookie.cloneNode(true));  // allow the cookie to be added into another place without removal of it .ie copy the element 

//  header.prepend(cookie);

//  header.before(cookie); 
//  header.after(cookie);  // it insert element as sibling

// deleting the element
  document.querySelector('.btn--close').addEventListener('click',function() {
    cookie.remove();
  });

// ============================================  STYLES , ATTRIBUTES AND CLASSES ============================================  

// styles
 cookie.style.backgroundColor = '#37383d';
 cookie.style.width = '120%';
 
 // if we want to access the style attached to the class (cookie-message) of element cookie . we get nothing 
 console.log(cookie.style.color);
 console.log(cookie.style.fontSize);
 console.log(cookie.style.backgroundColor);

 // to get such values we  have : 
 console.log(getComputedStyle(cookie).color);
 console.log(getComputedStyle(cookie).fontSize);

 // now if we want to modify that value we proceed as : 
  cookie.style.height = Number.parseFloat(getComputedStyle(cookie).height) + 40 + 'px' ; 

 // If we have to change the style of already existing css variable then : 
  document.documentElement.style.setProperty('--color-primary', 'lightblue');
  

