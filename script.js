let wordToBeGuessed = ['A','l','e','x','a','n','d','r','i','a'];
let wordLength = wordToBeGuessed.length;
let guessedLetters = Array(wordLength).fill(" _ ");
let lives = wordLength;

function displayLetters() {
    let getWordPlace = document.getElementById("word");
    getWordPlace.innerText = guessedLetters;
}

function displayLives() {
    document.getElementById("lives").innerText = `*** ${lives} *** lives left`;
}

displayLetters();
displayLives();

function processUserInput() {
    let letter = document.getElementById("letter").value;
    let letterFound = wordToBeGuessed.indexOf(letter);
    let outcome = document.getElementById("outcome");
    if (parseInt(letterFound) !== -1 && lives) {
        --wordLength;
        guessedLetters[letterFound] = ` ${letter} `;
        wordToBeGuessed[letterFound] = '_';
        displayLetters();
        if (wordLength == 0) {
            outcome.innerText = "You win, CONGRATULATIONS !";
        }
    } else if (lives) {
        --lives;
        displayLives();
        if (parseInt(lives) === 0) {
            outcome.innerText = "You lost, please try again !";
        }
    }
}
