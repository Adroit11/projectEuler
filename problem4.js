// Problem 4: Largest palindrome product

function largestPalindromeProduct(n) {
  let largestNum = 0;
  let start = "9".repeat(n).join("");
  if (n > 1) {
    for (let i = start; i > 91; i++) {
      for (let j = start; j > 91; j++) {
        let numb = j * i;
        console.log(numb);
        if (
          String(numb) ===
            String(numb)
              .split("")
              .reverse()
              .join("") &&
          numb > largestNum
        ) {
          largestNum = numb;
        }
      }
    }
  }
  return largestNum;
}

let test = largestPalindromeProduct(2);
console.log(test);
