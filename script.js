const diceArray = [
  "https://bit.ly/3KJziG6",
  "https://bit.ly/3FdNar6",
  "https://bit.ly/3OW6IoA",
  "https://bit.ly/37cHRLZ",
  "https://bit.ly/3FlsU71",
  "https://bit.ly/3ybkFJ4"
];

const players = document.querySelectorAll(".player");
const startButton = document.querySelector(".start");
const winnerContainer = document.querySelector(".winner");

const startGameRound = () => {
  const gameResults = [];

  players.forEach((player, index) => {
    const playerNumber = Math.floor(Math.random() * (5 - 0 + 1) + 0);
    gameResults.push(playerNumber);
    player.innerText = "";
    player.style.backgroundImage = `url(${diceArray[playerNumber]})`;
    player.style.border = "none";
  });

  displayWinner(gameResults);
};

const displayWinner = (gameResults) => {
  const winner =
    gameResults[0] !== gameResults[1]
      ? `Player ${gameResults.indexOf(Math.max(...gameResults)) + 1} wins!`
      : "It's a tie!";

  winnerContainer.style.opacity = "1";
  winnerContainer.innerText = winner;
};

startButton.addEventListener("click", startGameRound);
