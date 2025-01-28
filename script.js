const MAX_LIVES = 7;

let livesLeft = MAX_LIVES;

let hiddenWord = ['A','l','e','x','a','n','d','r','i','a'];
let remainingLetters = hiddenWord.length;
let revealedWord = Array(remainingLetters).fill(" _ ");
let wordPlaceHolder = document.getElementById("word");

function initializeGame() {
	wordPlaceHolder.innerText = revealedWord;
	updateStatusMessage(`*** ${livesLeft} *** lives left`);
}

function updateStatusMessage(message) {
	let statusInfo = document.getElementById("statusInfo");
	statusInfo.innerText = message;
}

function processUserInput() {
	if (livesLeft <= 0 || remainingLetters <= 0) {
		return;
	}
	let letter = document.getElementById("letter");
	let letterFound = hiddenWord.indexOf(letter.value);
	if (!letter.value || !letter.value.match(/[a-z]/i)) {
		alert("Please enter a valid single letter.");
	} else if (letterFound !== -1) {
		hiddenWord[letterFound] = '_';
		revealedWord[letterFound] = ` ${letter.value} `;
		--remainingLetters;
		wordPlaceHolder.innerText = revealedWord;
			if (remainingLetters == 0) {
				updateStatusMessage("You win, CONGRATULATIONS !");
			}
	} else {
		--livesLeft;
		updateStatusMessage(`*** ${livesLeft} *** lives left`);
		if (livesLeft === 0) {
			updateStatusMessage("You lost, please try again !");
		}
	}
	letter.value = '';
}

initializeGame();
