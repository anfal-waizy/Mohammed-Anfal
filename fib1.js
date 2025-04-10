let printFibonacci = (n) => {
  let a = 0,
    b = 1,
    fibo;

  for (let i = 1; i <= n; i++) {
    console.log(a);
    fibo = a + b;
    a = b;
    b = fibo;
  }
};
