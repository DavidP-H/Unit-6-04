let length_A
let length_B
let length_H
let area

// adding event listener to the button, when pressed, it preforms the functions doArea and doCircumference.
document.getElementById('button').addEventListener('click', doArea)

function doArea () {
  // gets the input values
  length_A = document.getElementById('input-a').value
  length_B = document.getElementById('input-b').value
  length_H = document.getElementById('input-h').value

  // converts strings to floating point numbers
  length_A = parseFloat(length_A)
  length_B = parseFloat(length_B)
  length_H = parseFloat(length_H)

  // add length a and b
  area = length_A + length_B

  // divide by two
  area = area / 2

  // multiply by height
  area = area * length_H

  // write to HTML
  document.getElementById('area-ans').innerHTML = area
}
