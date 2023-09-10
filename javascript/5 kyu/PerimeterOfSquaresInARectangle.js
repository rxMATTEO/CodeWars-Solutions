function perimeter(n) {
  let sum = 0;
  while(n >= 0){
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n + 1; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    sum += b;
    n -= 1;
  }
  return sum * 4;
}