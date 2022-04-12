const grid = document.querySelector(".grid");
let gridValue = document.querySelector(".grid-size");
let gridSize = document.querySelector("input");
const resetgrid = document.querySelector(".reset");
const applyGridSize = document.querySelector(".apply");
let squareSize = 8;

createGrid(squareSize);

// Create squares inside grid
function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

// Create grid and append squares to it
function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

// Reset grid
function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(squareSize);
}

// Mouseover event to draw inside the grid
grid.addEventListener("mouseover", function (e) {
  if (e.target.matches(".box")) {
    e.target.classList.add("active");
  }
});

gridSize.addEventListener("input", function (e) {
  squareSize = e.target.value;
  gridValue.textContent = `${squareSize}x${squareSize}`;
});

applyGridSize.addEventListener("click", function () {
  reset();
});

resetgrid.addEventListener("click", reset);
