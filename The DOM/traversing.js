// IN this section we will learn about traversing through our DOM element and removing elements from our DOM.
const upen = document.querySelector('#upen');
console.log(upen);  // it will return a paragraph as it is.
console.log(upen.children); //it will return HTML collection inside paragraph i.e  <b> and <em> 

console.log(upen.childNodes);
console.log(upen.firstElementChild);
console.log(upen.lastElementChild);
console.log(upen.previousElementSibling);
console.log(upen.nextElementSibling);
console.log(upen.parentElement);
console.log(upen.children);

// console.$0
// undefined
// $0.parentElement
// you can go through this in console by selecting any element and traverse through console 


const p = document.createElement('p');
p.textContent = `hy man where were you `;
document.body.appendChild(p);
p.remove();
