//Second: Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100,4000000) .
function betterThreesFives(start, end){
    var sum = 0;
    for (var i = start; i <= end; i++){
        if (i % 3 == 0 && i % 5 == 0){
            continue;
        }
        else if (i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    console.log("Sum is " + sum);
    return sum;
}

betterThreesFives(100,4000000);