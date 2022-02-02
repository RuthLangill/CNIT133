function calculate(){
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;
  let num3 = document.getElementById('number3').value;

  n1 = parseInt(num1);
  n2 = parseInt(num2);
  n3 = parseInt(num3);

  sum = n1 + n2 + n3
  avg = sum/3
  product = n1*n2*n3
  min = Math.min(n1,n2,n3)
  max = Math.max(n1,n2,n3)

  if (isNaN(sum)){
    window.alert('You must enter all 3 numbers to calulate')
    return
  }
  results = "The sum is: "+sum +"\n The average is: " + avg + "\n The product is: " + product +"\n The smallest number is: " + min +"\n The largest number is: "+ max
  
  return document.getElementById('results').innerHTML = results
}

function resetText(){
  return document.getElementById("results").innerHTML = "";
}

function fadeResults(){
  return
}
