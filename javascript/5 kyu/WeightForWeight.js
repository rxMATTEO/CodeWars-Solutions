function orderWeight(string){
  const getSum = (s) =>  s.split('').reduce(( prev, curr ) => +prev + +curr,0);
  return string.split(' ').sort((a, b) => getSum(a) === getSum(b) ? a.localeCompare(b) : getSum(a) - getSum(b)   ).join(' ');
}