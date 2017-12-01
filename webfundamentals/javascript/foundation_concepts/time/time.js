var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

var str = "It's";

if (MINUTE > 30) {
    str += "almost" + (HOUR + 1);
} else{
    str += "just after" + HOUR;
}

if(PERIOD == "PM") {
    str += "in the evening.";
} else{
    str += "in the morning.";
}

console.log(str);

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

var str = "It's";

if (MINUTE > 30) {
    str += "almost" + (HOUR +1)
} else{
    str += "just after" + (HOUR);
}

if (PERIOD == "PM") {
    str += "in the evening";
} else{
    str += "in the morning";
}

console.log(str);

// ========== BONUS ===============
var str = "It's ";
if(MINUTE == 5){
    str += "5 after " + HOUR
}else if(MINUTE == 15){
    str += "quarter after " + HOUR
}else if(MINUTE == 30){
    str += "half past " + HOUR
}else if(MINUTE > 30){
    str += "almost " + (HOUR + 1)
}else{
    str += "just after " + HOUR
}

if(PERIOD == "PM"){
    if(HOUR > 6){
        str += " in the evening."
    }else{
        str += " in the afternoon"
    }
}else{
    str += " in the morning."
}

console.log(str)