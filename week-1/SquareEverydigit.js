function convertNumber(num){
        var number = num.toString();
       var arr = number.split("");
     var squaredArr = [];
       for(var i=0; i<arr.length; i++){
          var int = parseInt(arr[i]);
           int = Math.pow(int, 2);
            squaredArr.push(int.toString());
    }
     return squaredArr.join('');
 
 }
 console.log(convertNumber(2))