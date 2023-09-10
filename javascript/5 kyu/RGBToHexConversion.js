function rgb(r, g, b){
  function normilize(color){
    color = (color > 255 ? 255 : color < 0 ? 0 : color).toString(16);
    if(color.length < 2) color = '0' + color;
    return color.toUpperCase();
  }
  return normilize(r) + normilize(g) + normilize(b);
}