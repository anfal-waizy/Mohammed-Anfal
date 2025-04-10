function calcFactorial(n) {
  let fact = 1;
  for (i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(`Factorial of ${n} = ${fact}`);
}


// let number = [];
// number.push(85);
// number.push(68);
// number.push(44);
// console.log(number);

// console.log(number[1]);
// console.log(`Length of numbers array=${number.length}`);

// let sales = [50000, 75000, 15000];
// let totalSales = 0;

// for (let i = 0; i <= sales.length; i++) {
//   totalSales = totalSales + sales;
// }
// console.log(`totalSales=${totalSales}`);