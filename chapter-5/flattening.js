function flatten(array) {
    return array.reduce((a, b) => a.concat(b), [])
}

let arrays_1 = [[1, 2, 3], [4, 5], [6]];
let arrays_2 = [[], [4, 5], [6]];
let arrays_3 = [[], [], []];
let arrays_4 = [[]];
let arrays_5 = [[7, 8, 9]];
let arrays_6 = [[12]];
let arrays_7 = [];


console.log(flatten(arrays_1));
console.log(flatten(arrays_2));
console.log(flatten(arrays_3));
console.log(flatten(arrays_4));
console.log(flatten(arrays_5));
console.log(flatten(arrays_6));
console.log(flatten(arrays_7));
