
const container = document.getElementById('cont')

const CreateDivs = (props) => {
  const boxDiv = document.createElement('div')
  boxDiv.setAttribute('id', 'divBox')
  // boxDiv.addEventListener('mouseover', function () {
  //     if (color == 0) {
  //         boxDiv.style.backgroundColor = '#000000'
  //     }
  //     else if (color == 1) {
  //         boxDiv.style.backgroundColor = '#' + getColor()
  //     }
  //     else if (color == 2) {
  //         col = window.getComputedStyle(boxDiv).getPropertyValue('background-color')
  //         curCol = col.split("(")[1].split(")")[0]
  //         curCol = curCol.split(",")
  //         for (let j = 0; j < curCol.length; j ++){
  //             curCol[j] -= 25
  //         }
  //         curCol = "rgb(" + curCol.join(",") + ")"
  //         boxDiv.style.backgroundColor = curCol
  //         }
  //     })
  container.append(boxDiv)
}

function App() {
  return (
    <div>
      Etch-A-Sketch
      <div class="buttons">
        <button onclick="change()">Change Grid</button>
        <button onclick="resetGrid()">Reset Grid</button> 
        <button onclick="setBlack()">Black Color</button> 
        <button onclick="whiteOut()">White Out</button> 
        <button onclick="setRainbow()">Rainbow Colors</button> 
        <button onclick="darken()">Darken Colors</button> 
      </div>
      <div id="cont">
        Container
      </div>
    </div>

  )
}




export default App;
