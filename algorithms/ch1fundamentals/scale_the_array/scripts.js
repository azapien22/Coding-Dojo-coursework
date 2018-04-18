//Given array arr and number num , multiply each arr value by num , and return the changed arr .
function scaleArray(arr, num){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    console.log(arr);
}

scaleArray([1,2,3,4,5],10);