function MoveA(string = '', total = 0) {
    let result = ''
    for (let i = 0; i < string.length; i++){
      result += String.fromCharCode(string.charCodeAt(i) + total) 
    }
    return result
  }
  console.log(MoveA('abcd',2))