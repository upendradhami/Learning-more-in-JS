// Initial JavaScript File
'use strict';

(function() {
  // work with the given data  below and do the tasks .
  const game = {
    team1 : 'Babal Mahendranagar' ,
    team2 : 'Ramailo Rajipur',
    Players: [
      [
        'Upendra', 'Ram', 'Shyam', 'Hari', 'Kale', 'Thyapchey', 'Nyaptey', 'Kupre', 'Xidrea', 'Gwachey', 'Losey'
      ],
      
      ['Dhami', 'Ramesh', 'Samir', 'Harish', 'Krishna', 'Tiru', 'Naren', 'Kamal', 'Xapey', 'Ganesh', 'Lokesh']
    ],
    score: '4,0',
    scored: ['Losey', 'Gwachey', 'Losey', 'Hari'],
    date: 'April 15th 2026',
    odds: {
       team1 : 1.44,
       x: 3.42,
       team2: 6.5
    },
  };

//  // 1. create one player array for each team 
//   let [player1 ,player2 ] = [...game.Players];
//   console.log(...player1,...player2);

//  // 2. create one varieble goal keeper and others for others in a team1
// let [gk , ...others] = player1;
// console.log(gk, others);

//  // 3. create an array of allPlayers fro all 22 players ;
//  let allPlayers = [...player1, ...player2];
//  console.log(allPlayers);
 

//  //4. during game team1 added 3 players so create new array players1Final containing all plus 'tekendra','chakra' , 'prakash'
//  let players1Final = [...player1 , 'tekendra ' , 'chakra' , 'prakash'];
//  console.log(players1Final);

//  //5. from game.odds objects make 3 variables team1 , draw , team2 
//  let {odds : {team1, x:draw , team2}} = game;
//  console.log(team1, draw , team2);


//  //6. make a function which takes the no. of players (not array ) and console them and show the goals scored as per the no. of players 
//  function printGoals(...players){
//   players.forEach(play => {console.log(`${play}`);});
//   console.log(`no. of goals scored: ${players.length}`);
//  }
//  printGoals('upendra ' , 'tekendra' , 'losey');
//  printGoals('upendra' , 'ram ' , 'upendra' , 'shyam ' , 'hari');
//  printGoals(...game.scored);   // destructured the array scored and send it to function

//  //7. team with lower odd is more likely to win so print console which team is  more likely to win 
//  console.clear();

//  let oka=9;
//  // if false , console (execute)
//  team1 > team2 || console.log('team1 wins due to little odd');

//  // if true , console ( execute)
//  team1 < team2 && console.log("team1 wins due to little odd");

//  // 8. loop over the game.scored array and proint each player name to the conole with the goal number (ex: "goal 1 : lewandowski")
//   let goal=1;
//  for (const man of game.scored) {
//   console.log(`goal no. ${goal} : ${man }`);
//   goal ++;
//  }

//  // calculate the average ffo the odds 
//  let oding = Object.values(game.odds); let avg =0;
//  for (const ods of oding) { avg = avg+ods;}; avg = avg/oding.length;
//  console.log(avg);

//  // print the odds to console of each team 
//  let odsof = Object.entries(game.odds);
//  for(const [ team, odd] of odsof) {
//   console.log(`Odd of ${game[team] ?? 'draw'}: ${odd}`)
//  }

// ======================================CODING CHALLENGE===============================

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


// 1.Create an array 'events of the different games events that happened (no duplicates)
let events =new Set(gameEvents.values()); 
console.log([...events]);

// 2. remove the yellow card given at 64 from the above
gameEvents.delete(64, '🔶 Yellow card');
console.log(gameEvents);

// 3. Print the following string to the console: "An event happened , on average, every 9 minutes (keep in min that a game has 90 minutes" 
  let time = [...gameEvents.keys()].pop();
  console.log(`An event happened , on average, every ${time/gameEvents.size} minutes `);

// 4. loop ovet the events and log them to the console, makring whether it's in the first half or second half like [first Half] 17: GOAl

for (const [min, evnt] of gameEvents){
   let time = min<=45 ? 'FIRST HALF' : 'SECOND HALF';
   console.log(`[${time}] ${min}: ${evnt}`);
}
})();