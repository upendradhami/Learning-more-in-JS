console.log('------OR-------');
console.log(0 || true);
console.log(undefined || null);
console.log(0 || undefined || null || 90 || 'upendra ' );   // this shorkciruit display s the first true value found among numbers of false value and true value oring 

let guestNumber;

let guest = guestNumber ? guestNumber : 10;
console.log(guest);  // this equals  below statement: 

guestNumber = 23;
console.log(guestNumber || 10);  //if true execute the guestNUmber else 10.

console.log('----------AND-----------------');
console.log('kaliya naag ' && 'upendra dhammi' && 89); // compares all the numbers and if all are true then gives the last one 
console.log('upendra' && 89 && undefined && 0); // gives the first false value ;
console.log(true && 89 && false);

let makepizza = function() {
  console.log('you can make pizza ');
} ;
let orderpizza = makepizza ? makepizza() : 10;

console.log(makepizza() && 34);

