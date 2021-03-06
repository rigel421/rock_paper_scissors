 /** create variables to store the score counts */
 const choices = ["rock", "paper", "scissors"] /** computer selects choice from this array */
 let playerScore = 0;
 let computerScore = 0;
 let draws = 0;
 
 
 
 
 /** This will generate a random number, and then round down to the nearest 
  whole number**/
 function getComputerChoice(){
     const randomizer = Math.floor(Math.random() * choices.length);
     const compChoice = choices[randomizer];
     return compChoice;
 }


 /** variable strings for the game results */
 let playerWinsRound = 'You have won the round!';
 let compWinsRound = 'You have lost this round!';
 let draw = 'Draw';
 let playerWins = 'Congrats! You have won the game!';
 let compWins = 'Dang! You lost!';


 /** code for running a single game, returns a player win, comp win, or draw depending on the comparison */
 function oneRound(playerSelection, compSelection){
     
     if (playerSelection == 'scissors' && compSelection == 'rock'){
         return compWinsRound;

     }   else  if (playerSelection == 'paper' && compSelection == 'scissors'){
         return compWinsRound;

     }   else if (playerSelection == 'rock' && compSelection == 'paper'){
         return compWinsRound;

     }   else if (playerSelection == compSelection){
         return draw;
     }   else {
         return playerWinsRound;

     }
 }


 

 /** loop that runs the single round multiple times */
 function game(){
     for(let i = 0; i < 1000; i++){
         let playerSelection = prompt('Rock, Paper, or Scissors: ').toLowerCase(); /**  user types a result, and converts to lower case*/
         /** Below 2 lines convert the getComputerChoice function output into a const, and then that value is used as a parameter 
          * for the oneRound function */
         const compSelection = getComputerChoice();
         let roundResults = oneRound(playerSelection, compSelection);
         console.log(roundResults);
         gameScore(roundResults); /**  this appends the result of each round*/
         console.log("Your score is " + playerScore); /**  The gameScore function appends the value to the appropriate winner, or draw*/
         console.log("Computers score is " + computerScore);
         console.log('You have ' + draws + ' draws.');

         /** Once either of these values are reached, the function stops. */
         if(playerScore === 5 || computerScore === 5){
             break;
         }
     }
 }



     /** calculates the  round scores using the result of the function oneRound, which is the variable assignment of 
      *  the oneRound function. */
     function gameScore(roundResults){

     if (roundResults=== draw){
         draws++;
     } else if(roundResults === compWinsRound){
         computerScore++;
     } else {
         playerScore++;
     }
 }

 /** run the looping game function*/
 game();



 /** this loop prints out the results of the game. First to get to a score of 5 wins the round. No need to include 
      an if statement for the draws**/
 if (playerScore  === 5){
     console.log(playerWins);
 } else {
     console.log(compWins);
 }
 