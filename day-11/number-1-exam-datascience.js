var data_1 = [71,70,73,70,70,69,70,72,71,300]
data_1=data_1.sort((function(a, b){return a - b}))
console.log(data_1)

function median(data_1) {
    const sorted = data_1.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

console.log(median(data_1));
GanjilGenap = data_1.length % 2
if (GanjilGenap ==0 ) {
    q1=data_1.slice(0,data_1.length/2)
    console.log (q1)
    q3= data_1.slice(data_1.length/2,data_1.length)
    console.log (q3)
}
else {
q1=data_1.slice(0,data_1.length/2)
console.log('q1 ganjil: ' +q1)
q3 = data_1.slice (data_1.length/2+1, data_1.length)
console.log('q3 ganjil: ' +q3)    

}

ganjilGenap2 = q1.length %2
if (ganjilGenap2==0) {
    
    hasil_q1 = q1.slice(q1.length/2-1,q1.length/2+1)
    console.log('HasilQ= ' + hasil_q1)
    penjumlahanHasil_q1 = (hasil_q1[0] + hasil_q1[1]) / 2
    console.log (penjumlahanHasil_q1)
    
    hasilq3 = q3.slice(q3.length/2-1,q3.length/2+1)
    console.log(hasilq3)
    penjumlahanHasil_q3 = (hasilq3[0] + hasilq3[1]) / 2
    console.log ('penjumlahan Q3: ' + penjumlahanHasil_q3)
}
else{
    hasil_q1 = q1.slice(q1.length/2,q1.length/2+1)
    console.log('hasil q1 ganjil: ' +hasil_q1)

    hasil_q3 = q3.slice(q3.length/2,q3.length/2+1)
    console.log('hasil q3 ganjil: ' +hasil_q3)
}
var iqr=hasil_q3-hasil_q1


LowerLimit = hasil_q1[0]-1.5*iqr

UpperLimit = hasil_q3 [0]+ 1.5*iqr


let dataNotOutlier = []
let dataOutlier = []

for(var i = 0 ; i< data_1.length ; i++){
    if(data_1[i] < LowerLimit || data_1[i] > UpperLimit){
        dataOutlier.push(data_1[i])
    }else{
        dataNotOutlier.push(data_1[i])
    }
}
console.log ('nilai IQR adalah: ' + iqr)
console.log ('Lower Limit adalah: ' + LowerLimit)
console.log('Upper Limit adalah: ' + UpperLimit)
console.log('Data Tidak Outlier ' + dataNotOutlier)
console.log('Data yang Outlier ' + dataOutlier)