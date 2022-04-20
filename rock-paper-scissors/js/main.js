const computerOptions = document.querySelectorAll(".js--computer");
const playerOptions = document.querySelectorAll(".js--player");

const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");

const gameStatus = document.getElementById("gameStatus");

let computerSelection = null;

playerOptions.forEach(option => {
  option.addEventListener("click", () => {

    gameStatus.textContent = "";

    computerOptions.forEach(option => {
      option.style.transform = "translateY(50%)";
    })

    playRound(option.dataset.option);
  })
});

window.resetGame = function resetGame() {
  computerScore.textContent = "0";
  playerScore.textContent = "0";
}

function computerPlay() {

  const randomOption = Math.floor(Math.random() * computerOptions.length);

  computerSelection = computerOptions.item(randomOption).dataset.option;

  computerOptions.item(randomOption).style.transform = "translateY(0)";

}

function playRound(playerSelection) {
  computerPlay();

  if (playerSelection === "rock" && computerSelection === "rock") gameStatus.textContent = "TIE";
  else if (playerSelection === "rock" && computerSelection === "scissors") playerScore.textContent = (parseInt(playerScore.textContent) + 1).toString();
  else if (playerSelection === "rock" && computerSelection === "paper") computerScore.textContent = (parseInt(computerScore.textContent) + 1).toString();

  if (playerSelection === "paper" && computerSelection === "paper") gameStatus.textContent = "TIE";
  else if (playerSelection === "paper" && computerSelection === "rock") playerScore.textContent = (parseInt(playerScore.textContent) + 1).toString();
  else if (playerSelection === "paper" && computerSelection === "scissors") computerScore.textContent = (parseInt(computerScore.textContent) + 1).toString();

  if (playerSelection === "scissors" && computerSelection === "scissors") gameStatus.textContent = "TIE";
  else if (playerSelection === "scissors" && computerSelection === "paper") playerScore.textContent = (parseInt(playerScore.textContent) + 1).toString();
  else if (playerSelection === "scissors" && computerSelection === "rock") computerScore.textContent = (parseInt(computerScore.textContent) + 1).toString();
}

