var hari = 760
let tahun = Math.floor(hari/365)
let sisa_tahun = hari % 365
let bulan = Math.floor(sisa_tahun/30)
let sisa_bulan = sisa_tahun %30

console.log(tahun+ 'tahun ' + bulan + 'bulan ' + sisa_bulan + 'hari' )