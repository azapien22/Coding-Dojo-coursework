//Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3] .
var array = [3,1,6,4,2];
var newarr = array.reverse();
console.log(newarr);

function reverseArray2(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    console.log(arr);
}
reverseArray2([3,1,6,4,2]);

function reverseArray(arr){
    var left = 0;
    var right = arr.length - 1;
    while(left < right){
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    console.log(arr);
}
reverseArray([3,1,6,4,2]);