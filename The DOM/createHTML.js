const src="../image/two.jpg";
const name = 'upendra dhami';
const width = 50;

// here we are learning how to insert html inside the document using  vanilla js


let create = document.body.innerHTML = `<div class="div">
<p>hello ${name} you are now at paragraph </p>
 <img src = ${src} height=200px>
<button> hello </hello>
</div>
  `;

// do you know what is the type of create is it html element or anything else;
// console.log(typeof(create)); it is of string type so we cannot directly add some class or anything else here.

// we put the element from above in the dom using ::
let value = document.querySelector('.div img');
value.classList.add('round');

