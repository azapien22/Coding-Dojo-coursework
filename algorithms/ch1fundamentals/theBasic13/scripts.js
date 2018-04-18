//Print all the integers from 1 to 255.
function print1to255(){
    for(var i = 1; i <= 255; i++){
        console.log(i);
    }
}
print1to255();

//Print integers from 0 to 255, and with each integer print the sum so far.
function printIntsAndSum0To255(){
    var sum = 0;
    for(var i = 0; i < 256; i++ ){
        console.log('Number:' + i)
        sum += i;
        console.log('Sum:' + sum);
    }   
}
printIntsAndSum0To255();

//Given an array, find and print its largest element.
function printMaxOfArray(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}

printMaxOfArray([2,4,6,8,10]);

//Create an array with all the odd integers between 1 and 255 (inclusive).
function returnOddsArray1To255(){
    var oddArr = [];
    for(var i = 1; i < 256; i++){
        if(i % 2 !== 0){
            oddArr.push(i);
        }
    }
    console.log(oddArr);
}
returnOddsArray1To255();

//Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            console.log(arr[i]);
            count++
        }
    }
    console.log(count);
}
returnArrayCountGreaterThanY([5,10,15,20,25,30],12);

//Given an array, print the max, min and average values for that array.
function maxMinAverage(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i]; 
    }
    console.log('max is: ' + max,'min is: ' + min, 'average is: ' + sum/arr.length);
}

maxMinAverage([3,6,9,12,15,18,21]);

//Given an array of numbers, replace any negative values with the string 'Dojo' .
function swapStringForArrayNegativeVals(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            newArr.push('Dojo');
        }
      if(arr[i] > 0){
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
}
swapStringForArrayNegativeVals([-10,10,-8,8,-6,6,-4,4,-2,2]);

//Print all odd integers from 1 to 255.
function printOdds1To255(){
    for(var i = 1; i < 256; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

printOdds1To255();

//Iterate through a given array, printing each value.
function printArrayVals(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

printArrayVals([4,8,12,16,20]);

//Analyze an array’s values and print the average.
function printAverageOfArray(arr){
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        sum += arr[i];
    }
    console.log('The array average is : ' + sum/arr.length);
}

printAverageOfArray([3,5,7,9,11,13]);

//Square each value in a given array, returning that same array with changed values.
function squareArrayVals(arr){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        newarr.push(arr[i] * arr[i]);
    }
    console.log(newarr);
}

squareArrayVals([10,20,30,40,50]);

//Return the given array, after setting any negative values to zero.
function zeroOutArrayNegativeVals(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    console.log(arr);
}

zeroOutArrayNegativeVals([25,13,-10,7,-8,55]);

//Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
function shiftArrayValsLeft(arr){
    for(var i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    console.log(arr);
}
shiftArrayValsLeft([10,22,3,6,9]);

//Given an array, move all values backward (to the right) by one index, dropping the last value and leaving a 0 (zero) value at the beginning of the array.
function shiftArrayValsRight(arr,num){
    for(var i = 4; i < arr.length; i--){
        arr[i] = arr[i - 1];
    }
    arr[arr.length - 5] = num;
    console.log(arr);
}

shiftArrayValsRight([2,4,6,8,10],0);