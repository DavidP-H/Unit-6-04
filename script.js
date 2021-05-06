let lengthA
let lengthB
let lengthH
let area

// adding event listener to the button, when pressed, it preforms the functions doArea and doCircumference.
document.getElementById('button').addEventListener('click', doArea)

function doArea () {
  // gets the input values
  lengthA = document.getElementById('inputA').value
  lengthB = document.getElementById('inputB').value
  lengthH = document.getElementById('inputH').value

  // converts strings to floating point numbers
  lengthA = parseFloat(lengthA)
  lengthB = parseFloat(lengthB)
  lengthH = parseFloat(lengthH)

  // add length a and b
  area = lengthA + lengthB

  // divide by two
  area = area / 2

  // multiply by height
  area = area * lengthH

  // write to HTML
  document.getElementById('areaAns').innerHTML = area
}
