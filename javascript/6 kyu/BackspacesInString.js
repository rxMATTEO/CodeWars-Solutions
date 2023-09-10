function cleanString(s) {
  let str = [];
  for (let i = 0; i < s.split('').length; i++) {
    if(s[i] === '#') str.pop();
    else str.push(s[i]);
  }
  return str.join('');
}