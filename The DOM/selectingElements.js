// function init(){
//   let itbe = document.querySelector('p');  // It is used to select a single item p when it is found it return to itbe
//   console.log(itbe.innerText);
//   itbe.innerText = "hey there you are gone ";
// }

// init();

// let selectAll = document.querySelectorAll("p");   

// // It select all the paragraph tags in the document and provide a nodelist (similar to array but not an Array ) .
// console.log(selectAll);
// selectAll.forEach (p => {
//   p.innerText = `how are you all i have selected you all here`;
//   console.log(p.innerText);
// });


// =======================================================================================================

// //selecting the div and change image inside it.
// let selectDiv = document.querySelector(".item");  // Selects the container
// selectDiv.innerHTML = '<img src="https://wallpapers.com/images/hd/cool-picture-art-of-lion-rlst9ftvz1dvvn37.jpg" alt="Lion Image" height="300px">';


//  console.log(selectDiv);

// // now selecting IMage  inside the div >

// let selectImg = document.querySelector('.item img');
// selectImg.setAttribute("height", "600");
//    // changed height of image 


// //===========================================================================================================

// there is way that we can select the already selected element i.e  SEARCH THROUGH IT 

// //getElementsByClassName will provide all the list of items inside it 
// let selitem = document.getElementsByClassName('item'); 
// // here we have selected div //

// //now we will select here image using the selitem(.i.e image inside the div)
// let selIMage = selitem[0].querySelector('img');
// selIMage.setAttribute("height","500") ;


// //if we have to select another element of div item then we can go as 
// let selectHeading = selitem[0].querySelector('h1');
// selectHeading.innerText = 'i have selected it from js and changed it ';


// // here i use selitem[0] for img and h1 both because to select from FIRST DIV .item there may be other with same class .item 

// let selecth = selitem[0].querySelector('h2');
// selecth.innerText = 'i have selected the next heaading again from JS and changed it';

// // ===================================================================================================//

// Now  we will know how console.dir  show methods in it .
let heading = document.querySelector('h1');
console.dir(heading.textContent);        // method used to get text content inside h1 which includes style and other hidden tags but inner html only shows the text 


console.dir(heading.parentElement);      //method to find parent element i.e div inside which h1  is defined 
console.dir(heading.outerHTML);          //method to find what is after h1 ,
console.dir(heading.inputMode);          
console.dir(heading.innerHTML);