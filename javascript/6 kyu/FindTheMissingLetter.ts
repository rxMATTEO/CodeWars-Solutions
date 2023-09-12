function findMissingLetter(array: string[]): string {
  const found = array.find( (current, index) => {
    const min = (array[index + 1].codePointAt(0) as number) - (current.codePointAt(0) as number);
    return min > 1;
  }) as string;
  return String.fromCodePoint(found.codePointAt(0) as number + 1);
}