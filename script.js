const MAX_LIVES = 7;
let livesCount = MAX_LIVES;
let wordToBeGuessed = ['A','l','e','x','a','n','d','r','i','a'];
let wordLength = wordToBeGuessed.length;
let guessedLetters = Array(wordLength).fill(" _ ");
let statusInfo = document.getElementById("lives");
statusInfo.innerText = `*** ${livesCount} *** lives left`;
let getWordPlace = document.getElementById("word");
getWordPlace.innerText = guessedLetters;

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
			statusInfo.innerText = "You win, CONGRATULATIONS !";
		}
	} else if (livesCount && wordLength > 0) {
		--livesCount;
		statusInfo.innerText = `*** ${livesCount} *** lives left`;
		if (parseInt(livesCount) === 0) {
			statusInfo.innerText = "You lost, please try again !";
		}
	}
	letter.value = '';
}
