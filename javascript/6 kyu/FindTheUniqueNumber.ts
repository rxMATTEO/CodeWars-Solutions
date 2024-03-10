export function findUniq(arr: number[]) {
  return Number(Object.entries(arr.reduce((prev: { [k: number]: number }, curr: number) => {
    prev[curr] ? prev[curr]++: prev[curr] = 1;
    return prev;
  }, {})).find(([k,v]) => v === 1)?.[0]);
}