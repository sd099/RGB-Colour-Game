var color = [];
var squares = document.querySelectorAll(".square");
var displayCorrectColor = document.querySelector("#choseColor");
var correctColor;
var h1 = document.querySelector("h1");
var winnerMessage = document.querySelector("#winMessage");
var rst = document.querySelector("#newColors");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var st = 0;
var difficulty = "hard";
var length;

start(difficulty);

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        var clickColor = this.style.background;
        if (clickColor === correctColor) {
            winnerMessage.textContent = "CORRECT!";
            for (var i = 0; i < length; i++) {
                squares[i].style.background = correctColor;
            }
            rst.textContent = "Play Again!";
            st = 1;
            h1.style.background = correctColor;
        }
        else {
            winnerMessage.textContent = "Try Again";
            this.style.background = "#222";
        }
    })
}
rst.addEventListener("click", function () {
    if (st === 1) {
        st = 0;
        rst.textContent = "New Colors";
        winnerMessage.textContent = "";
        start(difficulty);
    }
    else if (st === 0) {
        start(difficulty);
    }
})

easy.addEventListener("click", function () {
    if (difficulty === "hard") {
        difficulty = "easy";
        start("easy");
        this.classList.add("selected");
        hard.classList.remove("selected");
    }
})
hard.addEventListener("click", function () {
    if (difficulty === "easy") {
        difficulty = "hard";
        start("hard");
        this.classList.add("selected");
        easy.classList.remove("selected");
    }
})

function start(diff) {
    color.length = 0;
    if (diff === "easy")
        length = 3;
    else
        length = 6;
    for (var i = 0; i < length; i++) {
        color.push(choseRandomColor());
    }
    for (var i = 0; i < length; i++) {
        squares[i].style.background = color[i];
        squares[i].style.display = "block";
    }
    if (length < squares.length) {
        for (var j = length; j < squares.length; j++)
            squares[j].style.display = "none";
    }
    correctColor = choseCorrectColor();
    winnerMessage.textContent = "";
    rst.textContent = "new colors";
    h1.style.background = "steelblue";

}

function choseRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";  //rgb(r ,g ,b)
}

function choseCorrectColor() {
    var x = Math.floor(Math.random() * color.length);
    displayCorrectColor.textContent = color[x];
    return color[x];
}