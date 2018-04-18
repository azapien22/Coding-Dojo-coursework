function valuesGeneralized(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > arr[1]){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    console.log(newArr.length);
}
valuesGeneralized([2,3,5,7,9,12,22,]);