const countwords = (sentence = '') => {
    var arrKata = []
    var arrJumlahKata = []
    var arrSentence = sentence.split(' ')

    for (var i = 0; i<arrSentence.length; i++) {
        if (arrKata.includes(arrSentence[i].toLocaleLowerCase())) {
            
            var index_ke = arrKata.indexOf(arrSentence[i]. toLocaleLowerCase())
            arrJumlahKata[index_ke]++
        } else {
            arrKata.push(arrSentence[i].toLocaleLowerCase())
            arrJumlahKata.push(1)
        }
    }
    console.log(arrKata)
    console.log(arrJumlahKata)
    var text = ''
    for (var i=0; i<arrKata.length; i++) {
        text+= "Jumlah Kata '" + arrKata[i].charAt(0).toUpperCase() + arrKata[i].slice(1, arrKata[i].length)
        + "'adalah " + arrJumlahKata[i] + '\n'
    }
    return text
}
console.log (countwords('Nama Saya adalah nama saya'))