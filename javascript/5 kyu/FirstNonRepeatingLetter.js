function firstNonRepeatingLetter(s) {
  return !s ? s: s[Object.entries(s.toLowerCase().split('').reduce( (previousValue, currentValue, index) => {
    previousValue[currentValue] ? previousValue[currentValue].value += 1: previousValue[currentValue] = { value: 1, index };
    return previousValue;
  },{})).find(([k,v]) => v.value === 1)?.[1].index] || '';
}

console.log(firstNonRepeatingLetter('moonmen'));