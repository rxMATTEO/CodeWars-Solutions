Array.prototype.sameStructureAs = function checkStruct(other){
  if(Array.isArray(this) !== Array.isArray(other)) return false;
  for ( let i = 0; i < other.length; i++ ) {
    if(this[i].toString().length !== other[i].toString().length || !check(this[i],other[i])) return false;
  }
  return true;
};
function check(array,other){
  for ( let i = 0; i < array.length; i++ ) {
    if(Array.isArray(array[i])) if(!(check(array[i],other[i]))) return false;
    else if((array[i] !== other[i]) && typeof array[i] !== 'object') return false;
  }
  return true;
}