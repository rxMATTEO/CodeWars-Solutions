function beeramid(bonus, price) {
  let sum = 0;
  for (let i = 1; bonus > 0; i++) {
    const amount = Math.pow(i, 2);
    bonus -= amount * price;
    if(bonus >= 0) sum += 1;
  }
  return sum;
}