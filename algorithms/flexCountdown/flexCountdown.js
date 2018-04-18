// Flexible Countdown - Based on earlier “Countdown by Fours”, given lowNum , highNum , mult , print multiples of mult from highNum down to lowNum , using a FOR . For (2,9,3) , print 963 (on successive lines).
function flexCountdown(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i--) {
      if (i % mult === 0){
        console.log(i);
      }
    }
  }
  flexCountdown(2,9,3);