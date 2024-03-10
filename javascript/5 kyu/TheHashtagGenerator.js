function generateHashtag (str) {
  const res = `#${str.split(' ').map(i => i[0]?.toUpperCase() + i.slice(1)).filter(i => i !== 'undefined').join('')}`;
  return (!str || !str.trim() || res.length > 140) ? false: res;
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"))