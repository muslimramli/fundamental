function removeCharacter (kata, huruf){
    var new_kata = ''
    for(var i = 0 ; i < kata.length; i++){
        if(kata[i].toLowerCase() == huruf ){
            
        }else{
            new_kata += kata[i]
        }
    }
    return new_kata
}
console.log(removeCharacter('Muslim Ramli Purwadhika Ramli', 'a'))