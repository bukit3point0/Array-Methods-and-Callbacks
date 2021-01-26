import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const final2014 = fifaData.filter(team => team.Year === 2014 && team.Stage === "Final")[0];
console.log(final2014); 
//(a) Home Team name for 2014 world cup final
console.log(final2014['Home Team Name']);

//(b) Away Team name for 2014 world cup final
console.log(final2014["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final
console.log(final2014["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final
console.log(final2014["Away Team Goals"]);

//(e) Winner of 2014 world cup final */
const winner = function (array) {
    if (array["Home Team Goals"] > array["Away Team Goals"]) {
        return array["Home Team Name"];
    } else {
        return array["Away Team Name"];
    }
}
console.log(winner(final2014));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

// function getFinals(array) {
//     const finalTeams = array.filter(team => team.Stage === "Final");

//     return finalTeams;
// }

// console.log(getFinals(fifaData));

function getFinals(array) {
    const finalTeams = array.filter(team => team.Stage === "Final");
    return finalTeams;
}

// console.log(getFinals(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

// function getYears(array, callback) {
//     const years = callback(array).map(name => name.Year);
//     return years;

// }

function getYears(array, finalsCallback) {
    const callback = finalsCallback(array);
    const years = callback.map (name => name.Year);
    return years;
}

// console.log(fifaData, getFinals)

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

// function getWinners(array, callback) {
//     const winners = [];
//     const teams = callback(array).filter(team => `${team["Home Team Name"]} ${team["Home Team Goals"]} ${team["Away Team Name"]} ${team["Away Team Goals"]}`);
//     teams.forEach((team,index) => {
//         if (team["Home Team Goals"] > team["Away Team Goals"]) {
//             winners.push(teams[index]["Home Team Name"]);
//         } else {
//             winners.push(teams[index]["Away Team Name"]);
//         }
//     });
//     console.log(teams);
//     return winners;
// }

// console.log(getWinners(fifaData, getFinals));

function getWinners(array, finalsCallback) {
    const winners = [];
    const teams = finalsCallback(array);
    teams.forEach((team,index) => {

        if (team["Home Team Goals"] > team["Away Team Goals"]) {
            winners.push(teams[index]["Home Team Name"]);
        } else {
            winners.push(teams[index]["Away Team Name"]);
        }
    });
    return winners;
}

// Alternatively:
// fucntion getWinners(array,finalsCallback) {
//     let winners = finalsCallback(array).map((team) => {
//         if (team["Home Team Goals"] > team["Away Team Goals"]) {
//             winners.push(teams[index]["Home Team Name"]);
//         } else {
//             winners.push(teams[index]["Away Team Name"]);
//         }
//     });
// }

console.log(getWinners(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

// function getWinnersByYear(array, callback3, callback4) {
//     const winnerString =  [];
    
    
//     const year = callback3(array,getFinals);
//     console.log(`Year ${year}`);
//     const winner = callback4(array,getFinals);
//     console.log(`Winner ${winner}`);
//     year.map (boop =>
//         winnerString.push(`In ${year}, ${winner} won the world cup!`)
//     );

//     return winnerString;
// }

// console.log(getWinnersByYear(fifaData, getYears, getWinners));


function getWinnersByYear(array, yearsCallback, winnersCallback) {
    const year = yearsCallback(array, getFinals);
    // console.log(`Year ${year}`);
    const winner = winnersCallback(array, getFinals);
    // console.log(`Winner ${winner}`);
    const announcement = [];
    for (let i in year) {
        // if (array[i] {stage === "Final"})
        announcement.push(`In ${year[i]}, ${winner[i]} won the world cup!`);
        // console.log(`Year2021 ${year[i]}`);
    }
    


    // const announcement = year.map(team => `In ${year}, ${team.winner} won the world cup!`);
    return announcement;
}

// console.log(getWinnersByYear(fifaData, getYears, getWinners));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

// function getAverageGoals() {
//    /* code here */
// }

// function getAverageGoals(callback2) {
//     const totalGoals = callback2.reduce((total,score) => {
//         return total += score["Home Team Goals"] += score["Away Team Goals"];
//     },0);
//     return Math.round((totalGoals/(callback2.length))*100)/100;
//  }
 
//  console.log(getAverageGoals(getFinals(fifaData)));

function getAverageGoals (finalCallback) {
    //creating the whole number without the average
    const totalGoals = finalCallback.reduce((total, score) => {
        return total + score["Home Team Goals"] + score["Away Team Goals"];
    },0);
    return (`${Math.round((totalGoals/(finalCallback.length))*100)/100}`);
}

console.log(getAverageGoals(getFinals(fifaData)));

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
