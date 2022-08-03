class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  randomNumber = Math.floor(Math.random() * 5);

  if (randomNumber == 0) return a * b;

  throw new MultiplicatorUnitFailure("My bad, I failed!");
}

function wrapper() {
  for (;;) {
    try {
        myNumber = primitiveMultiply(2, 3);
        console.log(`The multiplication 2 * 3 is: ${myNumber}`);
        break;
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure) {
        console.log("Caught MultiplicatorUnitFailure. Let's try again!");
        } else {
        throw e;
        }
    }
  }
}

wrapper();
