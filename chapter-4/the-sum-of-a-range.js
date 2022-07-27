function range(start, end) {
  var sequence = [];
  for (var i = start; i <= end; i++) {
    sequence.push(i);
  }
  return sequence;
}

console.log(range(1, 10));

function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sum(range(1, 10)));

function range_modified(start, end, step) {
  var sequence = [];
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      sequence.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step) {
        sequence.push(i);
    }
    }
    return sequence;
}

console.log(range_modified(1, 10, 2));
console.log(range_modified(5, 2, -1));
