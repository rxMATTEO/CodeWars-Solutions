function solution(start,end) {
  let result = Array.from({length: end - start + 1}, (_, i) => start + i);
  return result.filter((i) => findDividers(i) === 3);
}

function findDividers(i){
  let dividers = 0;
  for (let j = 2; j < (i - 1); j++) {
    if(dividers > 3){
      return false;
    }
    if(i % j === 0){
      dividers++;
    }
    if(dividers === 3) return 3;
  }
  return dividers;
}

console.log(solution(10000, 100000));