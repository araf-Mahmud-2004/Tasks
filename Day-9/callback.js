// A simple function that takes a callback and calls it

function useCallback(callback) {
  console.log("About to call the callback...");
  callback();
  console.log("Callback was called!");
}

// Output when called:
// 1. "About to call the callback..."
// 2. The callback's output
// 3. "Callback was called!"

// Example 1: Using a named function as callback
function sayHello() {
  console.log("Hello from callback!");
}
useCallback(sayHello);
// Output:
// About to call the callback...
// Hello from callback!
// Callback was called!

// Example 2: Using an anonymous function
useCallback(function() {
  console.log("This is an anonymous function!");
});
// Output:
// About to call the callback...
// This is an anonymous function!
// Callback was called!

// Example 3: Using an arrow function (ES6+)
useCallback(() => console.log("This is an arrow function!"));
// Output:
// About to call the callback...
// This is an arrow function!
// Callback was called!
