// Countdown by Fours - Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
var pos = 2016;
while(pos > 0){
    if(pos % 4 == 0){
        console.log(pos);
    }
    pos--;
}