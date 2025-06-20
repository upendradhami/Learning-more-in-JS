// while revisin always go from top to bottom
'use strict';

(function () {
  ///////////////////////////////////////
  // Modal window

  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('.btn--close-modal');
  const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
   const allTabs = document.querySelector('.operations__tab-container');
   const containerTab = document.querySelectorAll('.operations__tab');
   const allContent = document.querySelectorAll('.operations__content');
   const nav = document.querySelector('.nav');


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


  // first scroll  on learn MOre : 
  const btnScroll = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');

  btnScroll.addEventListener('click', function (e) {
    let secPosition = section1.getBoundingClientRect(); // gives the live position of element on the window viewport
    console.log(secPosition);

    console.log(window.pageXOffset);
    console.log(window.pageYOffset);;  // both provides the no. of pixels that  the window scroll horizontally and vertically 

    //  console.log(document.documentElement.clientHeight,document.documentElement.clientWidth);
    //  console.log(); // gives the height and width of the viewport 

    // scrolling to section1 
    window.scrollTo(secPosition.left + window.pageXOffset, secPosition.top + window.pageYOffset);

    //       console.log(secPosition.left + window.pageXOffset,secPosition.top+window.pageYOffset);
    //  });

    // window.scrollTo(
    //   {
    //     left: secPosition.left + window.pageXOffset,
    //     right: secPosition.top + window.pageYOffset
    //     , behaviour: 'smooth',
    //   });

    section1.scrollIntoView({behavior:'smooth'}); // short hand of above manual method 

  });

  // ----------------Event delegation on page navigation =========================================================

  //  method 1 
  //  document.querySelectorAll('.nav__link').forEach(el => { el.addEventListener('click', function(e){
  //   e.preventDefault();
  //   const id = this.getAttribute('href');
  //   document.querySelector(id).scrollIntoView({behavior:'smooth'});
  // })
  // });

  // For smooth page navigation above method make a tons of copy if there are many navlink so, event delegation is used for Page navigation i.e 
   // 1. At first we select the parent element 
   // 2. we apply delegation for the target element 

  // This method doesn't make any copy of it .
  document.querySelector('.nav__links').addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav__link')){
      console.log('ok');
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  })

 ///  Tabbed Components .......

   // selects the tab container 
     allTabs.addEventListener('click',function(e){

      //Remove already Active classes 
     let clicked = e.target.closest('.operations__tab');
     containerTab.forEach( t => t.classList.remove('operations__tab--active'));
     allContent.forEach(c => c.classList.remove("operations__content--active"));

     if(!clicked) return;


     // Adding the classes required
     clicked.classList.add('operations__tab--active');
     console.log(clicked.dataset.tab);
     document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
    
   })

   // Adding nice Hover Effect on the navigation link================================================

    const mousehover = function(e,opc=this){
       if(e.target.classList.contains('nav__link')){
      const link = e.target;
      const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    
    const bankistLogo = link.closest('.nav').querySelector('.nav__logo');
    console.log(bankistLogo);
    
    sibling.forEach(el => {
      if(el !== link){
        el.style.opacity = opc;
        bankistLogo.style.opacity = opc;
      } });
     
    }
  }

    // nav.addEventListener('mouseover',function(e){
    //   mousehover(e,0.5);
    // });
   
   
   nav.addEventListener('mouseout',function(e){   mousehover(e,1) })   
   
    nav.addEventListener('mouseover',mousehover.bind(0.5)); // using bind method to pass the value of opc as 0.5
   
    //  nav.addEventListener('mouseout',mousehover.bind(1)); // using bind method to pass the value of opc as 0.5
   
// =============================================== Adding STICKY CLASS  WHILE SCROLLING =============================

 const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height; // Get the height of the header

const stickyFun = function(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // If the header is not intersecting, add the sticky class
      nav.classList.add('sticky');
      console.log('my name is upendra dhami adding a sticky class');
      
    } else {
      nav.classList.remove('sticky');
      console.log('my name is upendra dhami removing a sticky class');
    }
  });
  
};

const observer = new IntersectionObserver(stickyFun, {
  root: null, // Observe relative to the viewport
  threshold: .9, // Trigger at 0% and 20% visibility
 // rootMargin: `-${navHeight}px` // Offset the trigger by header height
});

observer.observe(header); // Start observing the header


//============ Revealing the section effects =====================================================================


const reveal = function(entries, observer){
  const [entry] = entries;
  console.log(entry);
  
  if(!entry.isIntersecting) return ;
  entry.target.classList.remove('section--hidden');
}



 const sectionObserver = new IntersectionObserver(reveal,{
  root: null, 
  threshold: 0.15,
  rootMargin: `${navHeight}px`
 })

 const allSection = document.querySelectorAll('.section');
 console.log(allSection);

 allSection.forEach(section => {
    sectionObserver.observe(section);
    // section.classList.add('section--hidden');
 })
 


// ================================================= LAZY LOADING EFFECT ===================================================
  
  const imageLoader = function(entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;
     entry.target.src = entry.target.dataset.src;

     entry.target.addEventListener('load',()=> {
        entry.target.classList.remove('lazy-img');
     });

     observer.unobserve(entry.target);
  }


  const imageObserver = new IntersectionObserver(imageLoader, {
    root: null, // Observe relative to the viewport
    threshold: 0, // Trigger when the image is in the viewport,
    rootMargin: '200px' // Load images when they are within 200px of the viewport
    }); 
   
  const lazyimg = document.querySelectorAll('img[data-src]');
  lazyimg.forEach(img => imageObserver.observe(img));

  
  


  // LEARNINGS ARE ALL HERE ====/======================================================================

  // ============================================================   lEARNING ABOUT SLIDER EFFECTS =================

const slides = document.querySelectorAll('.slide')
const slider = document.querySelector('.slider');

slider.style.transform = 'scale(0.4) translateX(-600px)';
slider.style.overflow = 'visible';

slides.forEach((s,i) => {
  s.style.transform = `translateX(${i*100}%)`
});




const leftslide = document.querySelector('.slider__btn--left');
const rightslide = document.querySelector('.slider__btn--right');

let clkslide =0;

rightslide.addEventListener('click',function(){
   if(clkslide == slides.length -1){
    clkslide = 0;
   }else{
    clkslide ++;
   }

   slides.forEach((s,i)=> {
     s.style.transform = `translateX(${(i-clkslide)*100}%)`;
   })
})


leftslide.addEventListener('click',function(){
   if(clkslide == 0 ){
    clkslide = slides.length -1;
   }else{
    clkslide --;
   }

   slides.forEach((s,i)=> {
     s.style.transform = `translateX(${(i-clkslide)*100}%)`;
   })
})



  // //  SELECTING THE ELEMENT 
  // console.log(document.documentElement); // selects the whole document.
  // console.log(document.head);
  // console.log(document.body);

  // const header =document.querySelector('.header');   // selects the first  element with the header class 
  // console.log(document.querySelectorAll('.header'));  // returns a nodelist with the class header elements 
  // console.log(document.getElementById('logo'));  //selects by id
  // console.log(document.getElementsByClassName('highlight')); // return  a HTMLCollection with the highlight classname
  // console.log(document.getElementsByTagName('button')); // also returns a HTMLcollection having the tagname button

  // // ================================== creating and deleting elements =------=--------=-============

  // // creating ---
  //  let cookie = document.createElement('div');
  //  cookie.classList.add('cookie-message');
  //  cookie.textContent = ' HEre are some coookies if you want to add ';
  //  cookie.innerHTML = ` Here are some coookies if you want to add     <button class ='btn btn--close'>close</button>`;
  //
  // 
  //   // inserting into document

  //  header.prepend(cookie);
  //  header.append(cookie);  // prepend and append are methods for inserting element as child 
  //header.append(cookie.cloneNode(true));  // allow the cookie to be added into another place without removal of it .ie copy the element 

  //  header.prepend(cookie);

  //  header.before(cookie); 
  //  header.after(cookie);  // it insert element as sibling

  // // deleting the element
  //   document.querySelector('.btn--close').addEventListener('click',function() {
  //     cookie.remove();
  //   });

  // // ============================================  STYLES , ATTRIBUTES AND CLASSES ============================================  

  // // styles
  //  cookie.style.backgroundColor = '#37383d';
  //  cookie.style.width = '120%';

  //  // if we want to access the style attached to the class (cookie-message) of element cookie . we get nothing 
  //  console.log(cookie.style.color);
  //  console.log(cookie.style.fontSize);
  //  console.log(cookie.style.backgroundColor);

  //  // to get such values we  have : 
  //  console.log(getComputedStyle(cookie).color);
  //  console.log(getComputedStyle(cookie).fontSize);

  //  // now if we want to modify that value we proceed as : 
  //   cookie.style.height = Number.parseFloat(getComputedStyle(cookie).height) + 40 + 'px' ; 

  //  // If we have to change the style of already existing css variable then : 
  //   document.documentElement.style.setProperty('--color-primary', 'lightblue');



  // =================================================== Event PRoPagation and event bubbling ============================


  //  const randomInt = (max, min) => Math.floor(Math.random() * (max-min +1) +min);
  //   const bgcolor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

  //   document .querySelector('.nav__link').addEventListener('click', function(e) {
  //     this.style.backgroundColor = bgcolor();
  //   })

  //   document .querySelector('.nav__links').addEventListener('click', function(e) {
  //     this.style.backgroundColor = bgcolor();
  //   }, true)
    
  //   document .querySelector('.nav').addEventListener('click', function(e) {
  //     this.style.backgroundColor = bgcolor();
  //   },true)
  

  // =====================================DOM TRAVERSING =================================================

  //traversing through childrens i.e downWARD Direction .........

  /*
  const sec1 =document.querySelector('#section--1');
  console.log(sec1.childNodes);  // all nodes 
  console.log(sec1.children);    // html collections 
  sec1.firstElementChild.color ='red';
  sec1.children[0].style.color = 'palegreen';  
  console.log(sec1.children[1].children[3].getAttribute('alt'));
  console.log(sec1.firstElementChild.style.color='red');
  console.log(sec1.firstChild);
  console.log(sec1.lastChild);
  console.log(sec1.lastElementChild);;
  */
  // traversing through parents .i.e UPward Direction----------
  
  /* 
  const h1 = document.querySelector('h1');
  console.log(h1.parentElement);
  console.log(h1.parentNode);


  //element1111.closest(element)  provide the closest element to the element11111 
  h1.closest('.header__title').style.backgroundColor = 'pink';
  h1.closest('h1').style.backgroundColor = 'red';

  // traversing siblings I.e SIDEWAYS DIRECTION =====

  console.log(h1.nextElementSibling);
  console.log(h1.previousElementSibling);

  console.log(h1.previousSibling);
  console.log(h1.nextSibling);

  // console.log(h1.parentElement.children); // it provides all the siblings of h1 , include h1 
 
  [...h1.parentElement.children].forEach(function(el){
    if(el != h1) el.style.transform = 'scale(0.5)';
  })
 */

  // ======================================================= intersection observer API =========================================================
  // Intersection Observer API is used to observe the visibility of an element in the viewport.
  // It is used to implement lazy loading, infinite scrolling, and other features that require visibility detection.
  // It is a powerful API that allows you to observe the visibility of an element in the viewport. 

  //  function anyfunction(entries, observer) {
  //   entries.forEach(entry => {
  //     console.log(entry);
  //     if (entry.isIntersecting){
  //       console.log('call my name -- upendra dhami'); };
  //     }) }
   
  //  let sectionobserver = new IntersectionObserver( anyfunction,{
  //   root: null, // null means the viewport
  //   threshold: 0.1, // 10% of the element is visible
  //   rootMargin: '0px' // no margin
  //  })

  //   sectionobserver.observe(section1); // observe the section1 element
  




})();