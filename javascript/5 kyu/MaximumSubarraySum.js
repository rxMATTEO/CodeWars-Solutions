const maxSequence = function(array){
  let maxSumm = 0;
  for(let k = 0; k < array.length; k++){
    let currentSumm = 0;
    for(let i = k; i < array.length; i++){
      currentSumm += array[i];
      if(currentSumm > maxSumm) maxSumm = currentSumm;
    }
  }
  return maxSumm;
}