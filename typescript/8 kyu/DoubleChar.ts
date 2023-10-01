function doubleChar(str: string): string{
  return str.split('').map( s => s.repeat(2) ).join('');
}