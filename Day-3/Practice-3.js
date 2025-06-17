// Exercise 3: Loops
// 1. Print numbers 1-10 using a for loop
// 2. Create a function sumToN(n) that sums all numbers from 1 to n
// 3. Use a while loop to count down from 5 to 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumToN(5)); // 15

let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
// Output:
// 5
