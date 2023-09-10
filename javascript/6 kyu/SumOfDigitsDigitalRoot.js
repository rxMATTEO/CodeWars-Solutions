function sumOfDigitsDigitalRoot(n){
  if(n < 10) return n;
  const a = n.toString().split('').reduce((old, newV) => {
    return +old + +newV;
  }, 0);
  return sumOfDigitsDigitalRoot(a)
}