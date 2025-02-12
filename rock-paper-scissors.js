/*
getComputerChoice

Given no parameters, will return a random selection from Rock, Paper, or Scissors

pick a random number
assign that number to a value
return the value.
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

/*
getHumanChoice

Given no parameters, will prompt the user for a choice and return that.

prompt user for input
make sure selection is valid
if selection is valid, return it.
*/
function getHumanChoice() {
    let selection = "";

    while (selection != "error") {
        switch(selection.toLowerCase()) {
            case "rock":
                return("Rock");
            
            case "paper":
                return("Paper");

            case "scissors":
                return("Scissors");

            default:
                selection = prompt("Please select from Rock, Paper, or Scissors");
                
        }
    }   
}

let test = getHumanChoice();

console.log("Human Choice:  " + test);

console.log("Computer Choice: " + getComputerChoice());