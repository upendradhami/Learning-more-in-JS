// while revisin always go from top to bottom
'use strict';

(function() {
  let str1 = 'upendra Dhami ';
  let str2 = 'gauriganga -4, rajipur';
  console.log(str1); 
  console.log(str2);

  console.log(str1[0]);
  console.log(str1[1]);
  console.log(str1[2]);
  console.log(str1[3]);
  console.log('UPEN'[0]);
  console.log('UPEN'[3]);

  console.log(str1.length);
  console.log(str2.length);
  console.log('upendra'.length);

  console.log(str1.indexOf('i'));
  console.log(str2.lastIndexOf('i'));
  console.log(str2.toUpperCase());;

  console.log(str1.slice(0,7));
  console.log(str2.slice(0,-7));
  console.log(str1.slice((str1.indexOf(' ')+ 1)));
  console.log(str2.slice(str2.lastIndexOf(' ')+1));

  const correctName = function(name){
     let name1 = name.toLowerCase();
     let name2 = name1[0].toUpperCase()+name1.slice(1);
     return name2;
  }
 
console.log(correctName('uPenDra'));  
 console.log(correctName('parrot'));
 console.log(correctName('asdr'));

})(); 