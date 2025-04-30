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
          <div class="movements__value"> ${mov}€</div>
        </div>
     `;

     document.querySelector('.movements').insertAdjacentHTML('afterbegin',myHtml);
  });
}



// creating usernames i.e ud for upendra dhami , js Jonas schmedtmann
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
  

 //show movements in total
 const showBalance = function(account){  account.Balance = account.movements.reduce((acc,mov,i)=>{return acc+mov},0);
 labelBalance.textContent = ` ${account.Balance} €`;
 }
 


 // Display deposits and withdrawals summary
  function displaySumarry(acc){

   const sumIn = acc.movements.filter(mov => mov >0).reduce((acc,val,i,arr) => acc+val / arr.length);
    labelSumIn.textContent = `${Math.round(sumIn)} €`
  

    const sumOut = acc.movements.filter(mov => mov <0).reduce((acc,val,i,arr) => acc+val / arr.length);
     labelSumOut.textContent = `${Math.abs(sumOut)} €`

     const interest = acc.movements.filter(mov => mov >0).map((mov) => mov*acc.interestRate/100).reduce((acc,int) => acc+int,0);
     
     labelSumInterest.textContent =`${Math.round(interest)} %`;
   }
// update UI 
 const updateUI = function(acc){
 
  //display summary of balance
 displaySumarry(acc);

 // handle the withdrawal and deposit
 inputMovement(acc.movements);

 // show the total balance 
 showBalance(acc);
 }

// // --- =================================  IMplementing login ==================

   
btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  // find current user
  let currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value ); 

  // configuring login
  if( currentAccount?.pin === Number(inputLoginPin.value)){
   labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`;

   //displaying UI 
   containerApp.style.opacity = 100;
  inputLoginPin.value = inputLoginUsername.value = '';
   updateUI(currentAccount);

  }


btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  
  //geting amount
  const amount = Number(inputTransferAmount.value);
  //getting receiveracc
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount,receiverAcc);

  // checks availability for tranfer
  if( amount >0 && currentAccount.Balance >=amount && receiverAcc?.username !== currentAccount.username){
  
  // update the amounts and update
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }

  // clear the fields 
  inputTransferAmount.value = inputTransferTo.value = '';
});

// Taking loan her ==========================

btnLoan.addEventListener('click', function(e){ e.preventDefault();
  
  const amount = Number(inputLoanAmount.value);
  //checks if amount is less than 10% of movements 
  if(amount >0 && currentAccount.movements.some(mov => mov >= amount*0.1)){
    // add movement
  currentAccount.movements.push(amount);

  // update UI
  updateUI(currentAccount);
  }

  inputLoanAmount.value = '';

});

// ============================ deleting account and Use of findIndex method/

btnClose.addEventListener('click',function(e){
  e.preventDefault();
  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)){
  
  // finding the index of account using findindex method
  const index = accounts.findIndex(acc => acc.username === currentAccount.username
  );

  // deleting from the accounts array
  accounts.splice(index,1);

  //deleting the UI 
  containerApp.style.opacity = 0;

  //emptying the form fields
  inputCloseUsername.value = inputClosePin.value = '';

  //refreshing the welcome label
  labelWelcome.textContent = `Log in to get started`;
  
  }
})
});




///  learning section  ↓↓ 
// //======================== for-of and for-Each method in array:================================== 

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


// // =========================================== array.reduce(acc,val,i,arr) : new accumulator which takes the sum of the values in the array   ====================================================

//  const balance = movements.reduce(function(acc, val, i ){  
//   console.log(`the value of accumulator at ${i} is ${acc}`);
//   return acc+val;
//   }, 0 /* it is initial value of accumulator */ );

//   console.log(balance);


// // ======================================array.find() method ,========================================  similar to find method but returns an element instead of whole array 

//  let firstWithdrawal = movements.find(mov => mov <0);
//  console.log(firstWithdrawal);

//  let acc1 = accounts.find(acc => acc.owner  === 'Jessica Davis');
//  console.log(acc1);

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

// function calcAverageHumanAge(ages){ 
// let Humanage = ages.map((age) =>{ return age <=2 ? age*2 : 16+age*2;
//  });

// let dog18 = Humanage.filter(age => age >=18);
// console.log(`dog which are at least 18 are : ${dog18.length} and are of age ${dog18}`);

// let avg = dog18.reduce((acc,val)=>  acc+val, 0);

// console.log(`the average of humanage is ${avg/dog18.length}`);

// return Humanage;

//  }

// console.log(calcAverageHumanAge([5,2,4,1,15,8,3])); 
// console.log('      ');
// console.log(calcAverageHumanAge([16,6,10,5,6,1,4]));


///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


//  const calcAverageHumanAge = (ages) => ages.map(age => age<=2 ? (age*2):(16+age*2)).filter(age => age >= 18).reduce((acc,val,i,arr) => acc+val/arr.length, 0); 


// console.log(calcAverageHumanAge([5,2,4,1,15,8,3])); 
// console.log('      ');
// console.log(calcAverageHumanAge([16,6,10,5,6,1,4]));


// // ====================================== some and Every ===========================

// // we have Equality : includes();
// console.log(movements.includes(-130)); 

// // SOME: checks condition not value
// console.log(movements.some(mov => mov <0));
// console.log(movements.some(mov => mov <0));

// // Every : checks condition for every value in array
// console.log(movements.every(mov => mov >0));
// console.log(movements.every(mov => mov <0));

// // separate callbacks & DRY 
// let deposit = mov => mov >0;
// console.log(account4.movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));


// // ============================= =================== flat and flatMap =======================

// const arr = [1,2,3,[2,2,123,52,],[234,21,34 ]];
// console.log(arr.flat()); //done for only one level of nested array 

// const arr2 = [1,2,[234,234,[234,22,42,[234]]], 89,77,[687,89,[6,8]]];
// console.log(arr2.flat());
// console.log(arr2.flat(2));
// console.log(arr2.flat(3));

// // now lets flat all the movements in the accounts 
// let totalBal = accounts.map(acc => acc.movements).flat().reduce((acc,mov) => acc+mov,0);
// console.log(totalBal);


// // we can use the flatMap instead of flat and map separately like:

// let totalAmt = accounts.flatMap(acc => acc.movements).reduce((acc,mov) => acc+mov ,0);
// console.log(totalAmt);


// ======================================= sorting arrays ==========================

// strings 
const  malik = ['upendra','dohi', 'moartha','kalij'];
console.log(malik.sort());