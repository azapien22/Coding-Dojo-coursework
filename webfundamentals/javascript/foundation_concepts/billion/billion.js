// sample
var earnings = .01;
var amount = .01;
for (var i = 2; i <= 100000; i++) {
    earnings = earnings * 2;
    console.log("earnings", earnings);
    amount = amount + earnings;
    console.log("amount", amount);
    if(amount == Infinity){
        console.log(i);
        break;

// Actual code
var sum = 0.01;
var daysUntilTenThousand= 1;
var daysUntilBillion = 1;

for(var i =1; i<31; i++){
    sum = sum + sum;
    if(sum < 10000){
    daysUntilTenThousand++;
    }
    if (sum <1000000000){
      daysUntilBillion++
    }
  }

console.log(sum);
console.log(daysUntilTenThousand);
console.log(daysUntilBillion);