function josephus(arr, k) {
  let result = [];
  let index = 0;
  while (arr.length > 0) {
    index = (index + k - 1) % arr.length;
    result.push(arr[index]);
    arr.splice(index, 1);
  }
  return result;
}