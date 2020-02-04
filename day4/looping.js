// for (var j =0; j <3; j++) {
//     for (var k = 0; k <3; k++) {
//         console.log (k)
//     }
//     console.log (j)
// }


// for (var j = 0; j < 3; j++) {
//     for (var k = 0; k<3; k++) {
//         for (var l = 0; l<3; l++)
//         {
//             console.log ('Saya adalah cucu')
//         }
//         console.log ('\n') 
//         console.log ('saya adalah ibu')
//     }
//     console.log ('\n')
//     console.log ('saya adalah nenek')
// }

// let j = 0
// while (j<3){
//     let i = 0
//     while (i<3){
//             let l = 0
//         while (l<3){
//             console.log ('anak')
//             l++
//         }
//         console.log ('bapak')
//         i++
//     }
//     console.log ('kakek')
//     j++
// }

//note: looping selalu menyelesaikan kondisi "anak terlebih dahulu"baru lanjut ke bapak dan kakek


//do while

i = 0
do {
        j = 0
        do {

            l = 0
            do {
                console.log ('anak')
                l++
            }
            while (l<3)

        console.log ('bapak')
        j++
    }
    while (j<3)
    console.log ('kakek')
    i++
}
while (i<3)


//note: perulangan selalu terletak di dalam action