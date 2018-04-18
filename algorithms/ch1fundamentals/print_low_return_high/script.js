// Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr){
    var low = arr[0];
    var high = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < low){
            low = arr[i];
        } if (arr[i] > high){
            high = arr[i];
        }
    }
    console.log('low is ' + low);
    return 'High is ' + high;
}
printLowReturnHigh([9,8,7,6,5,4,3]);