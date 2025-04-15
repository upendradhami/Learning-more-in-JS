// while revising always start from top to bottom don't go randomly
'use strict';

(function() {
  const restaurant = {
    name: 'U-pen Restrau',
    location: 'Gaurigang -4, Rajipur , Kailali ',
    categories: ['indian' , 'chinese', 'continental', 'vegeterian', 'Organic'],
    starterMenu: ['vegetable mix', 'American fruit Salad' , 'garlic bread', 'caprese Salad'],
    mainMenu : ['Momos', 'rice' , 'aalu Paneer' , 'SAHHi Thaal '],
    order : function(starterIndex, mainIndex){
//       console.log(` your order is : ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} .
// `);
   return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex] ];
    },
    pizza: function(ing1, ing2 ,ing3){  // it was  called using spread operators
      console.log(`making the pizza with ${ing1} , ${ing2} and ${ing3}`);
    }
  };

//   // Destructuring the array 
//   const arr1 = [ 1 ,2 , 4 ,543 ];
//   const a = arr1[0];
//   const b = arr1[1];
//   const c = arr1[3];
//   console.log(a,b,c);

//   const [x,y,z] = arr1;
//   console.log(x,y,z);
//   console.clear();         
//    //========================================clear=======================================


//   // destructing the objects 
//   let [one , , two ] = restaurant.categories;
//   console.log(one,two);

//   //switchings the elements 
//   [two, one] = [one, two];
//   console.log(one,two);
 
//   // destructing array from the objects using the function
//   const [starter, main] = restaurant.order(2,0);
//   console.log(`you have ordered two items which are:  ${starter}, ${main}`);
  
//   // Nested array Destructing
//   const nested = [3, 5, [23,43]];
//   // const [m, , n] = nested;
//   // console.log(m,n);
//   const [m , , [n, o]] = nested;   // this is how we do it .
//   console.log(m,n,o);  

//   // assigning default values to the array.
//   const arr = [2,5];
//   const [p=1 , q= 2 ,r=1 ,s=1] = arr;
//   console.log(arr);
//   console.log(p,q,r,s);  // r and s get the assigned value
//   console.clear();

//   // adding new elements in the array using spread operator
//   const newarr = [...arr1,23,22,];
//   console.log(newarr);
//   console.log(arr1);


//   //concating using spread operator
//   const newarr1 = [...arr,...arr1];
//   console.log(newarr1);

//   // It can be used to copy the objects also 
//   const newresturant = {...restaurant , showname: function(){ console.log(`restaurant name is  ${this.name}`) }};
//   newresturant.name = "ultar restrau";
//   console.log(newresturant);
//   newresturant.showname();
//   console.clear();       


//   // =========================================clear=============================================================

//   // // real world example of spread operators  
//   // const makepizza = [
//   //   prompt("Let's make a pizza, ingredient 1:"),
//   //   prompt("ingredient 2"),
//   //   prompt("ingredient 3"),
//   // ];
//   // restaurant.pizza(...makepizza);



//   // now let's use (...) as rest operator/pattern i.e they can be used to just oppose of the spread
//   const [u,j, ...others] = [1,2,3,4,5,6,9];
//   console.log(u,j,others);    // here ...others do not destructed the remaining items of the array else it created another array to store the remaining numbers in the array . 

//  const add = function(...number){
//   let sum =0; 
//   number.forEach(element => {
//    sum  += element;});
//    return sum;
//  }

//   console.log(add(5,4,6),
//   add(2,4,5,21,34),
//   add(34,22,623,672)
// ); 
//  console.clear(); 
// // =====================================clear ==========================================
 

// //  using for-of   LOOP to loop in menu 

// let menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const items of menu) {
//   console.log(items);
// }

// // printing the item with their numbers using enteries method on menu array 
// for ( let item of menu.entries()) {
//   console.log(item);
// }
// for (let [i,tem] of menu.entries()) {
//   console.log(`${i+1} --> ${tem}`);
// }

})();