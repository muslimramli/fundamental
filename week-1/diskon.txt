
function diskon(quantity, price, discount){
    return quantity * price * (1 - discount / 100)
  }
  console.log(diskon(4, 20000, 20));