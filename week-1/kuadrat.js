// function kuadrat(angka){
//     return Number(('' + angka).split('')
//     .map(function (val)
//     { return val * val;}).join(''));
// }
// console.log (kuadrat(25))


function sqare(number) {
    return +Array.from(number.toString(),
    v => v * v).join('');
}
console.log(sqare(92));








// function convertNumber(num){
//     //the toString method converts a number into a string
//     var number = num.toString();
//     //the split method splits the string into individual numbers
//     var arr = number.split("");
//     //this variable will hold the numbers that we square later
//     var squaredArr = [];
//     //the for loop iterates through everything in our array
//     for(var i=0; i<arr.length; i++){
//        //parseInt turns a string into a number
//        var int = parseInt(arr[i]);
//        //Math.pow raises integers to a given exponent, in this case 2
//        int = Math.pow(int, 2);
//        //we push the number we just made into our squared array as a string
//        squaredArr.push(int.toString());
//     }
//     //the function returns the numbers in the squared array after joining 
//     //them together.  You could also parseInt the array if you wanted, doing 
//     //this as parseInt(squaredArr[0]);  (this would be done after joining)
//     return squaredArr.join('');
 
//  }
//  console.log(convertNumber(2))