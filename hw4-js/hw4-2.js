let p = 1000
let r, a, total
for (let i = 7; i>4; i--){
  document.write('<table><thead><tr><th>Year</th><th>Amount on Deposit</th><th>Interest Rate</th></tr></thead>')
  r = i/100
  console.log(r)
  for(let n = 1; n<11; n++){
    document.write('<tr>')
  a = p*(1 + r*n)
  total = a.toFixed(2)
  document.write('<td>'+n+'</td><td> $ '+total+'</td><td>'+r+'</td></tr>')
}
document.write('</table>')
}