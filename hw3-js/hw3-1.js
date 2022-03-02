function calculate (){
  document.getElementById('msg').innerText = ''
  let hw = document.getElementById('homework').value
  let mid = document.getElementById('midterm').value
  let fin = document.getElementById('final').value
  let par = document.getElementById('participation').value

  let message = document.getElementById('msg')
  let score = document.getElementById('score')
  let letter = document.getElementById('letter')

  hw = parseInt(hw)
  mid = parseInt(mid)
  fin = parseInt(fin)
  par = parseInt(par)

  let finalAverage = (.5 * hw) + (.2 * mid) + (.2 * fin) + (.1 * par)
  finalAverage = finalAverage.toFixed(0)

  if (isNaN(finalAverage)){
    //console.log('nan')
    message.innerText = 'The input you put was invalid please try again with 4 numbers'
  } 
  else if (finalAverage > 100){
    //console.log('to big')
    message.innerText = 'The numbers you entered were to large please try again with number between 0 and 100'
    return
  } 
  else if (hw <= -1 || mid <=0 || fin <= -1 || par <=0){
    message.innerText = 'At least one of the numbers you entered was negative please try again with positive numbers'
    return
  } 
  else if (finalAverage > 0 && finalAverage < 60){
    //console.log('f')
    message.innerText = "Student must retake the course"
    score.value = finalAverage
    letter.value = 'F'
  } 
  else if (finalAverage > 59 && finalAverage < 70){
    //console.log('d')
    message.innerText = "Student must retake the course"
    score.value = finalAverage
    letter.value = 'D'
  } 
  else if (finalAverage > 69 && finalAverage < 80){
    //console.log('c')
    score.value = finalAverage
    letter.value = 'C'
  } 
  else if (finalAverage > 79 && finalAverage < 90){
    //console.log('b')
    score.value = finalAverage
    letter.value = 'B'
  } 
  else if(finalAverage > 89) {
    //console.log('a')
    score.value = finalAverage
    letter.value = 'A'
  }
} 

function clearForm(){
  document.getElementById('inputData').reset()
  document.getElementById('outputData').reset()
  document.getElementById('msg').innerText = ''
}