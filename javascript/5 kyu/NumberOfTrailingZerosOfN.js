function zeros (n){
  let sum = 0;
  for (let i = 5; n >= 5; i *= 5) {
    n = Math.floor(n / 5);
    sum += n;
  }
  return sum;
}

console.log(zeros(1123));;