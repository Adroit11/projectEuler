// Problem 3: Largest prime factor

function largestPrimeFactor(number) {
  let temp = 0,
    fac = 2;

  while (number > 1) {
    if (number % fac === 0) {
      if (fac > temp) temp = fac;
      number = number / fac;
    } else {
      fac++;
    }
  }
  return temp;
}

let test = largestPrimeFactor(7);
console.log(test);
