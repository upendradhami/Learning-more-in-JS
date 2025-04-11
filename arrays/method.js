// Initial JavaScript File
'use strict';

(function() {
   // slice method slice the array;
let arr = [12,23,63,288,10,12,445,32,453];
console.log(arr.slice(3,7));   // slice from 3 to 7
console.log(arr.slice(3));     // slice from 3 to last
console.log(arr.slice(-3));    // slice the last 3 items in array
console.log([...arr]);           // make a copy of the array known as bread method
console.log(arr.slice());          // also used to make copy
console.log(arr.slice(2,-2));    // slice from 2 and skip last two items 
console.log(arr);
console.clear();
// slice method is used to copy elements it doesn't effect the original array ;

let arr1 = ['a','b', 'c', 'd', 'e', 'f'];
 // console.log(arr1.splice(2));   // it will get the elements of the arr1 except the first two .
console.log(arr1);             // splice method actually mutate the original array
//console.log(arr1.splice(2,4));  // in the slice (2,4) have slice 2 to 4 but in splice it cut the 4 elements from the index 2 
// console.log(arr1.splice(-3));   // it will take the 3 elements from the arr1 
console.log(arr1.splice(0));
console.log(arr1);          // now the array is whole empty 
console.clear();

 arr1 = ['a','b', 'c', 'd', 'e', 'f']; //re - initializing array as it was empty above 
 // reverse method 
 let arr2 = ['j','i','h','g','f'];
 console.log(arr2.reverse(3));  //it will reverse the items from 3 to end of array and put them in postion first
 console.log(arr2.reverse(-3));  // it will reverse the items from the last counting to 3 to start
 console.log(arr2.reverse());    // it will wholly reverse the items in the array . 
 console.log(arr2);              // reverse also mutate the original array after applying the method.
 console.clear();

 // concat
 console.log(arr1.concat(arr2)); // it will just concatinate the arr1 with arr2 and create new array;
 console.log([...arr1,...arr2]); // it is alternate bread method of doing this ;

 //join
 console.log(arr1.join('--'));

 //shift
 console.log(arr2.shift());
 console.log(arr2.unshift('2'));
 console.log(arr2.unshift('33'));
 console.log(arr2.shift());
 console.log(arr2.shift());
 console.log(arr2.unshift('f'));

 //sort
 console.log(arr.sort((a,b) => a-b));  // it will short in the ascending order;
 console.log(arr.sort((a,b) => b-a)); // it will sort the array in desending order ;
})();