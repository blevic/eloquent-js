function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || b === null) return false;
  if (typeof a != 'object' || typeof b != 'object') return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let element of keysA) {
    if (!keysB.includes(element)) return false;
    if (!deepEqual(a[element], b[element])) return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, null));
console.log(deepEqual(obj, undefined));
console.log(deepEqual(null, null));
console.log(deepEqual(null, undefined));
console.log(deepEqual(undefined, undefined));
