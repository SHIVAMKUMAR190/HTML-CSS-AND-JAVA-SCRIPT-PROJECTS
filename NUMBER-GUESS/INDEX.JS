let randomNumber;
let chances;
let guesses;

const guessForm = document.querySelector("#guessForm");
const guessInput = document.querySelector("#guessInput");
const submitBtn = document.querySelector("#submitBtn");
const messageBox = document.querySelector("#messageBox");
const chancesLeftEl = document.querySelector("#chancesLeft");
const prevGuessesEl = document.querySelector("#prevGuesses");
const restartBtn = document.querySelector("#restartBtn");

function initGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  chances = 15;
  guesses = [];

  chancesLeftEl.textContent = chances;
  prevGuessesEl.textContent = "-";
  messageBox.textContent = "Take your first guess!";
  messageBox.className = "message-box";

  guessInput.disabled = false;
  submitBtn.disabled = false;
  guessInput.value = "";
  restartBtn.style.display = "none";
  guessInput.focus();
}

function handleGuess(e) {
  e.preventDefault();

  const userGuess = Number(guessInput.value);

  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    messageBox.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  chances--;
  guesses.push(userGuess);

  chancesLeftEl.textContent = chances;
  prevGuessesEl.textContent = guesses.join(", ");

  if (userGuess === randomNumber) {
    messageBox.textContent = `🎉 Congrats! You guessed it in ${15 - chances} tries!`;
    messageBox.className = "message-box win";
    endGame();
    return;
  }

  if (chances === 0) {
    messageBox.textContent = `💀 Game Over! The number was ${randomNumber}.`;
    messageBox.className = "message-box lose";
    endGame();
    return;
  }

  if (userGuess > randomNumber) {
    messageBox.textContent = "Too high! Enter a smaller number. ↓";
    messageBox.className = "message-box high";
  } else {
    messageBox.textContent = "Too low! Enter a larger number. ↑";
    messageBox.className = "message-box low";
  }

  guessInput.value = "";
  guessInput.focus();
}

function endGame() {
  guessInput.disabled = true;
  submitBtn.disabled = true;
  restartBtn.style.display = "block";
}

guessForm.addEventListener("submit", handleGuess);
restartBtn.addEventListener("click", initGame);

initGame();