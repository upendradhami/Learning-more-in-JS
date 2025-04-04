let pizza = document.querySelector('.pizza');  // selects the first .pizza class from top of the document 

// // if we have to add more pizza emojis then we can proceed as : 
// pizza.textContent = `${pizza.textContent}🍕🍕🍕🍕 `;
// // sometimes this ${pizza.textContent} may contain more html to load and render and takes more time to add so there are other methods which are as follows =======================================================>>>

//insertAdjacentText() and inseretAdjacentElement()
// there are two methods not properties like innertext, textarea or others
pizza.insertAdjacentText('afterend','🍕🍕🍕🍕🍕🍕🍕🍕🍕');

let newElement = document.createElement('div');
 newElement.style.color = 'red;';
 newElement.innerText = 'this is the new paragraph i have added from js ';


 pizza.insertAdjacentElement('beforebegin',newElement);


