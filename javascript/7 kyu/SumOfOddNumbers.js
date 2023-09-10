function rowSumOddNumbers(n) {
  let triangle = "";
  let prevCounter = 0;
  let counter = 0;
  for (let i = 0; i < 1000000; i++){
    if(!(i % 2 === 0)){
      triangle += i + " ";
      if(prevCounter <= counter++) {
        triangle += "\n";
        prevCounter = counter;
        counter = 0;
      }
    }
  }
  let stringOfNumbers = triangle.split("\n")[n-1];
  return stringOfNumbers.split(' ').reduce(( (previousValue, currentValue) => Number(previousValue) + Number(currentValue) ));
}