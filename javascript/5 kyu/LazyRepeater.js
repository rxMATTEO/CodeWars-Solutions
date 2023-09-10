function makeLooper(str){
  let index = 0;
  return function(){
    const result = str[index];
    if(index + 1 > str.length - 1) index = 0;
    else ++index;
    return result;
  }
}