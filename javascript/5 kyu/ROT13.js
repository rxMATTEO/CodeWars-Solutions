function rot13(str){
  return str.split('').map(item => {
    if(/[a-zA-Z]/.test(item)){
     const isUpper = item.toUpperCase() === item;
      let symbol = item.toUpperCase().codePointAt(0) + 13;
      symbol = symbol > 90 ? symbol - 90 + 64: symbol;
      return isUpper ? String.fromCodePoint(symbol).toUpperCase(): String.fromCodePoint(symbol).toLowerCase();
    }
    return item;
  }).join('');
}