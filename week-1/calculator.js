
function Calculator(x, y, operator){
    switch(operator){
      case '+':
        return x + y
      case '-':
        return x - y
      case '*':
        return x * y
      case '/':
        return x / y
      case '%':
        return x % y
    }
  }
console.log(Calculator(2,3,'+'))