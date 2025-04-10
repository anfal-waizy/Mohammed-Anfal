function isNumberPrime(n) {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    let remainder = n % i;
    if (remainder == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

let n = 11;
let prime = isNumberPrime(n);

if (prime == true) {
  console.log(`${n} is a prime number`);
} else {
  console.log(`${n} is not a prime number`);
}
