let map = {one: true, two: true, hasOwnProperty: true};

console.log({}.hasOwnProperty.call(map, "one"));
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
