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

console.log(getComputerChoice());