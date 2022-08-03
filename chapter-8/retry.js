class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  randomNumber = Math.floor(Math.random() * 5);

  if (randomNumber == 0) return a * b;

  throw new MultiplicatorUnitFailure("My bad, I failed!");
}