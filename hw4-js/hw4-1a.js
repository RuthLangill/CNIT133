function forLoop(){
let prod = 1
let sum = 0
for (let i=5; i<26; i+=4){
  prod *= i
  sum += i
  console.log(i)
}

document.getElementById('partA').innerHTML = 'This is the product of every fourth integer from 5 to 25 inclusive: ' + prod.toLocaleString() + '\n And this is the sum of every fourth integer from 5 to 25 inclusive: ' + sum.toLocaleString()
}
