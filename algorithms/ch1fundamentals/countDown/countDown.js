function countDown(num){
    var arr = [];
    for (var i = num; i >= 0; i--){
      arr.push(i);
    }
    console.log(arr);
    console.log(arr.length);
  }
  countDown(5);