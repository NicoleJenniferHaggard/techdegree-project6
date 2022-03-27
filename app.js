const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById("overlay");
const title = document.querySelector('.title');
const phraseUl = document.querySelector('#phrase ul');

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
  const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  let phraseSplit = randomPhrase.split('');
  console.log(phraseSplit);
  return phraseSplit;
}
const randomPhraseArray = getRandomPhraseAsArray(phrases);


// adds the letters of a string to the display
function addPhraseToDisplay(arr) {
  for (let i = 0; i <arr.length; i += 1){
    const li = document.createElement('li');
    phraseUl.appendChild(li);
      li.textContent = arr[i];
    if (arr[i] !== ' ') {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }
  }
}
  addPhraseToDisplay(randomPhraseArray);

//check the letters of a string to the display
function checkLetter(button) {
  const liArr = document.querySelectorAll('li');
    let match = null;
    for ( let i = 0; i < liArr.length; i++) {
      if (button.textContent === liArr[i].textContent) {
    liArr[i].classList.add('show');
    match = true;
  }
 }
return match;
};

// listens for the on screen keyboard to be clicked
qwerty.addEventListener('click', (event) =>  {
  const btn = event.target;
  if (event.target.tagName === 'BUTTON' || event.target.className === 'chosen') {
    btn.classList.add('chosen');
    btn.setAttribute('disabled', '');
    const letterCheck = checkLetter(btn);
  if (letterCheck === null) {
    const lost = document.querySelectorAll('.tries img')[missedGuess];
    lost.src='images/lostHeart.png';
    lost.className = 'lost';
    missedGuess++
    }
  }
   checkWin();
});

//checks if the game has been wont or lost
function checkWin() {
const letter = document.querySelectorAll('.letter');
const show = document.querySelectorAll('.show');
if (letter.length === show.length) {
  overlay.className = 'win';
  title.textContent = 'You Win!';
  overlay.style.display = 'flex';
} else if (missedGuess > 4) {
  overlay.className = 'lose';
  title.textContent = 'You Lose.';
  overlay.style.display = 'flex';
}
};
