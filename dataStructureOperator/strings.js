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

  // length 
  console.log(str1.length);
  console.log(str2.length);
  console.log('upendra'.length);

  // indexof , lastindexof()
  console.log(str1.indexOf('i'));
  console.log(str2.lastIndexOf('i'));
  console.log(str2.toUpperCase());;
 
  // slice
  console.log(str1.slice(0,7));
  console.log(str2.slice(0,-7));
  console.log(str1.slice((str1.indexOf(' ')+ 1)));
  console.log(str2.slice(str2.lastIndexOf(' ')+1));


  // function to capitalize any name (using .toLowerCase() and .toUpperCase() ;)
  const correctName = function(name){
     let name1 = name.toLowerCase();
     let name2 = name1[0].toUpperCase()+name1.slice(1);
     return name2;
  }
 
 console.log(correctName('uPenDra'));  
 console.log(correctName('parrot'));
 console.log(correctName('asdr'));

 // trimmng white space using .trim()
 let cEmail = 'upendra@outlook.in';
 let incEmail = '  Upendra@OUTlooK.IN \n';
 
 let lowerEmail = incEmail.toLowerCase().trim( );
 console.log(lowerEmail);
 console.log(lowerEmail == cEmail);

 //replacing
 const command = "All the student come to door no .23 , door no  23";
 console.log(command.replace('door','gate'));
 console.log(command.replaceAll('no','number'));

 let euro = '894,22*';
 let british = euro.replace('*','$').replace(',','.');
 console.log(`euro = ${euro}`);
 console.log(`british = ${british}`);

 // booleans check 
 const plane = "Yeti Airplane nepal";
 console.log(plane.includes('nepal'));
 console.log(plane.includes('aero'));
 console.log(plane.startsWith('Yeti'));
 console.log(plane.endsWith('pal'));
 console.log('ABCD'.search('B'));;
 
 // practice exercise search if passangerbaggage contains gun or knife if so they are not allowed.
 let baggage = function (items,name){
  let bag = items.toLowerCase();
  if(bag.includes('knife') || bag.includes('gun')){
    console.log(`${name}, you are not allowed to sit in plane`);
  }else {
    console.log(`${name} ,You are heartly welcome dear`);
  }
 }

 baggage('I have taken some biscuits, cookies , pickles and others', 'upendra');
 baggage('HERE are SOme KNifE FOR cutting of meat at my shops','shyame');
 baggage('we have taKEN SOMe GUNS FOR OUR SAFETY','hari');

console.clear(); 
// ============================================clear =============================

// Split and Join 

const naam = 'my name is upendra dhami'.split(' ');
console.log(naam); // split each word separate by ' ' and make array of those.
const addr = 'I+LIVE+IN+RAJIPUR'.split('+');
console.log(addr);

console.log(naam.join('**').toUpperCase()); // join all things in array with ("**")
console.log(addr.join('---'));

//example : let make a function to capitalize the first letter of the name.
 let capitalize = function(name){
   name = name.toLowerCase();
   name = name.split(' ');
   let cap = [];
   for (const n of name){
    // cap.push(n[0].toUpperCase()+n.slice(1));
    cap.push(n.replace(n[0], n[0].toUpperCase()));   // replace
   };
   console.log(cap.join(' '));
 }

 capitalize('hello everybody how are you all ?');
 capitalize('HELLO GUYS HOW ARE YOU ALL ?');
 capitalize('HELo k xA YRR khABar');

 // Padding of the string : padStart, padEnd
 let myname = "upendra dhami";
 console.log(myname.padStart(23,'*'));
 console.log(myname.padEnd(23,'*'));

 //example let's make a function which hide the numbers in your credit card.
 const  hidePin = function(pin){
  pin =new String(pin);
   let show = pin.slice(-5);
   console.log(show.padStart(pin.length,'*'));

 }

 hidePin(84392834984256);
 hidePin(38283848324823);
 hidePin(22233234521);

 //Repeat 
 const msg = "BAd weather ... all departures delayed..\n";
 console.log(msg.repeat(4));
})(); 