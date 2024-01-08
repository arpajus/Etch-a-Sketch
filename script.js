function createGrid(size) {
  const gridContainer = document.getElementById("container");

  gridContainer.innerHTML = '';
  let hoverColor;

  for (let index = 0; index < size; index++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.style.width = (400 / size) + "px"; 
      square.style.height = (400 / size) + "px";
      square.classList.add("cell");
      square.style.backgroundColor = "black";

      square.addEventListener("mouseover",function(){
        if (!hoverColor) {
          hoverColor = getRandomColor();
      }
      square.style.backgroundColor = hoverColor;
      });

      gridContainer.appendChild(square);
    }
  }
}

function getRandomColor(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
const buttonSize = document.getElementById("button_size");
let size = 16;
createGrid(size);

buttonSize.addEventListener("click", function () {
  rightSize = false;
  while (!rightSize) {
    size = prompt("Insert the size of the grid MAX(100)")
    if (size > 0 && size <= 100) {

      rightSize = true;
    }
  }
  createGrid(size);
});
