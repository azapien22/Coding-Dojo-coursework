//Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food" . If no array elements are "food" , then print "I'm hungry" once.
function alwaysHungry(arr){
    var Food = 'tacos';
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == Food){
            console.log('yummy');
        } else {
            console.log("I'm Hungry");
        }
    }
}
alwaysHungry([1,2,3,'tacos']);