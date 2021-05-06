let lengthA
let lengthB
let lengthH
let area

// adding event listener to the button, when pressed, it preforms the functions doArea and doCircumference.
document.getElementById('button').addEventListener('click', doArea)

function doArea () {
  // gets the input values
  lengthA = document.getElementById('input-a').value
  lengthB = document.getElementById('input-b').value
  lengthH = document.getElementById('input-h').value

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
  document.getElementById('area-ans').innerHTML = area
}
