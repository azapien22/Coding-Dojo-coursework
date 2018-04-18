function valuesGreater(arr) {
    var newArr = [];
    for (var i = 0; i <= arr.length; i++){
        if (arr[i] > arr[1]){
            newArr.push(arr[i]);
        }
    } 
    console.log(newArr);
    console.log(newArr.length);
    return newArr.length;
}
valuesGreater([1,3,5,7,9,13]);