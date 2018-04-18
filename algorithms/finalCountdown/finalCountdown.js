// The Final Countdown - This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4) , print the multiples of param1 , starting at param2 and extending to param3 . One exception: if a multiple is equal to param4 , then skip (don’t print) it. Do this using a WHILE . Given (3,5,17,9) , print 6,12,15 (which are all of the multiples of 3 between 5 and 17 , and excluding the value 9 ).

function finalCountdown(param1, param2, param3, param4) {
    var i = param2;
    while (i <= param3) {
      if (i % param1 === 0 && i !== param4) {
        console.log(i);
      }
      i++;
    }
  }
  finalCountdown(3, 5, 17, 9)
  
var num = 5;
while (num < 17){
    if(num % 3 === 0 && num !== 9){
        console.log(num);
    }
    num++;
}