class Kata {
  static highAndLow(numbers) {
    return `${Math.max( ...numbers.split(' ').map(item => Number(item))).toString()} ${Math.min( ...numbers.split(' ').map(item => Number(item)))}`;
  }
}