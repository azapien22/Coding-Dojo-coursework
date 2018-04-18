var arr= [];
function lengthValue(num1, num2){
    for (var i = 0; i < num1; i++) {
        arr.push(num2);
    } if (arr.length === num2) {
        console.log('Jinx!');
    }
    console.log(arr);
}
lengthValue(5,5);