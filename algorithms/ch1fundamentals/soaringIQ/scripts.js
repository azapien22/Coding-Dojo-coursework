//Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan, entered with a modest IQ of 101. 
//Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, 
//then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98 th day (the end of 14 full weeks). What is Bogdan’s final IQ?

function soaringIQ(){
    var iq = 101;
    for(var i = 1; i <= 98; i++){
        console.log(iq += .01);
    }
}
soaringIQ();