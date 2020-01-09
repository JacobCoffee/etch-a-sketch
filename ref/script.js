
/* #region  Constants */
const drawArea = document.querySelector(".sketcher");
const allDrawAreaSquares = document.querySelectorAll('.sketcher > div');

// Button Definitions
const basicBtn = document.querySelector(".basic");
const colorPickBtn = document.querySelector("#color-picker");
const randomBtn = document.querySelector(".random");
const realisticBtn = document.querySelector(".realistic");
const resizeBtn = document.querySelector(".resize");
const shakeBtn = document.querySelector(".shake");

// App Defaults
const defaultSize = 16;
const defaultColor = "#2b2b2b";
/* #endregion Constants */

/* #region Event Listeners / On Click Actions */
// Button On Click Functions
basicBtn.onclick = () => {
    console.log("Basic button clicked!");
}

colorPickBtn.onclick = () => {
    console.log("Pick Color button clicked!");
}

randomBtn.onclick = () => {
    console.log("Random Colors button clicked!");
}

realisticBtn.onclick = () => {
    console.log("Realistic button clicked!");
}

resizeBtn.onclick = () => {
    console.log("Resize button clicked!");
}

shakeBtn.onclick = () => {
    console.log("Shake button clicked!");
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
/* #endregion Event Listeners / On Click Actions */

// Etch A Sketch Functions

let createGrid = squares => {
    // console.log(squares);
    for (let i = 1; i <= squares; i++) {
        drawAreaSquare = document.createElement("div");
        drawArea.appendChild(drawAreaSquare);
    }
    hover(defaultColor);
}

const hover = color => {

    const drawAreaSquare = document.querySelectorAll('.sketcher > div');

    drawAreaSquare.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            return e.target.style.backgroundColor = defaultColor;
        });
    });

}

createGrid(defaultSize);