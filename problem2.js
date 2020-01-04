// Problem 2: Even Fibonacci Numbers

function fiboEvenSum(n) {
  let a = 1,
    b = 0,
    sumEven = 0,
    prev;
  while (n > 0) {
    prev = a;
    a = a + b;
    b = prev;
    n--;
    if (b % 2 === 0) sumEven += b;
  }
  return sumEven;
}

let test = fiboEvenSum(10);
console.log(test);
