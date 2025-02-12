// Global

let humanScore = 0;
let computerScore = 0;

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

/*
playRound

given a humanChoice and a computerChoice, plays a single round between the user and the computer and announces a winner.

compare humanChoice and computerChoice
if humanChoice is winner, declare human winner
if computerChoice is winner, declare computer winner
if draw, declare a draw.
*/

function playRound(humanChoice, computerChoice) {

    console.log("You chose: " + humanChoice + "\nThe computer chose: " + computerChoice)
    switch(humanChoice){
        case "Rock":
            if (computerChoice == "Rock") {
                console.log("Draw! No points awarded.");
            } else if (computerChoice == "Paper") {
                console.log("You lose! Computer gets a point!");
                computerScore++;
            } else if (computerChoice == "Scissors") {
                console.log("You win! You get a point!");
                humanScore++;
            }
            break;
        
        case "Paper":
            if (computerChoice == "Rock") {
                console.log("You win! You get a point!");
                humanScore++;
            } else if (computerChoice == "Paper") {
                console.log("Draw! No points awarded.");
            } else if (computerChoice == "Scissors") {
                console.log("You lose! Computer gets a point!");
                computerScore++;
            }
            break;

        case "Scissors":
            if (computerChoice == "Rock") {
                console.log("You lose! Computer gets a point!");
                computerScore++;
            } else if (computerChoice == "Paper") {
                console.log("You win! You get a point!");
                humanScore++;
            } else if (computerChoice == "Scissors") {
                console.log("Draw! No points awarded.");
            }
            break;
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);