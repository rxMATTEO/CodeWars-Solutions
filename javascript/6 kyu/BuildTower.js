function towerBuilder(n) {
  const maxBlock = (n * 2) - 1;
  const home = [];
  for (let i = 0; i < (n * 2) - 2; i += 2) {
    draw(home, i + 1, Math.floor((maxBlock - i) / 2))
  }
  
  function draw(array, blockCount, startPos) {
    let floor = "";
    for (let i = 0; i < maxBlock; i++) {
      if (i >= startPos && floor.split('').filter((item) => item === '*').length < blockCount) {
        floor += '*';
      } else floor += " ";
    }
    return array.push(floor);
  }
  
  draw(home, maxBlock, 0);
  return home;
}