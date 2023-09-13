class Kata {
  static disemovwels = ['a','e','i','o','u'];
  static disemvowel(str: string): string {
    return str.split('').filter( i => !this.disemovwels.includes(i.toLowerCase())).join('');
  }
}

console.log(Kata.disemvowel('This website is for losers LOL'));