// arary1= [1,2,3]
// array2 = [a,b,c]
// array3 = [1,a,2,b,3,c]

function merge(num1, num2){
    

    var hasil = ''
    var hasil2 =''
    num1 = String(num1)
    num2 = String(num2)

    if(num1.length !== num2.length){
        return 'Kedua parameter harus punya panjang digit yang sama'
    }else{
        for(var i = 0 ; i < num1.length ; i++){
            hasil += num1[i] + num2[i]
        }
    }

    var i = 0
    while(i < num1.length){
        hasil += num1[i] + num2[i]
        i++
    }
    hasil2=hasil.slice(0,num1.length*2).split('')
    
    return hasil2
    
  
}


console.log(merge(12345,'abcde')) // 14453910