function isEmail (str='') {
    var esktension = ['.com', 'co.id', '.id']
    // check ekstension
    var isAda = false
    var jumlah = 0
    for (var i=0; i<esktension.length; i++) {
        if (str.includes(esktension[i])) {
            jumlah++
        }
        if (str.endsWith(esktension[i])){
            isAda =true
        }
    }
var jumlahAt=0
    for (i=0; i<str.length; i++) {
        if (str[i] == '@'){
            jumlahAt++
        }
    }

    var isCheck = false
    if (str.includes('@')) {
        var index = str.indexOf('@')
        if (index>0 && index < str.length) {
            isCheck = true
        }
    }
    // console.log(isCheck)
    // console.log(isAda)
    if (isAda && isCheck && jumlah==1 && jumlahAt==1) {
        return 'Email True'
    }
    else {
        return 'email false'
    }
    }
// console.log(isEmail('muslimR@gma@il.com'))

function HitungDigit(nilai='') {
    var digit=0
    var huruf=0
  for (var i =0; i<nilai.length; i++) {
      if (nilai[i]>=0) {
          digit ++
      }
      else {
          huruf ++
      }
  }
  console.log('masuk')

  return 'Jumlah Digit: ' + digit + 'Jumlah angka: ' + huruf
}
// console.log (HitungDigit('muslim220'))

function removeZero(num=0){
var nilai=String(num)
nilai2= []
    for (let i=0; i<nilai.length; i++) {
        if (nilai[i]!=="0") {
            nilai2.push(nilai[i])
        }
    }
    return nilai2
}
console.log(removeZero(093900))