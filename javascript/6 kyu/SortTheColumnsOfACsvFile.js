function sortCsvColumns(csvFileContent) {
  const array = (csvFileContent.split('\n').map(i => i.split(';')));
  const obj = {};
  for (let col = 0; col < array[0].length; col++) {
    for (let row = 0; row < array.length; row++) {
      if(row === 0) obj[ array[0][col] ] = []
      else obj[array[0][col]].push(array[row][col]);
    }
  }
  const sorted = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));
  let str = "";
  sorted.map(i => i[0]).forEach((i, index,array) => str += `${i}${index === array.length - 1 ? '\n' : ';'}`);
  const values = (sorted.map(i => i[1]))
  for (let col = 0; col < values[0].length; col++) {
    for (let row = 0; row < values.length; row++) {
      str += `${values[row][col]}${row === values.length - 1 ? '\n': ';'}`;
    }
  }
  return str.slice(0, -1);
}