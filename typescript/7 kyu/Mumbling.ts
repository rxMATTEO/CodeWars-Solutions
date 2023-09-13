function accum(s: string): string {
  return s.split('').map( (item, index) => {
    const result = item.repeat(index + 1);
    return result[0].toUpperCase() + result.slice(1).split('').map(i => i.toLowerCase()).join('');
  } ).join('-');
}