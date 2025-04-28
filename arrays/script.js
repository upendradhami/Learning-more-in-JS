'use strict';

//////////////////////////////////////////// BANKIST APP          ///////////////////////////////////////////////////////                                       


// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

// here we add input movement balance method which add withdrawal and deposit values .
 
const inputMovement = function(movement) {
  document.querySelector('.movements').innerHTML = '';

  movement.forEach((mov, i) => {
    let type = mov > 0 ? "deposit" : "withdrawal" ;

     const myHtml = `
       <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i} ${type}</div>
          <div class="movements__value"> ${mov}</div>
        </div>
     `;

     document.querySelector('.movements').insertAdjacentHTML('afterbegin',myHtml);
  });
}

inputMovement(account1.movements);


// creating usernames i.e ud for upendra dhami , js Jonas schmedtmann

 const createUser = function (acc){
  acc.forEach( (accs) => {
    accs.username = accs.owner.toLowerCase().split(' ').map(arr => arr[0]).join('');
    
  })
   
 }
 console.log(createUser(accounts)); 

 //show movements 
 const showMovements = function(movements){ let Balance = movements.reduce((acc,mov,i)=>{return acc+mov},0);
 labelBalance.textContent = ` ${Balance} Eur`;
 }
 showMovements(account1.movements);








///  learning section  ↓↓ 
// // for-of and for-Each method in array:

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('================= FOR-OF ========');
// for(const [i,mov] of movements.entries()){
//   if(mov > 0) {
//     console.log(`Movement ${i}: You have deposited ${mov} `);
//   }else {
//     console.log(`Movement ${i}: You have withdraw ${Math.abs(mov)}`);
//   }
// }

// console.log('============ FOREACH =========');
// // for each take 3 parameter (value,index , array)
//  movements.forEach(function(mov,i,arr){
//   if(mov > 0) {
//     console.log(`Movement ${i}: You have deposited ${mov} `);
//   }else {
//     console.log(`Movement ${i}: You have withdraw ${Math.abs(mov)}`);
//   }
// })

// // FOREACH on Maps

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value,key,arr){
//   console.log(`${key} : ${value}`);
//   // console.log(`${arr}`);
// })


// // FOREACH On Sets 
// const countries = new Set(['japan', 'korea', 'england', 'japan','nepal', 'korea']);

// // in set value and key are both  things 
//  countries.forEach(function(value,key,sets){
//   console.log(`${key} : ${value}`);
//  })

// // ========================================================== ARRay.MAP () method :: will return a brand new array  =============
// let euroToUs = 1.1;

// // const USmoney = movements.map(function(mov){
// //   return Math.round(mov*euroToUs);
// // })


// const USmoney = movements.map((mov) => Math.round(mov*euroToUs));

// console.log(`euro =${movements} `);
// console.log(`US dollar =${USmoney}`);


// // ============================================ Array.filter() =====================================++====

// let withdraws = movements.filter(mov => mov <0);
// console.log(withdraws);

// let deposits = movements.filter(mov => mov >0);
// console.log(deposits);


// // =========================================== array.reduce(acc,value,index,array) : new accumulator which takes the sum of the values in the array   =======================

 const balance = movements.reduce(function(acc, val, i ){  
  console.log(`the value of accumulator at ${i} is ${acc}`);
  return acc+val;
  }, 0 /* it is initial value of accumulator */ );

  console.log(balance);

 ///////////////////////////////////////
// Coding Challenge #2


/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

function calcAverageHumanAge(ages){ 
let Humanage;
ages.filter(age =>{ age <=2 ? humanage = 2*age : humanage = 16 + 2*age });
}