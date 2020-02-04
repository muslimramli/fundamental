

function displayChar(friend = []) {
    
    var nama_baru=[]
    for (let i = 0; i < friend.length; i++) {
            if (friend[i].length===5) {
                nama_baru.push(friend[i])
            }
        }
    return nama_baru                
}

console.log(displayChar(['Ryan', 'Kiera', 'Mark']))


function GanjilGenap(nilai = []) {
    Nilai_Ganjil = []
    Nilai_Genap = []
    for (let i = 0; i < nilai.length; i++) {

        if (nilai [i]  % 2 ==0) {
            // genap
            Nilai_Genap.push(nilai[i])
            
        }
        else {
            Nilai_Ganjil.push(nilai[i])
        }
    }
    return 'Nilai genap adalah: ' + Nilai_Genap + '\n Nilai ganjil adalah: ' + Nilai_Ganjil

    }

    console.log (GanjilGenap([2,3,1,3,4]))
    
