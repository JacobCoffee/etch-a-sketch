
/* #region  Constants */
const drawArea = document.querySelector(".sketcher");
const allDrawAreaSquares = document.querySelectorAll('.sketcher > div');

// Button Definitions
const basicBtn = document.querySelector(".basic");
const colorPickBtn = document.querySelector("#color-picker");
let colorPickBtnValue = document.getElementById("color-picker-overlay");
const randomBtn = document.querySelector(".random");
const pastelBtn = document.querySelector(".pastel");
const realisticBtn = document.querySelector(".realistic");
const resizeBtn = document.querySelector(".resize");
const shakeBtn = document.querySelector(".shake");

// Color Swatch Definitions
const currentSwatch = document.querySelector(".current");
const redSwatch = document.querySelector(".red");
const yellowSwatch = document.querySelector(".yellow");
const blueSwatch = document.querySelector(".blue");
const greenSwatch = document.querySelector(".green");
const blackSwatch = document.querySelector(".black");
const whiteSwatch = document.querySelector(".white");

// App Defaults
const defaultSize = 306;
const defaultColor = "#2b2b2b";
/* #endregion Constants */

/* #region Event Listeners / On Click Actions */
// Button On Click Functions
basicBtn.onclick = () => {
    console.log("Basic button clicked!");
    hover("black");
    currentSwatch.style.background = "black";
}

colorPickBtnValue.onclick = () => {
    console.log("Pick Color Value area clicked!");
}

randomBtn.onclick = () => {
    console.log("Random Colors button clicked!");
    let currentRandomColor = getRandomColor();
    hover(currentRandomColor);
    currentSwatch.style.background = currentRandomColor;
}

pastelBtn.onclick = () => {
    console.log("Random Colors button clicked!");
    let currentPastelColor = getPastelColor(); 
    hover(currentPastelColor);
    currentSwatch.style.background = currentPastelColor;
}

realisticBtn.onclick = () => {
    console.log("Realistic button clicked!");
    alert("This is a work in progress!");
    currentSwatch.style.background = "grey";
}

resizeBtn.onclick = () => {
    console.log("Resize button clicked!");
    alert("This is a work in progress!");
}

shakeBtn.onclick = () => {
    console.log("Shake button clicked!");
    const allDrawAreaSquares = document.querySelectorAll('.sketcher > div');
    let sketcher = document.querySelector(".sketcher");
    allDrawAreaSquares.forEach((div) => {
        div.style.background = "white";
        // sketcher.style.border = "30px solid blue";
        sketcher.classList.add('shake');
    });
    setTimeout(function () {
        sketcher.classList.remove('shake');
    }, 1500);
}

redSwatch.onclick = () => {
    console.log("Basic button clicked!");
    hover("red");
    currentSwatch.style.background = "red";
}

yellowSwatch.onclick = () => {
    console.log("Basic button clicked!");
    hover("yellow");
    currentSwatch.style.background = "yellow";
}

blueSwatch.onclick = () => {
    console.log("Basic button clicked!");
    hover("blue");
    currentSwatch.style.background = "blue";
}

greenSwatch.onclick = () => {
    console.log("Basic button clicked!");
    hover("green");
    currentSwatch.style.background = "green";
}

blackSwatch.onclick = () => {
    console.log("Basic button clicked!");
    hover("black");
    currentSwatch.style.background = "black";
}

whiteSwatch.onclick = () => {
    console.log("Basic button clicked!");
    hover("white");
    currentSwatch.style.background = "white";
}

// Area Event Listeners
drawArea.addEventListener('mouseover', function (e) {
    console.log("Mouse has entered the draw area!");
    // this.style.background = "red";
});

drawArea.addEventListener('mouseleave', function (e) {
    console.log("Mouse has left the draw area!");
    // this.style.background = "white";
});

document.getElementById('color-picker-overlay').onchange = function () {
    currentSwatch.style.background = this.value;
    console.log(this.value + " has been chosen as the current color!");
    hover(this.value);
}

// Random Pastel Color 
var menuBoxes = document.getElementsByClassName('pastel');
for (var i = 0; i < menuBoxes.length; i++) {
    menuBoxes[i].onmouseover = function (e) {
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        var colorString = color;
        this.style['background'] = colorString;
    }
}

// Random Color 
var menuBoxes = document.getElementsByClassName('random');
for (var i = 0; i < menuBoxes.length; i++) {
    menuBoxes[i].onmouseover = function (e) {
        var color = '#' + Math.floor(Math.random() * 1605).toString(16);
        var colorString = color;
        this.style['background'] = colorString;
    }
}
/* #endregion Event Listeners / On Click Actions */

/* #region Etch A Sketch Functions */
let createGrid = squares => {
    // console.log(squares);
    for (let i = 1; i <= squares; i++) {
        drawAreaSquare = document.createElement("div");
        drawArea.appendChild(drawAreaSquare);
    }
    hover(defaultColor);
}

let hover = color => {
    const allDrawAreaSquares = document.querySelectorAll('.sketcher > div');

    allDrawAreaSquares.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            return e.target.style.backgroundColor = color;
        });
    });

}

/* #endregion Etch A Sketch Functions */

/* #region Color Generators */
let getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let getPastelColor = () => {
    return "hsla(" + ~~(360 * Math.random()) + "," +
        "70%," +
        "80%,1)"
}
/* #endregion Color Generators */

createGrid(defaultSize);