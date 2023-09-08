// computer selection code to choose between rock paper or scissors
let choices = ["rock", "paper", "scissors"]

function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)];
}

//prompt for the user to input if they choose rock, paper, or scissors
function playersChoice(){
let playerInput = prompt("Please choose rock, paper, or scisscors");
let playerSelection = playerInput.toLowerCase();
return playerSelection;
}


let playerScore = 0;  
let computerScore = 0;

//function to determine who wins or losers the game
function playRound(computerChoice , playerSelection) {
    console.log(computerChoice)
    if(computerChoice === playerSelection){
        return "It's a tie! Play again!"
    } else if ((computerChoice === "rock" && playerSelection === "scissors")|| 
            (computerChoice === "scissors" && playerSelection === "paper")||
            (computerChoice === "paper" && playerSelection === "rock")) {
                computerScore++;
                return "Computer wins, try again!"
        
    } else if ((computerChoice === "scissors" && playerSelection === "rock")||
            (computerChoice === "paper" && playerSelection === "scissors")||
            (computerChoice === "rock" && playerSelection === "paper")){
                playerScore++;
                return "Player wins, woohoo!"

    } else { return "hmmm looks like you added another element, please try again" };
}


//variable and function to check if either player has reached a winning score five yet, which will change scoreCheck to true and end our for loop in the game
let scoreCheck = false;

function checkScore(){
    if(playerScore === 5 || computerScore === 5){
        scoreCheck = true;
    } 
}


// game code to keep track of scoring for a game of 5


function game(){

//the for loop will continue to run as a long as scoreCheck remains false which will only be true once the computer or player reach 5
for ( let i=0; scoreCheck===false ; i++){
     
    let answer = playRound(getComputerChoice(),playersChoice());
    checkScore();
    console.log(answer);  
    console.log(playerScore);
    console.log(computerScore);

    if (scoreCheck === true) {
        if(playerScore > computerScore){
            console.log("Great job we won!");
        } else {
            console.log("NOOOOOOOOOO the computer beat us try again!")
        }
    } else {
        console.log("keep playing");
    }
} 

}

game();