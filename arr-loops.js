let sales = [50000, 25000.6];
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
  totalSales = totalSales + sales[i];
}
console.log(`total sales using for=${totalSales}`);

//for-in
totalSales = 0;
for (let i in sales) {
  let index = parseInt(i) + 1;
  console.log(`sales of day ${index}=${sales[i]}`);
  totalSales += sales[i];
}
console.log(`Total Sales Using For In =${totalSales}`);

//forEach
totalSales = 0;
let calcSales = (sale) => {};
sales.forEach((sale, i) => {
  console.log(`sales of day ${i + 1}=${sale}`);
  totalSales += sale;
});
console.log(`Total Sales Using For In =${totalSales}`);

//for-of
totalSales = 0;
for (let sale of sales) {
  totalSales += sales;
}
console.log(`Total Sales Using For Of = ${totalSales}`);
