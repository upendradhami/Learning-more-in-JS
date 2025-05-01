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

const inputMovement = function (movement,sorted=false) {
  document.querySelector('.movements').innerHTML = '';
 
  let movs = sorted ? movements.slice().sort((a,b) => a-b) : movements;

  movs.forEach((mov, i) => {
    let type = mov > 0 ? "deposit" : "withdrawal";

    const myHtml = `
       <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i} ${type}</div>
          <div class="movements__value"> ${mov}€</div>
        </div>
     `;

    document.querySelector('.movements').insertAdjacentHTML('afterbegin', myHtml);
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
const showBalance = function (account) {
  account.Balance = account.movements.reduce((acc, mov, i) => { return acc + mov }, 0);
  labelBalance.textContent = ` ${account.Balance} €`;
}



// Display deposits and withdrawals summary
function displaySumarry(acc) {

  const sumIn = acc.movements.filter(mov => mov > 0).reduce((acc, val, i, arr) => acc + val / arr.length);
  labelSumIn.textContent = `${Math.round(sumIn)} €`


  const sumOut = acc.movements.filter(mov => mov < 0).reduce((acc, val, i, arr) => acc + val / arr.length);
  labelSumOut.textContent = `${Math.abs(sumOut)} €`

  const interest = acc.movements.filter(mov => mov > 0).map((mov) => mov * acc.interestRate / 100).reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${Math.round(interest)} %`;
}
// update UI 
const updateUI = function (acc) {

  //display summary of balance
  displaySumarry(acc);

  // handle the withdrawal and deposit
  inputMovement(acc.movements);

  // show the total balance 
  showBalance(acc);
}

// // --- =================================  IMplementing login ==================


btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  // find current user
  let currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  // configuring login
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`;

    //displaying UI 
    containerApp.style.opacity = 100;
    inputLoginPin.value = inputLoginUsername.value = '';
    updateUI(currentAccount);

  }


  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();


    //geting amount
    const amount = Number(inputTransferAmount.value);
    //getting receiveracc
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    console.log(amount, receiverAcc);

    // checks availability for tranfer
    if (amount > 0 && currentAccount.Balance >= amount && receiverAcc?.username !== currentAccount.username) {

      // update the amounts and update
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      updateUI(currentAccount);
    }

    // clear the fields 
    inputTransferAmount.value = inputTransferTo.value = '';
  });

  // here we sort the movements  here ===============================
  let sorted = false;
  btnSort.addEventListener('click', (e)=>{
    e.preventDefault();
    inputMovement(currentAccount.movements, !sorted);

    sorted = !sorted;
  })

  // Taking loan here ==========================

  btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);
    //checks if amount is less than 10% of movements 
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
      // add movement
      currentAccount.movements.push(amount);

      // update UI
      updateUI(currentAccount);
    }

    inputLoanAmount.value = '';

  });

 

  // ============================ deleting account and Use of findIndex method/

  btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    if (currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {

      // finding the index of account using findindex method
      const index = accounts.findIndex(acc => acc.username === currentAccount.username
      );

      // deleting from the accounts array
      accounts.splice(index, 1);

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

// //For strings 
// const malik = ['upendra', 'dohi', 'moartha', 'kalij'];
// console.log(malik.sort());

// //For numbers

// const arra = [203, 22, ,1,1, 2, 89, 190, 12, 56];
// console.log(arra.sort()); // it doesn't work as in for numbers to sort numbers we have to compare two consecutive numbers and then return some value as below 

// console.log(arra.sort((a,b) => {
//   if (a > b ) {return 1; }// some positive value}
//  if(  b >a ) { return -1;} }) // simply negative value
//  );


// // for ascending order , similar to above but short approach
// console.log(arra.sort((a,b) => a-b));

// // descending order
// console.log(arra.sort((a,b)=>b-a));


// //====================================== fill and from method to fill the array =====================================

// let arr = [1,2,3,4,5,6,7];
// console.log(arr);

// console.log(new Array(1,2,3,4,5,6));

// let x = new Array(7);
// console.log(x);
// console.log(x.map( _ => 5*7));

// // filling method
// console.log(x.fill(5,2,4)); // fill5 from index 2 to 4
// console.log(x.fill('upendra',4));


// // from  Array.from() method 
//  const y =Array.from({length :7}, (_,i) => i*2);
// console.log(y);


// Array.from method  in JavaScript is used for creating a new array instance from an array-like or iterable object
// basic syntax :: 
//  Array.from(arrayLike, mapFunction, thisArg)

// arrayLike: An array-like or iterable object (e.g., arguments, NodeList, Set, Map, strings).

// mapFunction (optional): A function to apply to each element before putting it in the new array.

// thisArg (optional): Value to use as this inside the map function.

;

// document.body.addEventListener('click',function() {
//   // here we convert nodelist to array
//   let newarr = Array.from(document.querySelectorAll('.movements__value'),
//    el => el.textContent.replace('€',''));

//   console.log(newarr);
  
//   // here we select all the values in the movement_value or array using map method

//   // console.log(newarr.map(el => el.textContent.replace('€','')));

// });


///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:


GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. calculate the recommended food 
  dogs.forEach((val,i,arr)=> {
    val.recFood = val.weight **0.75*28;
  });

// 2. if dog is over eating or not
  let sarah = dogs.filter(acc => acc.owners.includes('Sarah'));
  if(sarah.curFood > sarah.recFood*0.90 && sarah.curFood < sarah.recFood <1.10) {
    console.log('sarah dog is having enough food');
  }else {
    console.log('sarah\'s dog is overeating');
  }

  //3. array of owners (eatTooMuch) and (eatTooLess)

  const eatTooMuch = dogs.map(arr => {if(arr.curFood > arr.recFood) {
   return arr.owners;
  } }).flat().filter(arr=>arr);
  console.log(eatTooMuch);

  const eatTooLess = dogs.map(arr => {if(arr.curFood < arr.recFood) {
    return arr.owners;
  }}).flat().filter(arr=>arr);

  console.log(eatTooLess);

  // 4. console the above arrays 
  console.log(`${eatTooMuch.join(', ')}'s dog eats too much`); console.log(`${eatTooLess.join(', ')}'s dog eats too less`);

  //5. find whether any eats exactly recommended food 
  console.log(dogs.some(dog => dog.curFood == dog.recFood));

  //6. if all dogs eats the OKAY amount of food or not . 
  console.log(dogs.every(dog => (dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood *0.9) ));

  // 7.Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.
  const okayDog = dogs.map(dog => (dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood *0.9) && dog );
  console.log(okayDog.flat().filter(dog => dog!== false));

  //8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion
  
  
const dogsGroupedByPortion = Object.groupBy(dogs, dog => {
  if (dog.curFood > dog.recFood) {
    return 'too-much';
  } else if (dog.curFood < dog.recFood) {
    return 'too-little';
  } else {
    return 'exact';
  }
});
console.log(dogsGroupedByPortion);


// 9. sort the dogs by the numbers of owners they have
dogs.forEach(dog => {
  dog.num = dog.owners.length;
});

console.log(dogs);

const sortOwner = dogs.slice().sort((a,b) => a.num -b.num);
console.log(sortOwner);

// 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

const sorted = dogs.slice().sort((a,b) => a.recFood-b.recFood);
console.log(sorted);
