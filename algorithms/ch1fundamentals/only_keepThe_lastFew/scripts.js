//Stan learned something today: that directly decrementing an array’s.
//length immediately shortens it by that amount. 
//Given array arr and number X , remove all except the last X elements, and return arr (changed and shorter). 
//Given ([2,4,6,8,10],3) , change the given array to [6,8,10] and return it.
function lastFew(arr, x){
    for (var i = 0; i <= arr.length - x; i++){
        for(var j = 0; j < arr.length; j++){
            arr[j] = arr[j + 1];
        }
        arr.length--; // or arr.pop();
    }
    console.log(arr);
}

lastFew([2,4,6,8,10],3);
