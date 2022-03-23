  function whileLoop(){
    let sum = 0
  let prod = 1
  let i = 3
  while (i<19){
    sum += i
    prod *= i
    i += 3
  }
  document.getElementById('partB').innerText = 'This is the product of every third integer from 3 to 18 inclusive: ' + prod.toLocaleString() + '\n This is the sum of every third integer from 3 to 18 inclusive: ' + sum.toLocaleString()
  }
