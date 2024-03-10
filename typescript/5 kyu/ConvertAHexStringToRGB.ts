function hexStringToRGB(hexString: string) {
  const [ ,r,r1, g,g1,b,b1 ] = hexString;
  return {
    r: +`0x${r}${r1}`,
    g: parseInt(g+g1,16),
    b: parseInt(b+b1,16)
  }
}

console.log(hexStringToRGB('#FF9933'));