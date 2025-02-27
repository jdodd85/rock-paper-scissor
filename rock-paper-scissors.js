const ROUNDS = 5;
const WINS = new Map([
  ["Rock", "Scissors"],
  ["Paper", "Rock"],
  ["Scissors", "Paper"],
]);

const buttons = document.querySelectorAll("button");
const gmMessage = document.querySelector(".gm");
const roundWinner = document.querySelector(".roundWinner");
const humanScoreboard = document.querySelector(".humanScoreboard");
const computerScoreboard = document.querySelector(".computerScoreboard");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});

function playRound(userChoice) {
  const computerChoice = getComputerChoice();

  gmMessage.textContent = userChoice + " Vs. " + computerChoice;

  if (WINS.get(userChoice) == computerChoice) {
    roundWinner.textContent = "You win!";
    humanScore++;
  } else if (WINS.get(computerChoice) == userChoice) {
    roundWinner.textContent = "Computer wins!";
    computerScore++;
  } else {
    roundWinner.textContent = "Draw!";
  }
  updateScoreboard();
  roundCounter++;
}

function getComputerChoice() {
  const choices = Array.from(WINS);
  const ranIndex = Math.floor(Math.random() * choices.length);
  return choices[ranIndex][0];
}

function updateScoreboard() {
  humanScoreboard.textContent = "Player Score: " + humanScore;
  computerScoreboard.textContent = "Computer Score: " + computerScore;

  if (humanScore >= 5 || computerScore >= 5) {
    buttons.forEach((button) => {
      button.disabled = true;
    });
    if (humanScore > computerScore) {
      gmMessage.textContent = "You win the game!";
    } else if (computerScore > humanScore) {
      gmMessage.textContent = "You lose. Better luck next time!";
    } else {
      gmMessage.textContent =
        "Sorry, something went wrong. Refresh and try again.";
    }
  }
}
