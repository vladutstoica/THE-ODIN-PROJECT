const sketchContainer = document.getElementById("sketchContainer");
const gridRangeLabel = document.getElementById("gridRangeLabel");
const gridRange = document.getElementById("gridRange");

const blackButton = document.getElementById("blackButton");
const rgbButton = document.getElementById("rgbButton");

let gridSize = gridRange.value;
let containerSize = 500;

let blackSelected = null;

window.addEventListener("resize", () => {
  checkWindowSize();
  generateBlocks(gridRange.value);
})

gridRange.addEventListener("change", () => {
  checkWindowSize();
  generateBlocks(gridRange.value);

  gridRangeLabel.textContent = gridRange.value;
});

function checkWindowSize() {
  if (window.innerWidth > 500) containerSize = 500;
  else containerSize = window.innerWidth - 20;
}

function generateBlocks(gridSize) {
  removeBlocks();
  setGridSize(gridSize);

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const sketchBlock = document.createElement("div");
      sketchBlock.classList.add("sketch__block");

      sketchContainer.append(sketchBlock);

      sketchBlock.addEventListener("mouseover", () => {
        if (blackSelected) sketchBlock.style.background = "#000";
        else sketchBlock.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
    }
  }
}

function setGridSize(gridSize) {
  gridSize = gridRange.value;

  sketchContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${containerSize / gridSize}px)`;
  sketchContainer.style.gridTemplateRows = `repeat(${gridSize}, ${containerSize / gridSize}px)`;
}

function removeBlocks() {
  // DO NOT USE FOREACH WHEN YOU WANT TO DELETE CHILD NODES BECAUSE `node.childNodes` IS A LIVE COLLECTION
  // https://stackoverflow.com/questions/48310643/removing-childnodes-using-node-childnodes-foreach
  while (sketchContainer.firstChild) {
    sketchContainer.firstChild.remove();
  }
}

window.blackSketch = function blackSketch() {
  resetSketch();

  blackButton.classList.add("button--is-selected");
  if (rgbButton.classList.contains("button--is-selected")) rgbButton.classList.remove("button--is-selected");

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
};

// Invoke function itself
(function () {
  checkWindowSize();
  generateBlocks(gridSize);
  blackSketch();
})();
