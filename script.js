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
    let letter = document.getElementById("letter").value;
    let letterFound = wordToBeGuessed.indexOf(letter);
    let outcome = document.getElementById("outcome");
    if (parseInt(letterFound) !== -1 && livesCount) {
        --wordLength;
        guessedLetters[letterFound] = ` ${letter} `;
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
}
