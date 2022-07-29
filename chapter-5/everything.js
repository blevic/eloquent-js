function every(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}

function every_alternative(array, predicate) {
    return !array.some(x => !predicate(x));
}

console.log(every_alternative([1, 3, 5], n => n < 10));
// → true
console.log(every_alternative([2, 4, 16], n => n < 10));
// → false
console.log(every_alternative([], n => n < 10));
// → true
