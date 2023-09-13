"use strict";
function number(busStops) {
    return busStops.reduce((previousValue, currentValue) => {
        return [currentValue[0], previousValue[0] - previousValue[1]];
    })[1];
}
console.log(number([[10, 0], [3, 5], [5, 8]]));
//# sourceMappingURL=NumberOfPeopleInTheBus.js.map