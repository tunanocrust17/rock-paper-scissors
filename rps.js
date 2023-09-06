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

//function to determine who wins or losers the game
function playRound(computerChoice , playerSelection) {
    console.log(computerChoice)
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

// game code to keep track of scoring for a game of 5
let playerScore = 0;  
let computerScore = 0;
let ties = 0;

function game(){

for ( let i=0; i<30 ; i++){
     
    let answer = playRound(getComputerChoice(),playersChoice());
        
    if(playerScore === 5){
        return "Woohoo player wins!"
    } else if ( computerScore === 5){
        return "dang you lost!"
    } else {    
        if (answer === "Computer wins, try again!"){
        computerScore++;
    } else if(answer === "Player wins, woohoo!"){
        playerScore++;
    } else {
        console.log("It's a tie!")
    } 
}


console.log(answer);  
console.log(playerScore);
console.log(computerScore);

} 
}

game();