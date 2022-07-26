function countBs(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            count++;
        }
    }
    return count;
}

console.log(countBs("ABBA"));

function countChar(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countChar("ABBA", "A"));

function wrapCountChar(char) {
    return str => countChar(str, char);
}

newCountBs = wrapCountChar("B");

console.log(newCountBs("ABBA"));

countRs = wrapCountChar("r");

closureCount = countRs("I know that it's over, I don't need your / Closure, closure, your closure");

console.log(closureCount);
