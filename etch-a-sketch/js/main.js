const sketchContainer = document.getElementById("sketchContainer");
const gridRange = document.getElementById("gridRange");

const blackButton = document.getElementById("blackButton");
const rgbButton = document.getElementById("rgbButton");

let gridSize = gridRange.value;
const CONTAINER_SIZE = 500;

let blackSelected = true;

sketchContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${CONTAINER_SIZE / gridSize}px)`;
sketchContainer.style.gridTemplateRows = `repeat(${gridSize}, ${CONTAINER_SIZE / gridSize}px)`;

gridRange.addEventListener("change", () => {
  setGridSize();
})

function setGridSize() {
  removeBlocks();

  gridSize = gridRange.value;

  sketchContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${CONTAINER_SIZE / gridSize}px)`;
  sketchContainer.style.gridTemplateRows = `repeat(${gridSize}, ${CONTAINER_SIZE / gridSize}px)`;

  generateBlocks(gridSize);
}

function generateBlocks(gridSize) {
  resetSketch();

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const sketchBlock = document.createElement("div");
      sketchBlock.classList.add("sketch__block");

      sketchContainer.append(sketchBlock);

      sketchBlock.addEventListener("mouseover", () => {
        if (blackSelected) sketchBlock.style.background = "#000";
        else sketchBlock.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      });
    }
  }
}

function removeBlocks() {
  sketchContainer.childNodes.forEach(block => {
    block.remove();
  });
}

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const sketchBlock = document.createElement("div");
    sketchBlock.classList.add("sketch__block");

    sketchContainer.append(sketchBlock);

    sketchBlock.addEventListener("mouseover", () => {
      if (blackSelected) sketchBlock.style.background = "#000";
      else sketchBlock.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    });
  }
}

window.blackSketch = function () {
  resetSketch();

  blackButton.classList.add("button--is-selected");
  rgbButton.classList.remove("button--is-selected");

  blackSelected = true;
}

window.rgbSketch = function () {
  resetSketch();

  blackButton.classList.remove("button--is-selected");
  rgbButton.classList.add("button--is-selected");

  blackSelected = false;
}

window.resetSketch = function resetSketch() {
  sketchContainer.childNodes.forEach(block => {
    block.style.background = "#d3d3d3";
  });
}
