
function toF(){
  let temp = document.getElementById('inputTemp').value
  temp = parseInt(temp)
  validate(temp)
  let resultC = (9/5 * temp) + 32
  document.getElementById('results').value = temp + 'C is ' + resultC.toFixed(0)+ 'F'
}

function toC(){
  let temp = document.getElementById('inputTemp').value
  temp = parseInt(temp)
  validate(temp)
  let resultF = 5/9 * (temp - 32)
  document.getElementById('results').value = temp + 'F is '+ resultF.toFixed(0)+'C'
}

function validate(num){
  if (isNaN(num)){
    document.getElementById('error').innerText = 'Please enter a valid temperature'

  } else {
    document.getElementById('error').innerText = ''
  }
}