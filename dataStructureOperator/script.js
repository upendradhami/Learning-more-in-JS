// Initial JavaScript File
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
    }
  };

  // Destructuring the array 
  const arr1 = [ 1 ,2 , 4 ,543 ];
  const a = arr1[0];
  const b = arr1[1];
  const c = arr1[3];
  console.log(a,b,c);

  const [x,y,z] = arr1;
  console.log(x,y,z);
  console.clear();

  // destructing the objects 
  let [one , , two ] = restaurant.categories;
  console.log(one,two);

  //switchings the elements 
  [two, one] = [one, two];
  console.log(one,two);
 
  // destructing array from the objects using the function
  const [starter, main] = restaurant.order(2,0);
  console.log(`you have ordered two items which are:  ${starter}, ${main}`);
  
  // Nested array Destructing
  const nested = [3, 5, [23,43]];
  // const [m, , n] = nested;
  // console.log(m,n);
  const [m , , [n, o]] = nested;   // this is how we do it .
  console.log(m,n,o);  

  // assigning default values to the array.
  const arr = [2,5];
  const [p=1 , q= 2 ,r=1 ,s=1] = arr;
  console.log(arr);
  console.log(p,q,r,s);  // r and s get the assigned value

})();