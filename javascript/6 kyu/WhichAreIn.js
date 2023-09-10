function inArray(arr1, arr2){
  let sortedArray1 = arr1.sort();
  let sortedArray2 = arr2.sort();
  let results = [];
  for(let i = 0; i < sortedArray2.length; i++){
    for ( let k = 0; k < sortedArray1.length; k++ ){
      if( sortedArray2[i].includes(sortedArray1[k]) && !results.includes(sortedArray1[k]) ) results.push(sortedArray1[k]);
    }
  }
  return results.sort();
}