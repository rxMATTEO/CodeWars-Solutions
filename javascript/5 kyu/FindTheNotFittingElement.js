"use strict";
function findTheNotFittingElement(series) {
    const mostRecent = series.reduce((item, currentValue) => {
        item.has(currentValue) ? item.set(currentValue, item.get(currentValue) + 1) : item.set(currentValue, 1);
        return item;
    }, new Map());
    const max = Array.from(mostRecent.entries()).sort(([k, v], [k1, v2]) => parseInt(v2) - parseInt(v));
    const types = series.reduce((previousValue, currentValue, currentIndex, array) => {
        previousValue[typeof currentValue] ? previousValue[typeof currentValue]++ : previousValue[typeof currentValue] = 1;
        return previousValue;
    }, {});
    const findOneType = Object.entries(types).find(([s, v]) => v === 1);
    const foundType = findOneType && series.find((current) => typeof current === findOneType[0]);
    const value = series.find((current) => {
        return current == max[0][0] ? undefined : true;
    });
    const rules = [{
            type: 'string',
            predicate: (cv) => !/[A-Za-z]/.test(cv),
        },
        {
            type: 'string',
            predicate: (cv) => typeof cv === 'string' && cv.toLowerCase() === cv,
        },
        {
            type: 'string',
            predicate: (cv) => !isNaN(+cv),
        },
        {
            type: 'number',
            predicate: (cv) => cv % 2 !== 0,
        },
        {
            type: 'number',
            predicate: (cv) => cv === Math.min(...series),
        }];
    let op = false;
    rules.forEach((rule, index) => {
        const result = !series.find(item => typeof item !== rule.type) && series.filter(rule.predicate);
        if (result) {
            op = result.length === 1 && !op ? result[0] : op;
        }
    });
    return op || foundType || value;
}
//# sourceMappingURL=FindTheNotFittingElement.js.map