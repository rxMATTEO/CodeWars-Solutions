let zero = operation => operation === undefined ? 0 : operation(0);
let one = operation => operation === undefined ? 1 : operation(1);
let two = operation => operation === undefined ? 2 : operation(2);
let three = operation => operation === undefined ? 3 : operation(3);
let four = operation => operation === undefined ? 4 : operation(4);
let five = operation => operation === undefined ? 5 : operation(5);
let six = operation => operation === undefined ? 6 : operation(6);
let seven = operation => operation === undefined ? 7 : operation(7);
let eight = operation => operation === undefined ? 8 : operation(8);
let nine = operation => operation === undefined ? 9 : operation(9);
let ten = operation => operation === undefined ? 10 : operation(10);

let plus = (number) => one => one + number;
let minus = (number) => one => one - number;
let dividedBy = (number) => one => Math.floor(one / number);
let times = (number) => one => one * number;