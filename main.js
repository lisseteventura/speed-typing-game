window.addEventListener("load", init);
//Globals
let time = 5;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "orange",
  "thug",
  "vibes",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "memories",
  "hero",
  "javascript",
  "you",
  "revolver",
  "summer",
  "leggings",
  "investigate",
  "stalk",
  "symptom",
  "laughter",
  "bigfive",
  "master",
  "prejudice",
  "freighter"
];

function init() {
  //Load word from array
  showWord(words);
  //Match word input to actual word
  wordInput.addEventListener("input", startMatch);
  //runs the function countdown every second
  setInterval(countdown, 1000);
  //check if game is being played
  setInterval(checkStatus, 50);
}

//Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 6;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  //if score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//Show random word
function showWord(words) {
  //get random array index
  const randomIndex = Math.floor(Math.random() * words.length);
  //Output random word
  currentWord.innerHTML = words[randomIndex];
}

//Countdown timer
function countdown() {
  //make sure time hasnt run Output
  if (time > 0) {
    //decrease time
    time--;
  } else if (time === 0) {
    //game is over
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over";
    score = -1;
  }
}
