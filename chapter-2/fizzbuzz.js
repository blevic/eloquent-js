for (let number = 1; number <= 100; number += 1) {
    if (number%3 == 0 && number%5 == 0) out = "FizzBuzz";
    else if (number%3 == 0) out = "Fizz";
    else if (number%5 == 0) out = "Buzz";
    else out = number.toString();

    console.log(out)
}