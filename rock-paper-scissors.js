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

function updateScoreboard(humanScore, computerScore) {
  const humanScoreboard = document.querySelector(".humanScoreboard");
  const computerScoreboard = document.querySelector(".computerScoreboard");

  humanScoreboard.textContent = "Player Score: " + humanScore;
  computerScoreboard.textContent = "Computer Score: " + computerScore;
}
/*
playGame

Create three buttons, one for each selection. Add an event listener to the 
buttons that call your playRound function with the correct playerSelection 
every time a button is clicked. (you can keep the console.logs for this step)

Add a div for displaying results and change all of your console.logs into DOM
methods.

Display the running score, and announce a winner of the game once one player 
reaches 5 points.
*/

function playGame() {
  const buttons = document.querySelectorAll("button");

  let humanScore = 0;
  let computerScore = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.value);
      switch (playRound(button.value, getComputerChoice())) {
        case 1:
          humanScore++;
          updateScoreboard(humanScore, computerScore);
          break;

        case -1:
          computerScore++;
          updateScoreboard(humanScore, computerScore);
          break;

        case 0:
          break;
      }
    });
  });
}

playGame();
