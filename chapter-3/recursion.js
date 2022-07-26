function isEven(n) {
  if (n < 0) return isEven(-n);
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
// console.log(isEven(0.5)); oh no you better don't
