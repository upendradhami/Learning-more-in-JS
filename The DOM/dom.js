let pic = document.querySelector('.cool');
console.log(pic.classList);


// Pic.classlist has various methods to use in i.e we can add ,remove ,toggle etc  
pic.classList.add('round');
pic.classList.remove('cool');

console.log(pic.classList);

//by using toggle we can add and remove a single class back and forth like switch on/off.
function classtoggle(){
  pic.classList.toggle('round');
}

addEventListener('click',classtoggle);

// //we have another method on the classlist which is contain it alwasys return returns true ,false boolean value
// console.log(pic.classList.contains('cool'));

// // =============================================================================================//

// // here we will learn about get set attribute

// let pict = document.getElementsByClassName('wow');
// pict[0].alt = 'i m the one yah';
// pict[0].width = 500;
// pict[0].naturalWidth =233; 
//  //we cannot set pic.naturalwidth = some_value because it gives the natural size of the file .

// console.log(pict[0].naturalWidth);

// // if we have to set attributes to the image then we can
// console.log(pict[0].getAttribute('alt'));
// console.log(pict[0].setAttribute('height','600'));
// console.log(pict[0].getAttribute('height'));

// // ======================================================================================================


// DATA-ATTRIBUTES  are something that are used to insert in the elements of htmls which help in adding extra information about the elements and which can be easily accessible by the javascript and we can also modify them later 

const chitra = document.querySelector('.great');
console.log(chitra.dataset);  // it will provide the dataset i.e data-name , data-id , data-picture

chitra.addEventListener('click',() => {
alert(`hello ${chitra.dataset.name} you have clicked the picture of ${chitra.dataset.picture}`);
}
);