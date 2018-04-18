//Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both . Display the final sum in the console.
function threesAndFives(){
    var sum = 0;
    for (var i = 100; i <= 4000000; i++){
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

threesAndFives();