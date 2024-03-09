function solution2(str, ending){
  return !ending && str.slice(ending.length * -1) === (ending);
}

function solution(str, ending){
  return str.endsWith(ending);
}
