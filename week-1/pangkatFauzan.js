function squareEveryDigits(num){
    num = String(num)
    let hasil = ''
    for(let i = 0; i < num.length; i++){
      hasil += num[i] * num[i]
    }
    return hasil;
  }
  console.log(squareEveryDigits(225))