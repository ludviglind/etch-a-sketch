// Global variables.
const canvas = document.getElementById("canvas");
const pixel = document.getElementsByClassName("pixel");

let size = 16;
let area = size * size;
let color;
let intervalID;

// Default canvas
newCanvas(size);

// Black as default fill color
canvas.addEventListener("mouseover", function(e) {
    e.target.style.background = "black";
});

// Custom canvas grid by clicking the new button
const newButton = document.getElementById("newButton");
newButton.addEventListener("click", () => {
    canvas.innerHTML = "";
    size = prompt("Select grid size: ");
    area = size * size;
    newCanvas(size);
});

// Removes all CSS properties from current grid
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
    canvas.innerHTML = "";
    for (let i = 0; i < area; i++) {
        const newPixel = document.createElement("div");
        newPixel.classList.add("pixel");
        canvas.appendChild(newPixel);
    }
});

// Calling the rainbow function to change color variable every 0,5 sec
const rainbowButton = document.getElementById("rainbowButton");
rainbowButton.addEventListener("click", () => {
    intervalID = setInterval(rainbowEffect, 0,5);
});

// Stops color from changing and sets it back to black
const blackButton = document.getElementById("blackButton");
blackButton.addEventListener("click", () => {
    clearInterval(intervalID);
    canvas.addEventListener("mouseover", function(e) {
        e.target.style.background = "black";
    });
});

// Creates a grid with a custom area
function newCanvas(size) {
    for (let i = 0; i < area; i++) {
        const newPixel = document.createElement("div");
        newPixel.classList.add("pixel");
        canvas.appendChild(newPixel);
    }
    canvas.style.gridTemplateColumns = `repeat(${size}, auto)`;
    canvas.style.gridTemplateRows = `repeat(${size}, auto)`;
}

// Randomly changes the fill color from an array of colors
function rainbowEffect() {
        const colors = ["red", "blue", "green", "yellow", "purple"];
        color = colors[Math.floor(Math.random() * colors.length)];
        if (color == "red") {
            canvas.addEventListener("mouseover", function(e) {
                e.target.style.background = "red";
            });
        } else if (color == "blue") {
            canvas.addEventListener("mouseover", function(e) {
                e.target.style.background = "blue";
            });
        } else if (color == "green") {
            canvas.addEventListener("mouseover", function(e) {
                e.target.style.background = "green";
            });
        } else if (color == "yellow") {
            canvas.addEventListener("mouseover", function(e) {
                e.target.style.background = "yellow";
            });
        } else if (color == "purple") {
            canvas.addEventListener("mouseover", function(e) {
                e.target.style.background = "purple";
            });
        }
}