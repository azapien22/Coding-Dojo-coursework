var names = ["James", "Jill", "Jane", "Jack"];
function namesPrint(arr){
    for (var i = 0; i < arr.length; i++) {
        console.log(`${i} -> ${arr[i]}`);
    }
}
namesPrint(names, "-");
