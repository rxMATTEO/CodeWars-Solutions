function DNAStrand(dna){
  let dnaArray = Array.from(dna);
  let completements = {
    'A' : 'T',
    'T' : 'A',
    'C' : 'G',
    'G' : 'C'
  };
  for (let i in dnaArray) {
    if ( completements[dnaArray[i]] ) dnaArray[i] = completements[dnaArray[i]];
  }
  return dnaArray.join('');
}