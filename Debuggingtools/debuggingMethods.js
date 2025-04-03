// there are a tons of debugging methods used in js. some are discussed below;

//console.log() very commonly used debugging method which is used to show anything in console.
console.log('hey im in console');

// console.info is very similar to it console.log but show that some information is inside it.
console.info('hey in in console using info');

// console.warn is used to provide warning;
let age = 14;
if(age < 18 ){
  console.warn(`your age is very small to watch this content `);
}

// console.error is used to show error in the code .
 console.error(`your program has Error : 404 `);

// console.table is used to show the similar contents i.e objects, array ,in the tabular form 
let user = function (name,age, address){
   this.name = name,
   this.age = age,
   this.address = address;
}

const user1 = new user('upendra',21,'kailali');
const user2 = new user('padam',22,'darchula');
const user3 = new user('naren',22,'bajhang');

console.table({user1,user2,user3});

//console.group is used to create group 
function groupall(){
  console.group('grouping things randomly');
  console.log('upen');
  console.warn('you get warning');
  console.groupEnd('grouping things randomly');
}

groupall();

//groupCollapsed is used similar to .group but it donot show the content in the group untill the triangle is clicked (check in console of browser) 
console.groupCollapsed('user infoi');
console.log('name: upenra dhami');
console.log('age: 21');
console.warn('you are not wearing a tie');
console.error(`doesn't have  proper id `);
console.groupEnd();




// console.count() is used to  count the number of times the same line is consoled. ie.
function letsCount(){
  console.count(`the count is: `);
}

letsCount(); letsCount(); letsCount(); letsCount(); letsCount();
