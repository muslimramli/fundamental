// SOAL NOMOR 1

// function findOpposite(b,a ){
//     return -(b)
// }

const findOpposite = (b) => -b

// console.log(findOpposite(-33))

// SOAL NO 2

function CekEmail(email) {
    
    if(email.includes('@')|| email.includes('.')){
        return 'true'
    }
    else {
        return 'false'
    }
}
// console.log(CekEmail('muslimramli22@gmail.com'))
    
// SOAL N0MOR 3

function PasswordValidation(password='') {
    let adaUpperCase = false
    for (i=0; i<password.length; i++) {
        if (password[i] == password[i].toUpperCase()) {
            adaUpperCase = true;
           }
      
    }

    if (adaUpperCase) {
        return 'upper case true'
       }
       else {
        return 'lower case true'
       }
        
}
console.log(PasswordValidation('mTrali'))
//

function makeSquare(kolom, baris) {
    let result = ''
    let num = 1
    for (let j = 0; j < baris; j++) {
        for (let i = 0; i < kolom; i++) {
            result += num + '\t'
            num++
        }
        result += '\n'
    }
    return result;
}