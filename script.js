let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let outcome = ['rock', 'paper', 'scissors'];
  let rdmNum = Math.floor(Math.random() * 3);
  return outcome[rdmNum];
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() == 'rock' &&
    computerSelection == 'scissors'
  ) {
    playerScore++;
    return 'You WIN! Rock smashes Scissors!';
  } else if (
    playerSelection.toLowerCase() == 'rock' &&
    computerSelection == 'paper'
  ) {
    computerScore++;
    return 'You LOSE!! Paper covers Rock!';
  } else if (
    playerSelection.toLowerCase() == 'rock' &&
    computerSelection == 'rock'
  ) {
    return "It's a tie. Please play again!";
  } else if (
    playerSelection.toLowerCase() == 'paper' &&
    computerSelection == 'rock'
  ) {
    playerScore++;
    return 'You WIN! Paper covers Rock!';
  } else if (
    playerSelection.toLowerCase() == 'paper' &&
    computerSelection == 'paper'
  ) {
    return "It's a tie. Please play again!";
  } else if (
    playerSelection.toLowerCase() == 'paper' &&
    computerSelection == 'scissors'
  ) {
    computerScore++;
    return 'You LOSE!! Scissors cut up paper!';
  } else if (
    playerSelection.toLowerCase() == 'scissors' &&
    computerSelection == 'rock'
  ) {
    computerScore++;
    return 'You LOSE!! Rock smashes Scissors!';
  } else if (
    playerSelection.toLowerCase() == 'scissors' &&
    computerSelection == 'paper'
  ) {
    playerScore++;
    return 'You WIN!! Scissors cut up paper!';
  } else if (
    playerSelection.toLowerCase() == 'scissors' &&
    computerSelection == 'scissors'
  ) {
    return "It's a tie. Please play again!";
  } 
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Please enter Rock, Paper, or Scissors to play!');
    const computerSelection = getComputerChoice();
    const button = document.querySelector('button').innerText = "Play Again!"
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player chooses ${playerSelection}. Player score is ${playerScore}`);
    console.log(`Computer chooses ${computerSelection}. Computer score is ${computerScore}`);
    console.log('-----------------------------------');
    playRound(playerSelection, computerSelection);
  }


  if (playerScore > computerScore) {
    return "Congratulations! You beat the computer!";
  } else if (computerScore > playerScore) {
    return "Uh Oh! The computer got you. WOMP WOMP!!";
  } else {
    return "It's a tie, give it another go!";
  }
}

