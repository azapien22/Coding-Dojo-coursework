function fitTheFirstValue(arr){
    if (arr[0] > arr.length){
        console.log('Too Big!');
    } else if (arr[0] < arr.length) {
        console.log('Too Small!');
    } else {
        console.log('Just Right!');
    }
}

fitTheFirstValue([5,3,5,7,9]);