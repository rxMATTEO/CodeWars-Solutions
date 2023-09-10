function toCamelCase(str){
  return str.split(/[-_]+/).map((item, index) => {
    if(index === 0) return item;
    const itemLetter = item[0].toUpperCase();
    item = item.slice(1);
    return itemLetter + item;
  }).join('');
}