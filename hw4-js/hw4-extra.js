function box(){
  let height = document.getElementById('height').value 
  let width = document.getElementById('width').value 
  let rows
  for(let x = width; x>0; x--){
    document.write(' * ')
    for(let y=height; y>0; y--){
      document.write('\n* ')
    }
}}