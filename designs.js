// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const sizePicker = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
document.querySelector('input[type="submit"]').addEventListener('click', SubmitButton);
function SubmitButton(event){
  event.preventDefault();
  makeGrid();
}

function makeGrid() {
  // Define variables for DOM elements
  const grid = document.getElementById('pixelCanvas');
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;

  // Clear Grid
  grid.innerHTML=null;

// Create Grid
  for (var row = 1; row <= height; row++){
    const rows = document.createElement('tr')
    rows.id = 'row-' + rows;
    grid.appendChild(rows);
    for(var col = 0; col < width; col++){
      var column = document.createElement('td')
      column.id = 'row-' + rows + '-' + column;
      grid.lastChild.appendChild(column);
      //grid.appendChild(col);
    }
  }

  // click to add cell color
  grid.addEventListener('click', function(e) {
    let color = document.getElementById('colorPicker').value;
    e.target.style.backgroundColor = color;
  });
}
