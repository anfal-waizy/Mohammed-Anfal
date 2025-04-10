/* using for-in loop*/

let numbers = [2, 3, 4, 5, 6];
console.log("using for-in loop");
for (let index in numbers) {
  let num = number(index);
  console.log(`Table of ${num}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num}x${i}=${num * i}`);
  }
}

/* using for-of loop*/

console.log("using for-in loop");
for (let num of numbers) {
  console.log(`Table of ${num}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num}x${i}=${num * i}`);
  }
}

/* using forEach loop*/

console.log("using forEach loop");
numbers.forEach((num) => {
  console.log(`Table of ${num}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num}x${i}=${num * i}`);
  }
});
