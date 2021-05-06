let length_a
let length_b
let length_h
let area

// adding event listener to the button, when pressed, it preforms the functions doArea and doCircumference.
document.getElementById('button').addEventListener('click', doArea)

function doArea () {
  // gets the input values
  length_a = document.getElementById('input_a').value
  length_b = document.getElementById('input_b').value
  length_h = document.getElementById('input_h').value

  // converts strings to floating point numbers
  length_a = parseFloat(length_a)
  length_b = parseFloat(length_b)
  length_h = parseFloat(length_h)

  // add length a and b
  area = length_a + length_b

  // divide by two
  area = area / 2

  // multiply by height
  area = area * length_h

  // write to HTML
  document.getElementById('area_ans').innerHTML = area
}
