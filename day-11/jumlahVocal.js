function JumlahVocal(string='') {
var CountVocal = 0
    for (let i = 0; i < string.length; i++){
        var char = string[i].toLocaleLowerCase()
        if (char=='a' || char=='u' || char == 'e' || char == 'o') {
            CountVocal++
            
        }

    }
return CountVocal    
    
}
console.log(JumlahVocal('Halo saya ke pasar'))

//