/*console.log(displayMessage);
document.querySelector('.message').textContent = 'Correct number';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 15;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent = 'Correct number';
// });
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.score').textContent;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  score = document.querySelector('.score').textContent;
  //  document.querySelector('.highscore').textContent;
  // console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    displayMessage('No guess');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('correct guess');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
    // When guess is too high
    // When guess is too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Guess is high' : 'Guess is low');
      document.querySelector('.score').textContent = --score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
