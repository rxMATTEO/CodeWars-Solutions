function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let mins = Math.floor(seconds / 60);
  seconds %= 60;
  return `${ hours > 9 ? hours : '0' + hours }:${ mins > 9 ? mins : '0' + mins }:${ seconds > 9 ? seconds : '0' + seconds }`;
}