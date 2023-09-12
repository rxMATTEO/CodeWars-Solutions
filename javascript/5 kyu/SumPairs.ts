function sumPairs(integers: number[], sum: number){
  const seenNumbers = new Set();
  for (let num of integers) {
    const complement = sum - num;
    if (seenNumbers.has(complement)) {
      return [complement, num];
    }
    seenNumbers.add(num);
  }
}