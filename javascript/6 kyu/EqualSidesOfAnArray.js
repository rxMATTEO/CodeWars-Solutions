function findEvenIndex(n)
{
  for ( let i = 0; i < n.length; i++ ){
    let leftSumm = n.slice(0,i+1).reduce( (prev, current) => prev += current );
    let rigthSumm = n.slice(i,n.length).reduce( (prev, current) => prev += current );
    if(leftSumm === rigthSumm) return i;
  }
  return -1;
}