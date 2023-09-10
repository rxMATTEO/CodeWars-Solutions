function incrementString(string){
  let isContainsLetters = false;
  const onlyNumbers = (string) => +(Array.from(string).reverse().filter((item,index) => {
    if(isContainsLetters) return false;
    if(isNaN(+Array.from(string).reverse()[index+1])) isContainsLetters = true;
    return (!isNaN(+item)) }).reverse().join(''));
  let isContains = false;
  const onlySymbols = (string) => Array.from(string).reverse().filter((item, index) => {
    if (isContains) return true;
    if(isNaN(+item)) {isContains = true; return true;}
    if(item == 0 && (index != 0)) return true;
  }).reverse().join('');
  let symbols = onlySymbols(string);
  const numbers = onlyNumbers(string);
  if(numbers.toString().includes('9')) {
    let array = Array.from(symbols);
    if(~symbols.indexOf('0')) {
      array.splice(symbols.indexOf('0'), 1);
      symbols = array.join('');
    }
  }
  return symbols + (+numbers + 1);
}