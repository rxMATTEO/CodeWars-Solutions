export function josephusSurvivor (n, k) {
  let result = [];
  let index = 0;
  const arr = Array.from({length: n}).map((item, index) => ++index);
  while (arr.length > 1) {
    index = (index + k - 1) % arr.length;
    result.push(arr[index]);
    arr.splice(index, 1);
  }
  return arr[0];
}