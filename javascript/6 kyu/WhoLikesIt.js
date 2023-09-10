export const likes = (a ) => {
  if (!a.length) return "no one likes this";
  if (a.length === 1) return `${a[0]} likes this`;
  if (a.length === 2) return `${a.join(' and ')} like this`;
  return `${a.slice(0, 2).join(', ')} and ${a.length > 3 ? `${a.length - 2} others` : a[a.length - 1]} like this`;
}