const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById("overlay");
const title = document.querySelector('.title');
const ul = document.querySelector('ul');

let missedGuesses = 0;

// random phrases
let phrases = [
  'a piece of cake',
  'break a leg',
  'once upon a time',
  'never grow up',
  'over the rainbow'
];

// listen for the start game button to be pressed
startGame.addEventListener('click', () => {
  overlay.style.display = 'none';
});
