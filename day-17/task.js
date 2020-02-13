// NO.1
Find_short = (str='') => {
    var arr = str.split(' ')
    var jumlah = []
    var hasil = []
    for (let i = 0; i < arr.length; i++) {
        jumlah.push(arr[i].length)
        
    }

    hasil = jumlah.sort(function(a,b) {return a-b})[0]

    // console.log(arr)
    // console.log(jumlah)
    console.log(hasil)
}



// NO.2
persistence = (num=0) => {

    for (var i = 0; num > 9; i++) {
        num = num.toString().split('').reduce((a, b) => b * a);
        
    }    
    console.log(i)


    
}
// persistence(39)
// persistence(999)
// persistence(4)

// NO.3
Multiplication_table = (col=0,row=0) => {
    var angka = 1
    var hasil = ''
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            
            hasil += (i*j) + ' '
            angka ++
            
        }
        hasil += '\n'
        
    }

    console.log(hasil)
}

// Multiplication_table(3,3)
// Multiplication_table(5,3)
// Multiplication_table(3,5)

// NO.4

Alphabet_position = (str='') => {
    var arr = str.split('')
    var alpha = ' abcdefghijklmnopqrstupwxyz'
    var angka = ''
    var hasil = []

    for (let i = 0; i < arr.length; i++) {
        // angka += alpha.includes(arr[i])
        if (!(arr[i] >=0)) {
            angka = alpha.indexOf(arr[i].toLowerCase())            
            if (angka !== -1) {
                hasil.push(angka)
            }
        }



    }
    hasil = hasil.join(' ')

    // console.log(arr)
    // console.log(angka)
    console.log(hasil)
}

// Alphabet_position('abC,')
Alphabet_position("The sunset sets at twelve o' clock.")
Alphabet_position("it’s never too late to try")
Alphabet_position("Have you done your homework?")

// 20 8 5 19 21 14 19 5 
// 20 19 5 20 19 1 20 20 
// 23 5 12 22 5 15 3 12 15 
// 3 11


