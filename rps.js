// computer selection code to choose between rock paper or scissors
let choices = ["rock", "paper", "scissors"]

function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)];
}


let playerScore = 0;  
let computerScore = 0;

//function to determine who wins or losers the game
function playRound(computerChoice, playersChoice) {
    console.log(computerChoice)
    console.log(playersChoice)
    if(computerChoice === playersChoice){
        return "It's a tie! Play again!";
    } else if ((computerChoice === "rock" && playersChoice === "scissors")|| 
            (computerChoice === "scissors" && playersChoice === "paper")||
            (computerChoice === "paper" && playersChoice === "rock")) {
                computerScore++;
                return "Computer wins, try again!";     
    } else if ((computerChoice === "scissors" && playersChoice === "rock")||
            (computerChoice === "paper" && playersChoice === "scissors")||
            (computerChoice === "rock" && playersChoice === "paper")){
                playerScore++;
                return "Player wins, woohoo!";
    } 
}


//variable and function to check if either player has reached a winning score five yet, which will change scoreCheck to true and end our for loop in the game
let scoreCheck = false;

function checkScore(){
    if(playerScore === 5 || computerScore === 5){
        scoreCheck = true;
    } 
}

// playRound(getComputerChoice(), userGuess);
// game code to keep track of scoring for a game of 5



function game(){

let answer = playRound(getComputerChoice(), userGuess);
console.log(answer);
checkScore();
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

//allows the users to choose rock, paper, or scissors using the buttons
let userGuess = "";

function playersChoice(){
    userGuess = this.textContent;
    game();
};

const buttons = document.querySelectorAll("button");
buttons.forEach( button=> {button.addEventListener('click', playersChoice);
});


//the for loop will continue to run as a long as scoreCheck remains false which will only be true once the computer or player reach 5
// for ( let i=0; scoreCheck===false ; i++){
     
//     let answer = playRound(getComputerChoice(),playersSelection);
//     checkScore();
//     console.log(answer);  
//     console.log(playerScore);
//     console.log(computerScore);

//     if (scoreCheck === true) {
//         if(playerScore > computerScore){
//             console.log("Great job we won!");
//         } else {
//             console.log("NOOOOOOOOOO the computer beat us try again!")
//         }
//     } else {
//         console.log("keep playing");
//     }
// } 



// game();