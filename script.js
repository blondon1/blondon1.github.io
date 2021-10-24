const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++)
 btnOpenModal[i].addEventListener('click', function
 () {
   console.log('cliked');
 });

 //Modal windows

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber)
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayColor = function () {
  document.querySelector('main').style.color = '#000000';
  document.querySelector('.guess').style.color = '#000000';
  document.querySelector('.check').style.color = '#000000';
  document.querySelector('.score').style.color = '#000000';
  document.querySelector('.highscore').style.color = '#000000';
};


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No hay numero!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('Felicidades, haz ganado!!! 👏');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#006400';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.between').textContent = ' ❛ ◯ ❛ '

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Muy alto' : '📉 Muy bajo');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('Perdiste 😢');
      document.querySelector('.score').textContent = 0;
    }
  }


});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Comienza....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '???';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#0000';
  document.querySelector('body').style.color = '#000000';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.between').textContent = 'O-O';

  displayColor()
});












  //   // Refernce code
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = ' You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }