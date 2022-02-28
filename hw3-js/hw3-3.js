
function toF(){
  let temp = document.getElementById('inputTemp').value
  temp = parseInt(temp)
  validate(temp)
  let resultC = (9/5 * temp) + 32
  document.getElementById('results').value = resultC.toFixed(0)
}

function toC(){
  let temp = document.getElementById('inputTemp').value
  temp = parseInt(temp)
  validate(temp)
  let resultF = 5/9 * (temp - 32)
  document.getElementById('results').value = resultF.toFixed(0)
}

function validate(num){
  if (isNaN(num)){
    document.getElementById('error').innerText = 'Please enter a valid temperature'

  } else {
    document.getElementById('error').innerText = ''
  }
}