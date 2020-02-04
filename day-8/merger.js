function input(num1, num2) {
    
    num1 = String(num1)
    num2 = String(num2)
    var hasil=''
    if (num1.lenght!==num2.lenght) {
        console.log('Jumlah digit harus sama!')
    }
    for (i=0; i<num1.length; i++)
        {
         hasil+= num1[i] +num2[i]
        }
    
      return hasil
}


console.log(input(34, 98))