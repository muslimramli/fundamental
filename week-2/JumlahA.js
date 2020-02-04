function jumlahA(string = '') {
  let result = 0;
  for (let i = 0; i < string.length; i++){
    result += string.charCodeAt(i) - 96 
  }
  return result
}
console.log(jumlahA('abata'))