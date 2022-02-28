
function resetAll(){
  document.getElementsByTagName('input').value = ''
  document.getElementById('error').innerText = ''
}

function calculate(){
  let item1 = document.getElementById('item1').value 
  let item2 = document.getElementById('item2').value
  let item3 = document.getElementById('item3').value
  let item4 = document.getElementById('item4').value

  let errorMsg = document.getElementById('error')
  item1 = parseInt(item1)
  item2 = parseInt(item2)
  item3 = parseInt(item3)
  item4 = parseInt(item4)

  if (isNaN(item1)||isNaN(item2)||isNaN(item3)||isNaN(item4)){
    resetAll()
    errorMsg.innerText = 'Please enter 4 valid numbers. At least one of the numbers you entered was not a valid number'
    return
  }
  if (item1 <0 || item2<0 || item3<0||item4<0){
    resetAll()
    errorMsg.innerText = 'Please enter 4 positive numbers. at least one of the numbers you entered was a negative number'
    return
  } 
  else {
    errorMsg.innerText = ''
  }
  
  let total1 = item1*20.99
  let total2 = item2*12.75
  let total3 = item3*9.95
  let total4 = item4*35.89

  let grandTotal = total1 + total2 +total3 +total4
  let earnings = grandTotal * .09 +250


  document.getElementById('numsold1').value = item1
  document.getElementById('totalsold1').value = total1.toFixed(2)

  document.getElementById('numsold2').value = item2
  document.getElementById('totalsold2').value = total2.toFixed(2)

  document.getElementById('numsold3').value = item3
  document.getElementById('totalsold3').value = total3.toFixed(2)

  document.getElementById('numsold4').value = item4
  document.getElementById('totalsold4').value = total4.toFixed(2)

  document.getElementById('totalsold').value = grandTotal.toFixed(2)
  document.getElementById('totalEarned').value = earnings.toFixed(2)

}
