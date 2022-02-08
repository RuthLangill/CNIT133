function calculate(){
  //function to calculate the sum, average, product, min number and max number of the numbers input by the
  document.getElementById('error').innerText = "";
  document.getElementById('results').style.opacity = '1';
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;
  let num3 = document.getElementById('number3').value;

  let n1 = parseInt(num1);
  let n2 = parseInt(num2);
  let n3 = parseInt(num3);

  let sum = n1 + n2 + n3;
  let avg = sum/3;
  let product = n1*n2*n3;
  let min = Math.min(n1,n2,n3);
  let max = Math.max(n1,n2,n3);
  
  let results = " The sum is: "+sum +"\n The average is: " + avg + "\n The product is: " + product +"\n The smallest number is: " + min +"\n The largest number is: "+ max;

  if (isNaN(sum)){
    document.getElementById('error').innerText = 'You must enter all 3 whole numbers to calulate';
    return; 
  } else {
  
  document.getElementById('results').value = results;
}
}

function resetText(){
  //function to clear the results text area
  document.getElementById("results").value = ""; 
  document.getElementById('error').innerText = "";
  document.getElementById('results').style.opacity = "1";
}