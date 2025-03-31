// Every Objects in javascript have a prototype object , which has the properties of all real objects :

function Player(name,game,country){
  this.name = name,
  this.game = game ,
  this.country =country,
  status = function(){
    console.log(`the player is ${this.name} who plays ${this.game} from ${this.country}`);
  }

};


const player1 = new Player('Ronaldo','football','portugal');
const player2 = new Player('Messi','football','argentina');
console.clear();

//prototype is another object through which the original properties are inheritated , just player.prototype is a prototype for player1 and player2 as it return true value below.

console.log(Object.getPrototypeOf(player1) == Player.prototype);
// console.log(Object.getPrototypeOf(player2) == Player.prototype);
console.log(player2.__proto__ === Player.prototype);

//all the methods or properties defined on the prototypes will be available on the original objects too.
Player.prototype.show = function(){
  console.log('hey this is inside prototype object');
}

//this above method defined on prototype can be now accessible to original objects like player1,player2,

player1.show();
player2.show();