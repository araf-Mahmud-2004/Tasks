function arraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// Example usage
var numbers = [1, 2, 3, 4];
var total = arraySum(numbers);
console.log("Sum:", total);
// Output: Sum: 10
