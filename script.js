let find = "Alexandria";
let live = 7;
document.getElementById("lifes").innerText = `You have ${live} lives left`;
let word = document.getElementById("word");
let wordLength = find.length;
let text = [];
for (let i = 0; i < wordLength; ++i) {
    text.push("_");
}
word.innerText = text;
function clickFunction() {
    let letter = document.getElementById("letter").value;
    let result = parseInt(find.indexOf(letter));
    if (result !== -1) {
        text[result] = find[result];
        word.innerText = text;
    } else {
        --live;
        document.getElementById("lifes").innerText = `You have ${live} lives left`;
    }
}
