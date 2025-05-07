const src="../image/three.jpeg";
const name = 'upendra dhami';
const desc = `so cute kitty`;
const width = 50;

// // here we are learning how to insert html inside the document using  vanilla js

// let create = document.body.innerHTML = `<div class="div">
// <p>hello ${name} you are now at paragraph </p>
//  <img src = ${src} height=200px>
// <button> hello </hello>
// </div>
//   `;

// // do you know what is the type of create is it html element or anything else;
// // console.log(typeof(create)); it is of string type so we cannot directly add some class or anything else here.

// // we put the element from above in the dom using ::
// let value = document.querySelector('.div img');
// value.classList.add('round');


const myHTML =`
 <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}">
  </div> `;

  // there are two methods which directly convert  the string above in myHTML into elements of HTML they are : .createRange() and createFragment().

  // let fragment = document.createRange();
  // console.log(fragment);
  //this create range ==> WHICH is collection of elements of html that we can work with i.e it can take the myHTML and convert it into element fragments by using ANOTHER METHOD ==>  .createContextualFragment();


  const fragment = document.createRange().createContextualFragment(myHTML);
  console.log(fragment);

  // From here we can access the elements inside fragment and put it into the document .

  document.body.appendChild(fragment);