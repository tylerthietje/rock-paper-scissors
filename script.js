let playerSelection;
let computerSelection;
let roundWinner = '';
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('button');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const playerChoice = document.querySelector('.player-selection');
const computerChoice = document.querySelector('.computer-selection');
const playerPoints = document.querySelector('.player-points');
const computerPoints = document.querySelector('.computer-points');
const resultsMsg = document.querySelector('.result');
const rules = document.querySelector('.rules');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerEmoji();
    computerEmoji();
    updateScore(roundWinner);
    checkWinner();
  });
});

function getComputerChoice() {
  let outcome = ['rock', 'paper', 'scissors'];
  let rdmNum = Math.floor(Math.random() * 3);
  return outcome[rdmNum];
}

function playerEmoji() {
  if (playerSelection === 'rock') {
    playerChoice.innerText = `✊`;
  }
  if (playerSelection === 'paper') {
    playerChoice.innerText = `✋`;
  }
  if (playerSelection === 'scissors') {
    playerChoice.innerText = `✌`;
  }
}

function computerEmoji() {
  if (computerSelection === 'rock') {
    computerChoice.innerText = `✊`;
  }
  if (computerSelection === 'paper') {
    computerChoice.innerText = `✋`;
  }
  if (computerSelection === 'scissors') {
    computerChoice.innerText = `✌`;
  }
}

function playRound(playerSelection, computerSelection) {
  resultsMsg.style.color = 'white';
  if (playerSelection === computerSelection) {
    return (roundWinner = 'tie');
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++;
    return (roundWinner = 'player');
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    computerScore++;
    return (roundWinner = 'computer');
  }
}

function updateScore(roundWinner) {
  rules.style.display = 'none';
  if (roundWinner === 'player') {
    playerPoints.innerText = ` ${playerScore}`;
    resultsMsg.innerText = `You Won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.substring(1)}!`;
    
  } else if (roundWinner === 'computer') {
    computerPoints.innerText = ` ${computerScore}`;
    resultsMsg.innerText = `You Lost! ${computerSelection.charAt(0).toUpperCase() + computerSelection.substring(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1)}!`;
  } else {
    resultsMsg.innerText = `You tied! Throw again!`;
  }

}

function checkWinner() {
  if (playerScore === 5) {
    resultsMsg.innerText = `You Have Won the Match!`;
    resultsMsg.style.color = '#1a79d9';
    rules.innerText = `Throw Again to Start a New Match!`;
    rules.style.display = 'block';
    playerScore = 0;
    computerScore = 0;
    playerPoints.innerText = ` ${playerScore}`;
    computerPoints.innerText = ` ${computerScore}`;
  } else if (computerScore === 5) {
    resultsMsg.innerText = `You Have Lost the Match!`
    resultsMsg.style.color = '#1a79d9';
    rules.innerText = `Throw Again to Start a New Match!`;
    rules.style.display = 'block';
    computerScore = 0;
    playerScore = 0;
    playerPoints.innerText = ` ${playerScore}`;
    computerPoints.innerText = ` ${computerScore}`;
  }
}