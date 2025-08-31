// app.js - Main application file that imports and uses the math utilities

// Importing the math utilities
const math = require('./mathUtils');

// Using the imported functions
console.log('2 + 3 =', math.add(2, 3));
console.log('4 * 5 =', math.multiply(4, 5));
console.log('Square of 6 =', math.square(6));

// You can also use object destructuring
const { add, multiply, square } = require('./mathUtils');
console.log('Using destructured imports:');
console.log('7 + 8 =', add(7, 8));
console.log('9 * 10 =', multiply(9, 10));
