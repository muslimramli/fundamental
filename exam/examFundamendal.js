// SOAL NOMOR 4
function spacify(str='') {
        
    arr_str = str.split('')
    var str_baru= []
    for (i=0; i<arr_str.length; i++) {
        str_baru+=arr_str[i] + ' '
        
    }
    return str_baru

}
// SOAL NOMOR 1

  function sumOdd(num = 0) {
    return String(num)
      .split('')
      .reduce((nilaiAwal, nilaiSekarang, index) => {
        if (index%2==0) {
            return nilaiAwal+=Number(nilaiSekarang)
            
        }
        else
        {
            return nilaiAwal
        }
      }, 0)
    
  }
//   console.log(sumOdd(13443))


//   SOAL NOMOR 2

function findUniqueChar(string = '') {
    return string.replace(' ', '')
      .split('')
      .reduce((acc, curr, i, arr) => {
        if( arr.indexOf(curr) === arr.lastIndexOf(curr))  {
           return acc + curr

        }
        
       else {
       return acc
        
       }
        
      })
}
// console.log(findUniqueChar('fikri'))

// SOAL NOMOR 3
function sumOnlyNum(string = '') {
    return string
      .split('')
      .reduce((acc, curr) => {
        if ( !isNaN(Number(curr))) {
            return acc + Number(curr)
        } 
        else {
            return acc
        }
       
         
  }
     ,0 )
}


console.log(sumOnlyNum('muslim123'))



// SOAL NOMOR 5
const spasi = string => string.replace(/\s/, '').split('').join(' ')

const Middle = (string = '') => {
  return string.split(' ').reduce((acc, curr) => {
    if (curr.length == 2) {
      return acc;
    }
if (curr.length % 2 == 0){
    return acc + curr.substr(curr.length / 2 - 1, 2)

}
else {
    return acc + curr.substr((curr.length - 1) / 2, 1)
}

    
}
  ,'')
}
// console.log(Middle('hello world'))
