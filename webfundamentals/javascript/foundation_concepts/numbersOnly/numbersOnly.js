var combo = ["chicago", 23, "Jordan", 1, "iverson", 22, -72];

function numOnly(arr){
    var newArr=[];
    for(var i=0; i<arr.length; i++){
        if (typeof arr[i] === "number"){
            newArr.push(i);
        }
    }
    console.log(newArr);
}

numOnly(combo);