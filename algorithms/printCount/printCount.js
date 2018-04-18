var num5s = 0;

for (var i=512; i<4097; i++) {
  if (i % 5 === 0) {
    console.log(i);
    num5s++;
  }
}

console.log("There were " + num5s + " numbers with multiples of 5.");