let find = ['A','l','e','x','a','n','d','r','i','a'];
let live = 7;
document.getElementById("lives").innerText = `*** ${live} *** lives left`;
let word = document.getElementById("word");
let wordLength = find.length;
let text = [];
for (let i = 0; i < wordLength; ++i) {
    text.push(" _ ");
}
word.innerText = text;

function clickFunction() {
    let letter = document.getElementById("letter").value.toLowerCase();
    let found = false;
    for (let i = 0; i < wordLength; ++i) {
        if (find[i].toLowerCase() === letter) {
            found = true;
            text[i] = ` ${find[i]} `;
            word.innerText = text;
            find[i] = '_';
            break;
        }
    }
    if (!found) {
        --live;
        document.getElementById("lives").innerText = `*** ${live} *** lives left`;
    }
}
