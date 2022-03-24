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
  const randomNumber = Math.floor(Math.random()*arrlength);
  const randomPhrase = arr[randomNumber].toLowerCase();
  let randomSplit = randomPhrase.split(' ');
  console.log(randomSplit);
  return randomPhrase.split(' ');
}

// adds the letters of a string to the display
function addPhraseToDisplay (arr) {
   for (i = 0; i < splitPhrase.length; i++) {
     const li = document.createElement('li');
       li.textContent = splitPhrase[i];
       ul.appendChild(li);
        //checking for spacing
        if (splitPhrase[i] === " " ) {
  text.className.add('space');
} else {
    li.className.add('letter');
}
}
};

//check the letters of a string to the display
function checkLetter(button) {
  const li = document.querySelectorAll('li');
  let match = null;
    for (i = 0; i < li.length; i++) {
      if (li[i].textContent === li[i].textContent.toLowerCase() ) {
      li[i].className.add('show');
      match = (li[i] = button.textContent);
    }
  }
  return match;
};


// listens for the on screen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
  const buttonClick = e.target;
  if (button.className === 'BUTTON' || button.className === 'chosen') {
    buttonClick.disabled = true;
    const letterFound = checkLetter(buttonClick);
  if (letterFound = null) {
    
  }
  }
});
