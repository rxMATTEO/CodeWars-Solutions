function pigIt(str) {
  return str.split(' ').map(item => {
    return /[a-zA-Z]/.test(item) ?  item.slice(1) + item[0] + 'ay' : item;
  }).join(' ');
}