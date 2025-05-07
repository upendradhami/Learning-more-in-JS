//1. create a div , add a class of wrapper to it and then put it in the body.
//2. make an unorderlist ,image and add to div 

const create = document.createElement('div');
create.classList.add('wrapper');
document.body.appendChild(create);

const unorder = document.createElement('ul');
unorder.innerHTML = `
 <li>one </li>
 <li>two </li>
 <li>three </li>
 `;

const pict = document.createElement('img');
pict.src = '../image/one.jpeg';
pict.width= 500;
pict.height= 500;
create.appendChild(unorder);
 create.append(pict);
pict.alt ='cutie pie';
pict.classList.add('cute');


// 3.add a div using HTML strings and add above ul

const myHTML = `
<div> 
  <p>Paragraph One </p>
  <p>Paragraph two </p>
</div>`;

unorder.insertAdjacentHTML('beforebegin',myHTML  );


// add a class of warning to the second paragraph 
let para = document.querySelector('p');
para.nextElementSibling.classList.add('warning');

let selectd = document.getElementsByClassName('warning');
selectd[0].innerText = 'nothing to bad';

//4. create a function , generatePlayerCard that takes ini 3 arguments : name , age ,height and return some html

function generatePlayerCard(name,age,height){
  let HTMLmy = `<div class="playerCard">
  <h2> ${name}-${age} </h2>
  <p> They are ${height} and ${age} years Old. In 15 years this person would be ${age + 15} years .  That would be a tall man. </p>
  <button> remove </button>
  </div> 
  `;
  return HTMLmy;
};


// 5. now create a div of class cards. now make 4 cards from the function above and add it to the div.

const cards = document.createElement('div');
cards.classList.add('cards');
create.appendChild(cards);

for(let i=0; i<4; i++){
  let name = ['upen','dhoni','whatever','useless'];
  let age = [12,35,22,12];
  let height = [5.6,5.4, 5.6, 6];
  cards.insertAdjacentHTML('beforeend',generatePlayerCard(name[i],age[i],height[i]));
}


let remove = document.querySelectorAll('button');
console.log(remove);

remove.forEach(button => {
  button.addEventListener("click",deleteit);
  
});

function deleteit(event){
  // const buttonGotclicked = event.currentTarget;
  // buttonGotclicked.parentElement.remove();
  button
}



