// function reverseSeq(angka) {
//     hasil = []
//     for (var i=angka; i>0; i--) {
//         hasil.push(i)
        
//     }
//     return hasil
// }
// console.log(reverseSeq(5))

// function solution(str){
//   hasil=''
//     for (var i=str; i>0; i--)
//   {
    
//   }
//   return hasil
// }
// console.log(solution('WORLD'))

// function solution(str) {
//     return str.split('').reverse().join('');
//    }
//    console.log(solution('world'));
   
// function century(year) {
//     let sisa = year % 100
//     if (sisa > 0) {
//         return (year-sisa) / 100+1
//     }
// else
//     tahun = year/100
    
//     return tahun
//   }
// console.log(century(2001))

// a/100 = X if x =0, nilai =1*
// 1000/100 = 9, 9=9, nilai= a, else, nilai= a+1

function squareSum(numbers){
    var hasil = 0
    for (var i=0; i<numbers.length; i++ )
    {
        hasil+=numbers [i] * numbers [i]
    }
    return hasil
}
console.log (squareSum([1,2,2]))