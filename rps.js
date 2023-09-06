// computer selection code to choose between rock paper or scissors

let choices = ["rock", "paper", "scissors"]

let computerChoice = getComputerChoice();

function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)];
}


//prompt for the user to input if they choose rock, paper, or scissors
let playerInput = prompt("Please choose rock, paper, or scisscors");
let playerSelection = playerInput.toLowerCase();

function playRound(computerChoice , playerSelection) {
    if(computerChoice === playerSelection){
        return "It's a tie! Play again!"
    } else if ((computerChoice === "rock" && playerSelection === "scissors")|| 
            (computerChoice === "scissors" && playerSelection === "paper")||
            (computerChoice === "paper" && playerSelection === "rock")) {
        return "Computer wins, try again!"
    } else if ((computerChoice === "scissors" && playerSelection === "rock")||
            (computerChoice === "paper" && playerSelection === "scissors")||
            (computerChoice === "rock" && playerSelection === "paper")){
        return "Player wins, woohoo!"
    } else { return "hmmm looks like you added another element, please try again" };
}

console.log(playRound(computerChoice,playerSelection));