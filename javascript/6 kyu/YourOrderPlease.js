function order(words){
  return words.split(' ').sort((a, b) => onlyNumber(a) - onlyNumber(b)).join(' ');
}

function onlyNumber(str){
  return Number(str.split('').find(item => !isNaN(parseInt(item))));
}