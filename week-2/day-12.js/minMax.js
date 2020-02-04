
function MinMax(nilai = []) {
    nilai= nilai.sort((a, b) => a - b)
    nilai_min = nilai [0]
    nilai_max = nilai [nilai.length-1]
    console.log(nilai)
    console.log('Nilai Min: ' + nilai_min)
    console.log('Nilai Max: ' + nilai_max)
}
MinMax([1,2,34,5,78,6])