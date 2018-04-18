//Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit.
// Return that one-digit result. Example: sumToOne(928) returns 1 , because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1 .
//// sumToOne recursively  
function sumToOneDigit(num){

    if (num < 10){
        return num;
    }
    var str = num.toString();
    var sum = 0;
    for (var i = 0; i < str.length; i++){
        sum += Number(str[i]);
    }

    return sumToOneDigit(sum);

}

console.log(sumToOneDigit(199));


// sumToOne iteratively

function sumToOneDigit2(num){

    while (num >= 10) {
      var str = num.toString();
      var sum = 0;
      for (var i = 0; i < str.length; i++){
        sum += Number(str[i]);
      }
      num = sum;
    }

    return num;

}

console.log(sumToOneDigit2(123456789));