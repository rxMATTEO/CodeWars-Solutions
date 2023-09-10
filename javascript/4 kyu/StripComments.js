function solution(input, markers) {
  return input.split('\n').map((str) => {
    const marks = `[${markers.join('')}]+`;
    const rgx = new RegExp(marks);
    return str.split(rgx)[0].trim();
  }).join('\n');
};