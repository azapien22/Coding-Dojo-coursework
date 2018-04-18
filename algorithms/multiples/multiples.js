function multiples_three(){
  for(var sum = -300; sum < 1; sum += 3){
    if(sum == -3 || sum == -6){
      continue;
    }
    console.log(sum);
  }
}
multiples_three()
