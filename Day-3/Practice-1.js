// Exercise 1: Basic Functions
// Create these functions:

// A function greet(name) that returns "Hello, [name]!"

// A function isEven(num) that returns true if a number is even

// A function rectangleArea(width, height) that calculates area

function greet(name) {
  return `Hello ${name}!`;
}
const isEven = (num) => num % 2 === 0;
const rectangleArea = (width, height) => width * height;

console.log(greet("Alice")); // "Hello Alice!"
console.log(isEven(4)); // true
console.log(rectangleArea(5, 3)); // 15
