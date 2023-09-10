function getSum( a,b )
{
  if (a === b) return a;
  let result = 0;
  
  let to = a > b ? a : b;
  let from = a > b ? b : a;
  
  for(; from <= to; from++) {
    result += from;
  }
  return result;
}