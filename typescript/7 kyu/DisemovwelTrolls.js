"use strict";
class Kata {
    static disemovwels = ['a', 'e', 'i', 'o', 'u'];
    static disemvowel(str) {
        return str.split('').filter(i => !this.disemovwels.includes(i.toLowerCase())).join('');
    }
}
console.log(Kata.disemvowel('This website is for losers LOL'));
//# sourceMappingURL=DisemovwelTrolls.js.map