//Build function that accepts array. Return a new array with all values except first , adding 7 to each. Do not alter the original array.
function addSeven(arr){
    console.log(arr);
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        newarr.push(arr[i] + 7);
    }
    console.log(newarr);
}
addSeven([1,2,3,4,5,6,7]);