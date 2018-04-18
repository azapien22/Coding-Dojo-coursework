//You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.
function previousLengths(arr){
    for (var i = arr.length - 1; i >= 1; i--){
        var str = arr[i-1];
        arr[i] = str.length;
    }
    console.log(arr);
}
previousLengths(['hi', 'bye', 'cool', 'tacos']);
// this function needs review not sure if correct
// Note:  If you try to use a for loop from i = 0 to i < arr.length
// you will get this error:
// VM178:6 Uncaught TypeError: Cannot read property 'length' of undefined
//     at previousLengths (<anonymous>:6:22)
//     at <anonymous>:11:1
// because you are trying to read the length of an integer!!!!