// while revisin always go from top to bottom
'use strict';

(function() {
  // default parameters 
  
  //  function booking(flightName, passengerNum =1 , price = 199*passengerNum){
  //   const book = {flightName,passengerNum,price};
  //  console.log(`${book.flightName}, total passenger: ${book.passengerNum} and Price is: ${book.price}rupees`);
  // }

  // booking('yeti' ,8 ,1600);
  // booking('helloAir',23);
  // booking('buddha');

  let flightName = "Yeti Airlines";
  let upendra = {
    name: 'Upendra Dhami',
    passportNo : 89845324522,
  };

  let checkIn = function(flight,passenger) {
    flight = 'Shree Airlines';
    passenger.name = 'Mr. ' + passenger.name;
    if(passenger.passportNo === 89845324522){
      console.log('you are welcome');
    }else{
      console.log('sorry your passport number not matched ..');
    }
  };

  // objects are passed as reference 
  
  checkIn(flightName,upendra);;
  console.log(flightName);
  console.log(upendra);

})();