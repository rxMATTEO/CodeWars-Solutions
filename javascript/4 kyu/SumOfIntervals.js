export function sumOfIntervals(intervals) {
    let mergedIntervals = [];
    intervals.sort((a, b) => a[0] - b[0]);
    mergedIntervals.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let previousInterval = mergedIntervals[mergedIntervals.length - 1];
        if (currentInterval[0] <= previousInterval[1]) {
            previousInterval[1] = Math.max(currentInterval[1], previousInterval[1]);
        }
        else {
            mergedIntervals.push(currentInterval);
        }
    }
    let sum = 0;
    for (let interval of mergedIntervals) {
        sum += interval[1] - interval[0];
    }
    return sum;
}
//# sourceMappingURL=SumOfIntervals.js.map