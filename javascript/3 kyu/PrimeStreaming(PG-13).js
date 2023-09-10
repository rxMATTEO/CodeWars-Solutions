class Primes {
  static * stream() {
    for(let i = 2; i <  Number.MAX_SAFE_INTEGER; i++) {
      if(isPrime(i)) yield i;
    }
  }
}

function isPrime(num) { // returns boolean
  if (num <= 1) return false; // negatives
  if (num % 2 == 0 && num > 2) return false; // even numbers
  const s = Math.sqrt(num); // store the square to loop faster
  for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
    if(num % i === 0) return false; // modulo shows a divisor was found
  }
  return true;
}