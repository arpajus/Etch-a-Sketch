const container = document.getElementById("container");
for (let index = 0; index < 16; index++) {
  let row = document.createElement("div");
  row.classList.add("row");
  
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    div.style.border = "1px solid green";
    div.classList.add("cell");
    row.appendChild(div);
  }
  container.appendChild(row);
}
