// Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function positives(arr){
    console.log('arr was' + arr);
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++;
        }
    }
    arr[arr.length - 1] = count;
    console.log(arr);
}
positives([-1,1,1,1]);