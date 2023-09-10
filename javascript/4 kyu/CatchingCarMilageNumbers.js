function isInteresting(number, array, returnAmount = 2){
  const functions = [
    () => array.includes(number),
    () => number.toString().length > 1 && +number.toString().slice(1) === 0,
    () => number.toString().length > 1 && number.toString().split('').reduce( (current, prev) => current === prev ? current: false),
    () => number.toString().length > 1 && number.toString().split('').reduce( (current, prev) => !current ? false: +current + 1 === (+prev === 0 ? 10: +prev) ? (+prev === 0 ? 10: +prev): false),
    () => ( number.toString().length > 1 && number.toString().split('').reduce( (current, prev) => !current ? false: +current === +prev + 1 ? prev :false) !== false
    ),
    () => number.toString().length > 1 && number.toString().split('').reverse().join('') === number.toString(),
  ];
  if(functions.find(fun => fun()) && number > 99) return returnAmount;
  return returnAmount !== 1 ? (isInteresting(number + 1, array, 1) || isInteresting(number + 2, array, 1) || 0) : 0;
  
}