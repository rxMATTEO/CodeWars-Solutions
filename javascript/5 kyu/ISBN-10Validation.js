function validISBN10(isbn) {
  return (isbn.indexOf('X') === (isbn.length - 1) || isbn.indexOf('X') === -1 ) && isbn.length === 10 && isbn.split('').reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue + (currentValue === 'X' ? 10: +currentValue) * (currentIndex + 1);
  }, 0) % 11 === 0;
}