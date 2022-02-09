function calculateCurrancy(){
  let usDollarAmount = document.getElementById('USdollarInput').value;
  let usDollars = parseFloat(usDollarAmount)

  let euro = (usDollars * .84).toFixed(2);
  let canadianDollar = (usDollars * 1.23).toFixed(2);
  let hongKongDollar = (usDollars * 7.76).toFixed(2);
  let yen = (usDollars * 110.80).toFixed(2);
  let peso = (usDollars * 19.82).toFixed(2);
  
  document.getElementById('europe').innerText = euro;
  document.getElementById('canada').innerText = canadianDollar;
  document.getElementById('hongKong').innerText = hongKongDollar;
  document.getElementById('japan').innerText = yen;
  document.getElementById('mexico').innerText = peso;
}