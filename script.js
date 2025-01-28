const MAX_LIVES = 7;

let livesCount = MAX_LIVES;

let wordToBeGuessed = ['A','l','e','x','a','n','d','r','i','a'];
let wordLength = wordToBeGuessed.length;

let guessedLetters = Array(wordLength).fill(" _ ");

let getWordPlace = document.getElementById("word");
getWordPlace.innerText = guessedLetters;

function updateStatus(message) {
	let statusInfo = document.getElementById("statusInfo");
	statusInfo.innerText = message;
}

updateStatus(`*** ${livesCount} *** lives left`);

function processUserInput() {
    let letter = document.getElementById("letter");
    let letterFound = wordToBeGuessed.indexOf(letter.value);
    let outcome = document.getElementById("outcome");
	if ((!letter.value || !letter.value.match(/[a-z]/i)) && livesCount && wordLength > 0) {
		alert("Please enter a valid single letter.");
	} else if (parseInt(letterFound) !== -1 && livesCount) {
		--wordLength;
		guessedLetters[letterFound] = ` ${letter.value} `;
		wordToBeGuessed[letterFound] = '_';
		getWordPlace.innerText = guessedLetters;
        	if (wordLength == 0) {
				updateStatus("You win, CONGRATULATIONS !");
		}
	} else if (livesCount && wordLength > 0) {
		--livesCount;
		updateStatus(`*** ${livesCount} *** lives left`);
		if (parseInt(livesCount) === 0) {
			updateStatus("You lost, please try again !");
		}
	}
	letter.value = '';
}
