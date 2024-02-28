let wordToBeGuessed = ['A','l','e','x','a','n','d','r','i','a'];
let guessedLetters = [];
let displayLetters = document.getElementById("word");
let wordLength = wordToBeGuessed.length;
let lives = 7;

function createEmptyWord() {
    for (let i = 0; i < wordLength; ++i) {
        guessedLetters.push(" _ ");
    }
}

function displayWord() {
    displayLetters.innerText = guessedLetters;
}

function displayLives() {
    document.getElementById("lives").innerText = `*** ${lives} *** lives left`;
}

createEmptyWord();
displayWord()
displayLives();

function processUserInput() {
    let letter = document.getElementById("letter").value.toLowerCase();
    let letterFound = false;
    for (let i = 0; i < wordLength; ++i) {
        if (wordToBeGuessed[i].toLowerCase() === letter) {
            letterFound = true;
            guessedLetters[i] = ` ${wordToBeGuessed[i]} `;
            displayWord();
            wordToBeGuessed[i] = '_';
            break;
        }
    }
    if (!letterFound && lives) {
        --lives;
        displayLives();
        if (parseInt(lives) === 0) {
            document.getElementById("outcome").innerText = "You lost, please try again !";
        }
    }
}
