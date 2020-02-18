let array = [
    [1, 2, 3], 
    [4, 5, 6],
     [7,8,9]]
let newArr = []
const puterArr = a => a[0].map((col, c) => a.map((row, r) => a[r][c]).reverse())


function sortBaris(arr, baris) {
    arr[baris].sort()
    return arr;
}

function sortVartikal(arr, kolom) {
    let vertikal = []

    arr.map(elem => elem[0] )
}


function sortVertikal(arr, kolom) {
    function vertikals(arr, kolom) {
        let result = []
        for(let i = 0; i < arr.length; i++) {
            result.push(arr[i][kolom])
        }
        return result.sort();
    }

    let vertikalArr = vertikals(arr, kolom)
    console.log(vertikalArr)
    for(let i = 0; i < arr.length; i ++) {
        arr[i][kolom] = vertikalArr[i]
    }
    return arr;
}


function puterNkali(arr, n) {
    let result = arr
    for(let i = 0; i < n; i++) {
        result = puterArr(result)
    }
    return result
}

console.log(puterNkali(array, 2))