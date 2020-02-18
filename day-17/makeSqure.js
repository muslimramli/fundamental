const makeSquare = (col=0, row=0) => {
   
    var hasil = ''
    // var angka = i+1
    
       for (let i = 0; i < row ; i++) {
        angka=i+1
        for (let j = 0; j < col; j++) {
                hasil += angka + ' '
                angka +=i+1
          }
          hasil += '\n'
       
       }
       console.log(hasil)
   }
 
   makeSquare(3,3)

//    hitung index huruf

let alphaBetPosition = (sentence) => {
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    sentence = sentence.replace(/[' ']/g,'')
    var pos = ''
    for (var i = 0; i<sentence.length; i++) {
        var index = alpha.indexOf(sentence[i].toLowerCase())
        if (index > 0){
                pos += index + ' '
        }
    }
    console.log(pos)
}
alphaBetPosition('budi pergi ke pasar ??')