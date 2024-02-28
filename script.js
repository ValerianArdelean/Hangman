let wordToBeGuessed = ['A','l','e','x','a','n','d','r','i','a'];
let wordLength = wordToBeGuessed.length;
let guessedLetters = [];
let lives = 7;

function createHorizontalLines() {
    for (let i = 0; i < wordLength; ++i) {
        guessedLetters.push(" _ ");
    }
}

function displayLetters() {
    let getWordPlace = document.getElementById("word");
    getWordPlace.innerText = guessedLetters;
}

function displayLives() {
    document.getElementById("lives").innerText = `*** ${lives} *** lives left`;
}

createHorizontalLines();
displayLetters();
displayLives();

function processUserInput() {
    let letter = document.getElementById("letter").value;
    let letterFound = wordToBeGuessed.indexOf(letter);
    let outcome = document.getElementById("outcome");
    if (parseInt(letterFound) !== -1 && lives && wordLength >= 0) {
        --wordLength;
        guessedLetters[letterFound] = ` ${letter} `;
        wordToBeGuessed[letterFound] = '_';
        displayLetters();
        if (wordLength == 0) {
            outcome.innerText = "You win, CONGRATULATIONS !";
        }
    } else if (lives && wordLength) {
        --lives;
        displayLives();
        if (parseInt(lives) === 0) {
            outcome.innerText = "You lost, please try again !";
        }
    }
}
