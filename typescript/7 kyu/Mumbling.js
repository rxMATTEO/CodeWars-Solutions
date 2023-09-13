"use strict";
function accum(s) {
    return s.split('').map((item, index) => {
        const result = item.repeat(index + 1);
        return result[0].toUpperCase() + result.slice(1).split('').map(i => i.toLowerCase()).join('');
    }).join('-');
}
//# sourceMappingURL=Mumbling.js.map