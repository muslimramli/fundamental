var bintang =1
var print = ''

for (var i = 1; i<6; i++) {
    
    for (var j = 0; j<=5-i; j++) {
        print+=' '
    }
    
    for (var k = 0; k<bintang; k++) {
        print+='*'
    }
   
    print+= '\n'
    bintang +=2
}

console.log (print)