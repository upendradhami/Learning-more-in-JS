// here i will use prototypal inheritance to transfer some metrics in createuser to createplayer factory

// const Createuser = function(name){
//      name = name;
//     let email = `${name}@gmail.com`;
//     function showEmail() {
//       console.log(`your email is ${email}`);
//     }
//     return{name,email,showEmail};
// };


// const Createplayer = function(name){
//   let user = Object.create(Createuser(name));
//   let count = 0;
//   function showcount(){console.log(`he play ${count} game`)};

//   return {user,gameincrease(){ count++; showcount(); }, dispCount(){showcount();}};
  
// }

// let player = Createplayer('ram');
// console.log(player);
// player.user.showEmail();
// console.log(player.user.email);
// player.gameincrease();
// player.dispCount();


// Above was a bit confusing type of inheritance using factory function but here we will understand clearly.


const Createuser = function(name){
     name = name;
    let email = `${name}@gmail.com`;
    function showEmail() {
      console.log(`your email is ${email}`);
    }

    return{name,email,showEmail};

};


const Createplayer = function(name){
  let {email,showEmail} = Createuser(name);  // this is a proper use of prototypal inheritance from Createuser(name);

  let count = 0;
  function showcount(){console.log(`he play ${count} game`)};

  return {email,        //returning the same object from Createplayer 
        showEmail,

        gameincrease(){    //this is addtional metrics in the new object
          count++; 
       showcount(); 
    },
     dispCount(){         //this is also new object
      showcount();
    }
  };
  
}

let player = Createplayer('ram');
console.log(player);
player.showEmail();
console.log(player.email);
player.gameincrease();
player.dispCount();
