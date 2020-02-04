
const formatDuration = (input=0) => { // 31536062
    var tahun = Math.floor(input / (365 * 24 * 3600)) // 1
    var sisa_tahun = input % 31536000 // 62
    var hari = Math.floor(sisa_tahun / (24*3600)) // 0
    var sisa_hari = sisa_tahun % (24 * 3600) // 62 % 86400 = 62
    var jam = Math.floor(sisa_hari / 3600) // 0
    var sisa_jam = sisa_hari % 3600 // 62
    var menit = Math.floor(sisa_jam / 60) // 1
    var detik = sisa_jam % 60 // 2

    var text = ''
    text += input + ' = '

    // TAHUN
    if(tahun > 0){
        text += tahun + ' year'
        if(tahun > 1){
            text += "'s"
        }
        text += ' , '
    }

    // HARI
    if(hari > 0){
        text += hari + ' day'
        if(hari > 1){
            text += "'s"
        }
        text += ' , '
    }

    // JAM
    if(jam > 0){
        text += jam + ' hour'
        if(jam > 1){
            text += "'s"
        }
        text += ' , '
    }

    // MENIT
    if(menit > 0){
        text += menit + ' minute'
        if(menit > 1){
            text += "'s"
        }
        text += ' , '
    }

    // DETIK
    if(detik > 0){
        text += detik + ' second'
        if(detik > 1){
            text += "'s"
        }
        text += ' , '
    }

    var arrText = text.split(' , ') 
    // [ '31536062 = 1 year', '1 minute', '2 second\'s', '' ]
    arrText.pop(arrText.length-1)

    var new_text = ''
    for(var i = 0 ; i < arrText.length ; i++){
        new_text += arrText[i]
        if(i == arrText.length-2){
            new_text += ' and '
        }else if(i !== arrText.length-1){
            new_text += ' , '
        }
    }

    console.log(new_text)
}


formatDuration(123456789)