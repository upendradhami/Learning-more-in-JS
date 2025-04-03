function init(){
  let itbe = document.querySelector('p');  // It is used to select a single item p when it is found it return to itbe
  console.log(itbe.innerText);
  itbe.innerText = "hey there you are gone ";
}

init();

let selectAll = document.querySelectorAll("p");   

// It select all the paragraph tags in the document and provide a nodelist (similar to array but not an Array ) .
console.log(selectAll);
selectAll.forEach (p => {
  p.innerText = `how are you all i have selected you all here`;
  console.log(p.innerText);
});


//selecting the div and change image inside it.
let selectDiv = document.querySelector(".item");  // Selects the container
selectDiv.innerHTML = '<img src="https://wallpapers.com/images/hd/cool-picture-art-of-lion-rlst9ftvz1dvvn37.jpg" alt="Lion Image" height="300px">';


 console.log(selectDiv);

// now selecting IMage  inside the div >

let selectImg = document.querySelector('.item img');
selectImg.setAttribute("height", "600");
   // changed height of image 

 