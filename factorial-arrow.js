let calcAndPrintFactorial = (n) => {
  let fact = 1;
  for (i = 1; i <= n; i++) {
    fact = fact * i;
  }
  printFactorial(n, fact);
};

let printFactorial = (n, fact) => {
  console.log(`Factorial of ${n} = ${fact}`);
};
