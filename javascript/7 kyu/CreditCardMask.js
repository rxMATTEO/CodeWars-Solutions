function maskify(cc){
  return cc.split('').reverse().map((item, index) => index < 4 ? item: '#').reverse().join('');
}