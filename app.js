const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById("overlay");
const title = document.querySelector('.title');
const ul = document.querySelector('ul');

let missedGuess = 0;

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

//return a random phrase from array
function getRandomPhraseAsArray(arr) {
  const randomPhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
  let phraseSplit = randomPhrase.split('');
  console.log(randomSplit);
  return randomSplit;
}

// adds the letters of a string to the display
function addPhraseToDisplay(arr) {
  const li = document.querySelectorAll('li');
  let match = null;
  for(let i = 0; i < li.length; i++){
    if (button.textContent === li[i].textContent){
      li[i].classList.add('show');
      match = button.textContent;
    }
  }
}
//check the letters of a string to the display
function checkLetter(button) {
  const li = document.querySelectorAll('li');
  let match = null;
    for (i = 0; i < li.length; i++) {
      if (li[i].textContent === button.textContent) {
      li[i].classList.add('show');
      match = (li[i] = button.textContent);
    }
  }
  return match;
};

// listens for the on screen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
  let buttonClick = e.target;
  if (buttonClick.tagName === 'BUTTON' || button.className === 'chosen') {
    buttonClick.className === 'chosen';
    buttonClick.disabled = true;
    const letterFound = checkLetter(e.target);
  if (letterFound === null) {
    const heartLoss = document.querySelectorAll('.tries img');
    heartLoss.src='images/lostHeart.png';
    heartLoss.className = 'lost';
    missedGuess++;
  }
  }
  //checkWin();
});
