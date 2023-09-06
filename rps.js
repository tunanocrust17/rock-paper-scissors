
function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return(computerChoice);
}

let userChoice = prompt("Please choose rock, paper, or scisscors");
console.log(userChoice.toLowerCase());