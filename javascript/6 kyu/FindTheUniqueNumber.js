"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUniq = void 0;
function findUniq(arr) {
    var _a;
    return Number((_a = Object.entries(arr.reduce(function (prev, curr) {
        prev[curr] ? prev[curr]++ : prev[curr] = 1;
        return prev;
    }, {})).find(function (_a) {
        var k = _a[0], v = _a[1];
        return v === 1;
    })) === null || _a === void 0 ? void 0 : _a[0]);
}
exports.findUniq = findUniq;
