let number = [];
number.push(80);
number.push(90);
number.push(70);
number.push(95);
number.push(85);
console.log(number);

console.log(number[1]);
console.log(`Length of numbers array=${number.length}`);

let sales = [50000, 75000, 15000];
let AnnualSales = 0;

for (let i = 0; i <= sales.length; i++) {
  AnnualSales = AnnualSales + sales;
}
console.log(`AnnualSales=${AnnualSales}`);
