"use strict";
function sumPairs(integers, sum) {
    const seenNumbers = new Set();
    for (let num of integers) {
        const complement = sum - num;
        if (seenNumbers.has(complement)) {
            return [complement, num];
        }
        seenNumbers.add(num);
    }
}
//# sourceMappingURL=SumPairs.js.map