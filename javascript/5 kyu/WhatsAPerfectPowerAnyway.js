const isPP = function(n){
  for (let i = 2; i < 999; i++) {
    for (let j = 2; j < 999; j++) {
      if(i ** j === n){
        return [i, j];
      }
    }
  }
  return null;
}