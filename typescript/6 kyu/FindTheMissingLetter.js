"use strict";
function findMissingLetter(array) {
    const found = array.find((current, index) => {
        const min = array[index + 1].codePointAt(0) - current.codePointAt(0);
        return min > 1;
    });
    return String.fromCodePoint(found.codePointAt(0) + 1);
}
//# sourceMappingURL=FindTheMissingLetter.js.map