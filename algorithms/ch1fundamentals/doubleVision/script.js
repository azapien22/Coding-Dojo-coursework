// Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.
function doubleVision(arr){
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        newarr.push(arr[i] * 2);
    }
    console.log(arr);
    return newarr;
}
doubleVision([2,4,6]);