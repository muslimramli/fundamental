// var bintang =''
// var i = 0
// do {
//     var j = 0 
//     do {
//         bintang += '*'
//         j++
//     }
//     while (j <= i)
    
//     i++
//     if (i !==5 )
//     {
//         bintang +='\n'
//     }
// }
//  while (i<5)
//  console.log (bintang)

//  *
//  **
//  ***
//  ****
//  *****

// var bintang = ''
// for ( var i = 0; i<5; i++ )
//     {
//         for (var j = 0; j<5-i; j++)
//         {
//             bintang+='*'
//         }
//         bintang +='\n'
//     }
//     console.log (bintang)

// *****
// ****
// ***
// **
// *


// var bintang = ''
// for (var i=5; i>0; i--)
// {
//     for (var j = 0; j<i; j++)
//     {
//         bintang+='*'
//     }    
//     bintang+='\n'
// }
// console.log(bintang)

// *****
// ****
// ***
// **
// *

var bintang = ''
for (var i= 5; i>0; i--)
    {
        bintang += '*' .repeat(i) + '\n'
    }
    console.log (bintang)
