function biggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            arr[i] = 'big';
        }
    }
    console.log(arr);
}

biggieSize([-5,10,32,-2,-7]);