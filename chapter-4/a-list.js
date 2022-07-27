function arrayToList(array) {
    let list = null;

    while (array.length > 0) {
        list = {value: array.pop(), rest: list};
    }

    return list;
}

function listToArray(list) {
    let array = [];

    while (list != null) {
        array.push(list.value);
        list = list.rest;
    }

    return array;
}

function prepend(element, list) {
    return {value: element, rest: list};
}

function nth(list, n) {
    if (list == null) return undefined;
    if (n == 0) return list.value;
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30, 40, 50])));
console.log(prepend(10, arrayToList([20, 30])));
console.log(nth(arrayToList([10, 20, 30, 40, 50]), 2));
