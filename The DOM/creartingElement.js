// we here are using Creating HTML elements in the js using .CreateElement()
let mypara = document.createElement('p');
mypara.textContent = "I am in the para garaph";
mypara.innerHTML = `${mypara.textContent} <br> <marquee> swagat nahi karoge hamara Shree Radhee  Shre Radhee </marquee>`;

let myimage = document.createElement('img');
myimage.src = '../image/one.jpeg';
myimage.height = '300';
myimage.classList.add('pic');

myimage.style.borderRadius = '50%';


let mydiv = document.createElement('div');
mydiv.classList.add('addiv');


// hence we have created three elements from js now to add it to the html page it cannot be added directly we need to use API 
//  .appendChild() is used to insert these things 

// mydiv.appendChild(mypara);
// mydiv.appendChild(myimage);
// document.body.appendChild(mydiv);3

// ==========================================================================================================

// There is another API which helps in inserting elements in the Adjacent side of any element so IT is very useful and BETTER also. i.e getAdjacentElement()

document.body.insertAdjacentElement('afterbegin',mydiv)
mydiv.insertAdjacentElement('beforebegin',myimage);
myimage.insertAdjacentElement('beforebegin',mypara);
                  
