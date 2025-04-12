let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

console.log(`fibonacci series = ${fibonacci}`);

let fib = [];
let n = 10; //0 1 1 2 3 5 8 13 21 34...

for (let i = 2; i <= n; i++) {
  if (i == 0 || i == 1) {
    fib.push(i);
  } else {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
}

console.log(`fibonacci series = ${fib}`);
