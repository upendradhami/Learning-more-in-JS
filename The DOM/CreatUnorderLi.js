// // Create list items with more descriptive names
// let item1 = document.createElement('li');
// item1.textContent = 'one';

// let item2 = document.createElement('li');
// item2.textContent = 'two';

// let item3 = document.createElement('li');
// item3.textContent = 'three';

// let item4 = document.createElement('li');
// item4.textContent = 'four';

// let item5 = document.createElement('li');
// item5.textContent = 'five';

// // Create the unordered list
// let unorderedList = document.createElement('ul');

// // Append list items in order
// unorderedList.appendChild(item1);
// unorderedList.appendChild(item2);
// unorderedList.appendChild(item3);
// unorderedList.appendChild(item4);
// unorderedList.appendChild(item5);

// // Add the complete list to the document
// document.body.appendChild(unorderedList);



// this is another way to insert html element like unordered list .
const list = document.createElement('ul');

const l3 = document.createElement('li');
l3.textContent ='three';
list.insertAdjacentElement('afterbegin',l3);

const li5 = document.createElement('li');
li5.textContent ='five';
list.insertAdjacentElement('beforeend',li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin',li1);

const li2 = document.createElement('li');
li2.textContent = 'two';
l3.insertAdjacentElement('beforebegin',li2);


const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin',li4);


document.body.insertAdjacentElement('afterbegin',list);