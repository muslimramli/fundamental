
function sumNumber(nilai = []) {
    nilai= nilai.sort((a, b) => a - b)
    nilai_pertama = nilai [0]
    nilai_kedua = nilai [1]
    sum = nilai_pertama+nilai_kedua
    console.log('nilai setelah di sortir adalah: ' + nilai + ' \nDan penjumlahan nilai pertama dan kedua adalah: '
    + sum)
   
}
// sumNumber([3,4,2,4,2,3,4])


// SOAL NO 2

function removeDuplicate(string) {
    
    var newString=string.split(" ")
   var  result = []
    for (i=0; i<newString.length; i++) {
        if(result.indexOf(newString[i]) === -1){
            result.push(newString[i]);
          } 
    }
result=result.join(" ");
return result

}
// console.log(removeDuplicate('alpha beta beta gamma gamma'))

// SOAL Node.3

const countCharacter = (sentence = '') => {
    var arrHuruf = [] // [nama,saya,adalah]
    var arrJumlahHuruf =[] // [1,1,1]
    var arrSentence = sentence.split('') // ['Nama' , "saya" , 'adalah','nama']
    // console.log(arrSentence)

    for(var i = 0 ; i< arrSentence.length ; i ++){
        // 
        if(arrHuruf.includes(arrSentence[i].toLowerCase())){
            var index_ke =  arrHuruf.indexOf(arrSentence[i].toLowerCase())
            arrJumlahHuruf[index_ke] ++
        }else{
            arrHuruf.push(arrSentence[i].toLowerCase())
            arrJumlahHuruf.push(1)
        }
    }

    // console.log(arrHuruf)
    // console.log(arrJumlahHuruf)
    hasil=Math.max(...arrJumlahHuruf)
    var hurufTerbanyak=arrHuruf[arrJumlahHuruf.indexOf(hasil)]
    return `Huruf terbanyak adalah: ${hurufTerbanyak}`
    // var text = ''
    // for(var i = 0 ;i < arrHuruf.length ; i++){
    //     text += "Jumlah Huruf '" + arrHuruf[i].charAt(0).toLocaleLowerCase() + arrHuruf[i].slice(1,arrHuruf[i].length) + "' adalah " + arrJumlahHuruf[i] + '\n'
    // }
    // console.log(text)
}


console.log (countCharacter('xlphaaaaaa'))

// NO 4


const countAngka = (sentence = '') => {
    var arrAngka = [] // [nama,saya,adalah]
    var arrJumlahAngka =[] // [1,1,1]
    var arrSentence = sentence.split('') // ['Nama' , "saya" , 'adalah','nama']
    // console.log(arrSentence)

    for(var i = 0 ; i< arrSentence.length ; i ++){
        // 
        if(arrAngka.includes(arrSentence[i].toLowerCase())){
            var index_ke =  arrAngka.indexOf(arrSentence[i].toLowerCase())
            arrJumlahAngka[index_ke] ++
        }else{
            arrAngka.push(arrSentence[i].toLowerCase())
            arrJumlahAngka.push(1)
        }
    }

    // console.log(arrAngka)
    // console.log(arrJumlahAngka)
    hasil=Math.min(...arrJumlahAngka)
    var angkaSedikit=arrAngka[arrJumlahAngka.indexOf(hasil)]
    return `Angka Unik adalah: ${angkaSedikit}`
    // var text = ''
    // for(var i = 0 ;i < arrAngka.length ; i++){
    //     text += "Jumlah Huruf '" + arrAngka[i].charAt(0).toLocaleLowerCase() + arrHuruf[i].slice(1,arrHuruf[i].length) + "' adalah " + arrJumlahHuruf[i] + '\n'
    // }
    // console.log(text)
}


console.log (countAngka('1225587788'))
