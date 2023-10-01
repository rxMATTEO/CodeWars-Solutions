"use strict";
function number(busStops) {
    return busStops.reduce((previousValue, currentValue, currentIndex) => {
        if (currentIndex === 0)
            return currentValue;
        return [previousValue[0] + currentValue[0] - currentValue[1], 0];
    }, busStops[0])[0];
}
//# sourceMappingURL=NumberOfPeopleInTheBus.js.map