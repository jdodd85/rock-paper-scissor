// Global Values

const WINS = new Map([
  ["Rock", "Scissors"],
  ["Paper", "Rock"],
  ["Scissors", "Paper"],
]);

const ROUNDS = 5;
const gmMessage = document.querySelector(".gm");
const roundWinner = document.querySelector(".roundWinner");
const humanScoreboard = document.querySelector(".humanScoreboard");
const computerScoreboard = document.querySelector(".computerScoreboard");
const buttons = document.querySelectorAll("button");

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

  return selection;
}

function declareRoundWinner(humanChoice, computerChoice) {}

/*
playRound

given a humanChoice and a computerChoice, plays a single round between the user and the computer and announces a winner.

compare humanChoice and computerChoice
if humanChoice is winner, declare human winner
if computerChoice is winner, declare computer winner
if draw, declare a draw.
*/

function playRound(humanChoice, computerChoice) {
  gmMessage.textContent =
    "You chose: " + humanChoice + "\nThe computer chose: " + computerChoice;

  if (WINS.get(humanChoice) == computerChoice) {
    roundWinner.textContent = "You win! You get a point!";
    return 1;
  } else if (WINS.get(computerChoice) == humanChoice) {
    roundWinner.textContent = "You lose! Computer gets a point!";
    return -1;
  } else {
    roundWinner.textContent = "Draw! No points awarded.";
    return 0;
  }
}

function updateScoreboard(humanScore, computerScore) {
  humanScoreboard.textContent = "Player Score: " + humanScore;
  computerScoreboard.textContent = "Computer Score: " + computerScore;

  if (humanScore > 4) {
    gmMessage.textContent = "You win the game!";
    return true;
  } else if (computerScore > 4) {
    gmMessage.textContent = "The computer wins the game!";
    return true;
  } else {
    return false;
  }
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
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.value);
      switch (playRound(button.value, getComputerChoice())) {
        case 1:
          humanScore++;
          if (updateScoreboard(humanScore, computerScore)) {
            return;
          }
          break;

        case -1:
          computerScore++;
          if (updateScoreboard(humanScore, computerScore)) {
            return;
          }
          break;

        case 0:
          break;
      }
    });
  });
}

playGame();
