// Global Values

const WINS = new Map([
  ["Rock", "Scissors"],
  ["Paper", "Rock"],
  ["Scissors", "Paper"],
]);

const ROUNDS = 5;

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

  return selection;
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
    switch (selection.toLowerCase()) {
      case "rock":
        return "Rock";

      case "paper":
        return "Paper";

      case "scissors":
        return "Scissors";

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
  console.log(
    "You chose: " + humanChoice + "\nThe computer chose: " + computerChoice
  );

  if (WINS.get(humanChoice) == computerChoice) {
    console.log("You win! You get a point!");
    return 1;
  } else if (WINS.get(computerChoice) == humanChoice) {
    console.log("You lose! Computer gets a point!");
    return -1;
  } else {
    console.log("Draw! No points awarded.");
    return 0;
  }
}

/*
playGame

plays 5 ROUNDS of rock paper scissors and declares a winner.

declare scores
play round
track score
repeat four more times
compare scores
declare winner
*/

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < ROUNDS; i++) {
    switch (playRound(getHumanChoice(), getComputerChoice())) {
      case 1:
        humanScore++;
        break;

      case -1:
        computerScore++;
        break;

      case 0:
        break;
    }

    console.log(
      "The Score is: \nYou: " + humanScore + "\nComputer: " + computerScore
    );
  }

  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (computerScore > humanScore) {
    console.log("The Computer WINS!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
