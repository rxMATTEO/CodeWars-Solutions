function dblLinear(n: number) {
  let u = [1];

  let x = 0;
  let y = 0;

  while (u.length <= n) {
    let nextX = 2 * u[x] + 1;
    let nextY = 3 * u[y] + 1;

    if (nextX <= nextY) {
      u.push(nextX);
      x++;
      if (nextX === nextY) {
        y++;
      }
    } else {
      u.push(nextY);
      y++;
    }
  }

  return u[n];
}