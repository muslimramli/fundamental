function MSE(arr1=[], arr2=[]) {
    var arr3 = []
    Total= 0
    mean = 0
    pangkat = 0
    for (let i=0; i<arr1.length; i++) {
        arr3.push(arr2[i]-arr1[i])         
    }

    for(i=0; i<arr3.length; i++) {
        Total+=arr3[i]
    }
    mean=Total/arr3.length
    pangkat=mean*mean
    return pangkat
}
// console.log(MSE([1,2,3], [4,5,6]))

function sorting(sentence='') {
    var sentence2 = sentence.split(' ')
    char =[]
    var sort = 0
    for (i=0; i<sentence2.length; i++) {
        char.push(sentence2[i].length)
        
    }
    sort= char.sort((a, b) => a - b)
    return sort

}
console.log(sorting('budi pergi ke pasar'))