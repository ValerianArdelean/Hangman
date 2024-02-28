let wordToBeGuessed = ['A','l','e','x','a','n','d','r','i','a'];
let wordLength = wordToBeGuessed.length;
let lives = 7;
function previewLives() {
    document.getElementById("lives").innerText = `*** ${lives} *** lives left`;
}
previewLives();

let word = document.getElementById("word");
let text = [];
for (let i = 0; i < wordLength; ++i) {
    text.push(" _ ");
}
word.innerText = text;

function clickFunction() {
    let letter = document.getElementById("letter").value.toLowerCase();
    let found = false;
    for (let i = 0; i < wordLength; ++i) {
        if (wordToBeGuessed[i].toLowerCase() === letter) {
            found = true;
            text[i] = ` ${wordToBeGuessed[i]} `;
            word.innerText = text;
            wordToBeGuessed[i] = '_';
            break;
        }
    }
    if (!found && lives) {
        --lives;
        previewLives();
        if (parseInt(lives) === 0) {
            document.getElementById("outcome").innerText = "You lost, please try again !";
        }
    }
}
