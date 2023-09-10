function isIsogram(str){
  const letters = {};
  return !str.split('').find((item) => {
    if(item.toLowerCase() in letters) return true;
    letters[item.toLowerCase()] = item.toLowerCase();
    return false;
  });
}