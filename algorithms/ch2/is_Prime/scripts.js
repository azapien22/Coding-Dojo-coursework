// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. 
//Many highly optimized solutions exist, but for now just create one that is easy to understand and debug .
function isPrime(num){
    for (var i = num-1; i > 1; i--){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

function testIsPrime(numTimes){
    var arr = [];
    var primeVals = [];
    for (var x = 2; x <=numTimes; x++){
        arr.push(x);
    }

    for (var j = 0; j < arr.length; j++){
        if (isPrime(arr[j])){
            primeVals.push(arr[j]);
        }
    }
    return primeVals;
}

testIsPrime(100);