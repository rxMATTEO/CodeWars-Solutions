function moveZeros(arr) {
  const array = arr.filter(i => i !== 0);
  return [...array, ..."0".repeat(arr.length - array.length).split('').map(i => +i)];
}