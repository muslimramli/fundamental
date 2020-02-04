function Cek_Plat(plat_nomor) {

let a = new Date()
 tanggal = a.getDate()
// 24

plat_nomor = plat_nomor.substr(2,1)
console.log (plat_nomor)

if(tanggal % 2 == 0){
    tanggal = 'genap'
}else{
    tanggal = 'ganjil'
    
}

if(plat_nomor % 2 == 0){
    plat_nomor = 'genap'
}else{
    plat_nomor = 'ganjil'
}

if(plat_nomor == tanggal){
    return'Boleh lewat'
}else{
    return'Gak Boleh lewat'
}
}
console.log(Cek_Plat('D 3 EC'))