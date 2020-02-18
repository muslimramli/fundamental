function swapeNumber(number){
    number = String(number)
    if (number.length % 2 !==0)
    {
        return 'Panjang digit harus genap'
    }
    var temp = []
    for (var i=0; i<number.length; i+=2)
        {
            temp.push(number[i] + number[i+1])
            console.log(`hasil temp: ` + temp)
        }
        console.log ('Sebelum Reverse= ' + temp)
        temp=temp.reverse()
        console.log ('setelah reverse= ' + temp)
        temp= temp.join('')
        console.log('Setelah digabungkan jadi string= ' + temp)
        return temp
    }
    console.log(swapeNumber(123456))