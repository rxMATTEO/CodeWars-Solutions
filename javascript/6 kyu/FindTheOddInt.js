function findOdd(a){
  return +Object.values(Object.entries(a.reduce((old, newV) => {
    if(old[newV]) old[newV] += 1;
    else old[newV] = 1;
    return old;
  }, {})).find( ([key, val]) => val % 2 !== 0))[0];
}