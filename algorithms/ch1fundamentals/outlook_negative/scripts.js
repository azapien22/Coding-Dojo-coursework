// Given an array, create and return a new one containing all the values of the provided array, made negative ( not simply multiplied by -1 ). Given [1,-3,5] , return [-1,-3,-5] .
function negativeOutlook(arr){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            newarr.push(arr[i] - arr[i] * 2);
        }
        else {
            newarr.push(arr[i]);
        }
    }
    console.log(newarr);
}
negativeOutlook([1,-3,5]);