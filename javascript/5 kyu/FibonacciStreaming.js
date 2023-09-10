export function* fibonacciSequence(){
  let prev = -1;
  let prev2 = 1;
  while (true){
    if(prev === -1){
      prev = 0;
      yield 1;
    } else {
      const res = prev + prev2;
      prev = prev2;
      prev2 = res;
      yield res;
    }
  }
}