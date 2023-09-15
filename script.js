const buttonsEl = document.querySelectorAll('button');

const resultEl = document.getElementById('result');
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;

buttonsEl.forEach((button) => {
  button.addEventListener('click', () => {
    const results = playRound(button.id, computerPlay());
    resultEl.textContent = results;
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
  });
});
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}
function playRound(playerSelection, computerPlay) {
  if (playerSelection === computerPlay) {
    resultEl.className = 'win';
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerPlay === 'scissors') ||
    (playerSelection === 'paper' && computerPlay === 'rock') ||
    (playerSelection === 'scissors' && computerPlay === 'paper')
  ) {
    userScore += 1;
    resultEl.className = 'win';
    return 'You win ! ' + playerSelection + ' beats ' + computerPlay;
  } else {
    computerScore += 1;
    resultEl.className = 'lose';
    return 'You lose! ' + computerPlay + ' beats ' + playerSelection;
  }
}
