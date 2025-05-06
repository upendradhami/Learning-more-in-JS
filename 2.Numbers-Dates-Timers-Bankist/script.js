// while revisin always go from top to bottom
'use strict';

(function () {

  /////////////////////////////////////////////////
  // BANKIST APP

  /////////////////////////////////////////////////
  // Data

  // DIFFERENT DATA! Contains movement dates, currency and locale

  const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
  };

  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
  };

  const accounts = [account1, account2];

  /////////////////////////////////////////////////
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




  /////////////////////////////////////////////////
  // Functions

  // formating the date
  const formatDate = function (date, locale) {
    const now = new Date();
    const days = function (date1, date2) {
      return (Math.abs(((date1 - date2) / (1000 * 60 * 60 * 24))));
    }
    const num = days(date, now);
    if (num == 0) return 'Today';
    if (num == 1) return 'yesterday';
    if (num <= 7) return `${days} Ago`;

    // formating date using internationalizing dates

    return `${new Intl.DateTimeFormat(locale).format(date)}`;
  }


  // formating the numbers
  const formatNumber = function ( locale, curren , value) {
    const val = new Intl.NumberFormat(locale,{style:'currency', currency:curren}).format(value);

    return val;
  }


  // displaying the movements 
  const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movs.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';

      const date = new Date(acc.movementsDates[i]);
      const displayDate = formatDate(date, acc.locale);
      const displayMovs = formatNumber( acc.locale, acc.currency, mov);

      const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
        } ${type}</div>
         <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${displayMovs}</div>
      </div>
    `;

      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };


// calculating Balance in total i.e current balance
  const calcDisplayBalance = function (acc) {

    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = formatNumber( acc.locale, acc.currency, acc.balance);
    // Implementing API of internationalizing date

    const nowt = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };

    const locale = navigator.language;

    //  labelDate.textContent = `${new Intl.DateTimeFormat('en-US',options).format(nowt)}`

    labelDate.textContent = `${new Intl.DateTimeFormat(locale, options).format(nowt)}`
  };

  // displaying the total summary i.e in , out , interest
  const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${formatNumber( acc.locale, acc.currency, incomes)}€`;

    const out = acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${formatNumber( acc.locale, acc.currency, Math.abs(out))}`;

    const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        // console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${formatNumber( acc.locale, acc.currency,interest)}`;
  };

  // create username
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

  const updateUI = function (acc) {
    // Display movements
    displayMovements(acc);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
  };

  ///////////////////////////////////////
  // Eventhandler
  let currentAccount; 
  let time = 30;

 // time decreasing function 
 function timeshow(){
  let min = Math.trunc(time/60);
  let sec = Math.trunc(time%60);

  labelTimer.textContent = `${min}:${sec}`;
   
  if(time == 0){
    labelWelcome.textContent = 'Log in to get started';
    containerApp.style.opacity = 0;
   
  }
  time--;

}

 // time decreasing function caller after each second
 let timer = setInterval(() => {
  timeshow();
  }, 1000);

  // seting the interval for main timer
  const maintimer = setInterval(() => {
    clearInterval(timer);
  }, 5000);




  //=================LOG  IN ==================

  btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();
    clearInterval(timer); 
    
    timeshow();
    
    currentAccount = accounts.find(
      acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
        }`;
      containerApp.style.opacity = 100;

      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();
     
     

      // Update UI
      updateUI(currentAccount);
    }
  });


  // loan transfer 
  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
      acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
      amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username
    ) {
      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      // Transfering date
      currentAccount.movementsDates.push((new Date()).toISOString());
      receiverAcc.movementsDates.push((new Date()).toISOString());

      // Update UI
      updateUI(currentAccount);
    }
  });

  // Request Loan
  btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
      // Add movement
      currentAccount.movements.push(amount);

      //Update movement data
      const now = new Date();
      currentAccount.movementsDates.push(now);

      // Update UI
      updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
  });

  btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (
      inputCloseUsername.value === currentAccount.username &&
      Number(inputClosePin.value) === currentAccount.pin
    ) {
      const index = accounts.findIndex(
        acc => acc.username === currentAccount.username
      );
      console.log(index);
      // .indexOf(23)

      // Delete account
      accounts.splice(index, 1);

      // Hide UI
      containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
  });

  let sorted = false;
  btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
  });

  //fake login 
  currentAccount = account1;
  updateUI(currentAccount);
  containerApp.style.opacity = 100;

  /////////////////////////////////////////////////
  /// LEARNINGS ARE BELOW
  // //////////////////////////////////////////////

  // // Conversion
  //  console.log(Number('834'));
  //  console.log(+'2345');

  //  // Parsing integer and floats from 
  //  console.log(Number.parseInt('23425 43oidfasdhf;lsdkgjhal;sdkhajldsgkja;lahlskgjh'));

  //  console.log(Number.parseInt('upendra 823'));
  //  console.log(Number.parseFloat('92.2 23.2 3jdsha'));

  //  // isNaN 
  //  console.log(Number.isNaN('ste'));
  //  console.log(Number.isNaN(23));
  //  console.log(Number.isNaN('sg'));
  //  console.log(Number.isNaN(23/0));

  //  // isFinite
  //  console.log(Number.isFinite('ste'));
  //  console.log(Number.isFinite(23));
  //  console.log(Number.isFinite('sg'));
  //  console.log(Number.isFinite(23/0));

  //  // isInteger
  //  console.log(Number.isInteger('ste'));
  //  console.log(Number.isInteger(23));
  //  console.log(Number.isInteger('sg'));
  //  console.log(Number.isInteger(23/0));


  //  // ===========================      math and rounding  ============================= 

  //  console.log(Math.sqrt(25));
  //  console.log(25**(1/2));
  //  console.log(8 **(1/3));;

  //  console.log(Math.max(23,2,34,5,2,1,5));
  //  console.log(Math.min(23,2,34,5,2,1,5));
  //  console.log(Math.min(23,2,'0',5,2,1,5));

  //  console.log(Math.PI * Number.parseFloat('23.34px')**2);

  //  console.log(Math.trunc(Math.random()*6)+1);

  //   const inBEt= (min,max)=> { console.log(Math.trunc(Math.random() * (max -min) +1 )+min);
  //   };

  //   inBEt(10,20);

  //   // trunc and round
  //   console.log(Math.trunc(345.93));
  //   console.log(Math.trunc(-345.93));

  //   //round
  //   console.log(Math.round(-33.99));
  //   console.log(Math.round(33.8));
  //   console.log(Math.round(33.23));

  //   //ceil and floor
  //   console.log(Math.ceil(35.23));
  //   console.log(Math.floor(35.23));

  //   // toFixed method()
  //   console.log((45.2345).toFixed(2));
  //   console.log((23.000).toFixed(1));


  //   // REMainder Operator 
  //   console.log((5%2));
  //   console.log((5/2));

  //   console.log(8%3);
  //   console.log(8/3);

  //   console.log(6%2);
  //   console.log(6/2);

  //   console.log(7%2);
  //   console.log(7/2);

  //   const isEven =n => n%2 === 0;
  //   console.log(isEven(6));
  //   console.log(isEven(3));
  //   console.log(isEven(5));
  //   console.log(isEven(8));

  // setting color to movement rows using modulo 
  labelBalance.addEventListener('click', function () {
    [...document.querySelectorAll('.movements__row')].forEach((mov, i) => {
      if (i % 2 == 0) { mov.style.background = 'red'; }
      else {
        mov.style.background = 'orange';
        mov.style.gradient = '0.9'
      }
    })
  });


  // // Bigint ============================
  //  console.log(8923419023049755); // this is the range of the numbers that javascript can read read 
  //  console.log(8923419023049755983477);// this can't be shown by js so it is called a big int so to show it we proced as
  //  console.log(8923419023049755983477n); // OR
  //  console.log(BigInt(8923419023049755)); // these are called as bigInt
  //  console.log(89n === 89); 
  //  console.log(typeof 89n);
  //  console.log(typeof 89);

  //  console.log(23n < 24);


  //  Creating Dates ================================
  //  const now = new Date();
  //  console.log(now);

  //  console.log(new Date('July 27 ,2034 '));
  //  console.log(new Date('August 23 2023 19:23:57'));

  //  console.log(new Date(2098, 11, 23, 21,3,48));
  //  console.log(new Date(2022, 10,12));

  //  console.log(new Date(0));
  //  console.log(new Date(1746431000000));

  //  // methods used in dateds
  //  const future = new Date(2234,11,29,22,58,2);
  // console.log( future.getFullYear());
  // console.log(future.getMilliseconds());
  // console.log(future.getMonth());
  // console.log(future.getDay());
  // console.log(future.toISOString())
  // console.log(future.toDateString());
  // console.log(future.toJSON());

  // // operation with dates 
  //  const calDaysPassed = (date1,date2) =>{
  //    const days = (Math.abs(((date1- date2)/(1000*60*60*24))));
  //    return days;
  //  }

  //  console.log(calDaysPassed(new Date(2024,11,14), new Date(2024,11,20)));

  // // internationalizing Numbers
  // const number = 4356346.998;
  // const option = {
  //   style: 'currency',
  //   speed: 'mile-per-hour',
  //   currency: 'usd'
  // };

  // console.log('US: ', new Intl.NumberFormat('en-US', option).format(number));
  // console.log('Nepali: ', new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'nrp' }).format(number));
  // console.log('India: ', new Intl.NumberFormat('in-IN', { style: 'currency', currency: 'INR' }).format(number));
  // console.log('US: ', new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'Eur' }).format(number));

  //SetTimout and SETINTERVAl ====================================================================================================

  // setTimeout
  const order = ['C-MOMO', 'Slice'];
  const ordering = setTimeout((order1, order2) => {
    console.log(`your order from burger house is done. and your order is:\n ${order1}, ${order2}`);
  }, 3000,
    ...order);

    console.log('waiting ......');

    if(order.includes('Slice') )clearTimeout(ordering)

  
  

})();