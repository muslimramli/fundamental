// Nomor.1 
function FilterData(data=[],huruf='') {
    
    result = data.filter(data => data.includes(huruf))
    return result
    
}
console.log(FilterData(['fikri', 'fendi', 'budi', 'andi'],'f'))

// Nomor. 2


const countCharacter = (warna = []) => {
    var arrKata = []
    var arrJumlahKata =[]
    // console.log(warna)

    for(var i = 0 ; i<warna.length ; i ++){
        // 
        if(arrKata.includes(warna[i].toLowerCase())){
            var index_ke =  arrKata.indexOf(warna[i].toLowerCase())
            arrJumlahKata[index_ke] ++
        }else{
            arrKata.push(warna[i].toLowerCase())
            arrJumlahKata.push(1)
        }
    }
    
    for(i=0; i<arrJumlahKata.length; i++){

    }
    var HasilKata =0
    for (i=0; i<arrJumlahKata.length; i++) {

        HasilKata+=Math.floor(arrJumlahKata[i]/2)
    }
    // console.log(HasilKata)

    // console.log('kata hasil gabung: ' + arrKata)
    return `Data yang Anda masukan adalah: ${warna} dan memiliki ${HasilKata} jenis pasang warna`
    
}


console.log (countCharacter(['red', 'red', 'green', 'blue', 'green']))


// nomor 3
num = [2,3,1,2,3,4,5,4]
num.sort(function(a,b){return a-b})

angka_genap = []
angka_ganjil = []
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 ==0) {
        angka_genap.push(num[i])
    }    else {
    angka_ganjil.push(num[i])
    }   
}
console.log ('Angka Genap: '+ angka_genap)
console.log ('Angka Ganjil: ' + angka_ganjil)

var jumlahGenapBanyak = Math.max(...angka_genap)
console.log('Angka Genap Max adalah: ' + jumlahGenapBanyak)

var jumlahGanjilBanyak = Math.max(...angka_ganjil)
console.log ('Angka Ganjil Max adalah: ' + jumlahGanjilBanyak)
    var sumGenap = 0
    var avgGenap = 0
    for (var i = 0; i < angka_genap.length; i++) {
        sumGenap += angka_genap[i]
    }
    avgGenap = sumGenap/angka_genap.length
    // console.log (sumGenap)
    console.log('Nilai Rata-rata: ' + avgGenap)

    var SumGanjil = 0
    for (i=0; i<angka_ganjil.length; i++) {
        SumGanjil+=angka_ganjil[i]
    }
    console.log ('Nilai Sum Ganjil Adalah: ' + SumGanjil)