let length-a
let length-b
let length-h
let area

// adding event listener to the button, when pressed, it preforms the functions doArea and doCircumference.
document.getElementById('button').addEventListener('click', doArea)

function doArea () {
  // gets the input values
  length-a = document.getElementById('input-a').value
  length-b = document.getElementById('input-b').value
  length-h = document.getElementById('input-h').value

  // converts strings to floating point numbers
  length-a = parseFloat(length-a)
  length-b = parseFloat(length-b)
  length-h = parseFloat(length-h)

  // add length a and b
  area = length-a + length-b

  // divide by two
  area = area / 2

  // multiply by height
  area = area * length-h

  // write to HTML
  document.getElementById('areaAns').innerHTML = area
}
