/*
getComputerChoice

Given no parameters, will return a random selection from Rock, Paper, or Scissors
*/

function getComputerChoice() {
    let num = Math.random();
    let selection;

    if (num <= 0.333) {
        selection = "Rock";
    } else if (num > 0.333 && num <= 0.666) {
        selection = "Paper";
    } else {
        selection = "Scissors";
    }

    return(selection);
}

function getHumanChoice() {
    let selection = prompt("Please choose Rock, Paper, or Scissors");

    if (selection.toLowerCase != "rock" || selection.toLowerCase != "paper" || selection.toLowerCase != "scissors") {
        selection = prompt("Error:  Not a valid choice! Please choose from Rock, Paper, or Scissors.");
    }

    return(selection);
}

let test = getHumanChoice();

console.log("Human Choice:  " + test);

console.log("Computer Choice: " + getComputerChoice());