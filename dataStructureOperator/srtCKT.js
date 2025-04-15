// Initial JavaScript File
'use strict';

(function() {
  console.log('------OR-------');
console.log(0 || true);
console.log(undefined || null);
console.log(0 || undefined || null || 90 || 'upendra ' );   // this shorkciruit display s the first true value found among numbers of false value and true value oring 

let guestNumber =5;
// let guest = guestNumber ? guestNumber : 10;
let guest = guestNumber || 10;                   
console.log(guest);  // this equals  below statement: 


guestNumber = 23;
console.log(guestNumber || 10);  //if true execute the guestNUmber else 10.


// ============================================================================================

console.log('----------AND-----------------');
console.log('kaliya naag ' && 'upendra dhammi' && 89); // compares all the numbers and if all are true then gives the last one 
console.log('upendra' && 89 && undefined && 0); // gives the first false value when found;
console.log(false && 89 && true);  // return false false value at the first and leave other 

let makepizza = function() {
  console.log('you can make pizza ');
} ;

if(makepizza){
  makepizza();
}

makepizza && makepizza();      // both works the same && operator goes to the last value if all true 
console.clear();

// Nullish value ?? 
// ===========================================it takes
// 'NULL and UNDEFINED ' only as fasly values but not 0 
 
let Number = 0;
// let guest = guestNumber ? guestNumber : 10;
let guests = Number || 10;         // operator || will treat 0 and '' as false value  
 console.log(guests);         
 guests = Number && 10;         // operator || will treat 0 and '' as false value    
 console.log(guests);       
 guests = undefined ?? Number ??10;         // operator || will treat 0 and '' as true value          
console.log(guests); 


})();