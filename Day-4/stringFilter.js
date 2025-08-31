
function filterByLength(strings, minLength) {
  var result = [];
  for (var i = 0; i < strings.length; i++) {
    var s = strings[i];
    if (s.length >= minLength) {
      result.push(s);
    }
  }
  return result;
}

var words = ["hi", "code", "javascript", "go", "node", "js"];
var filtered = filterByLength(words, 3);
console.log("Filtered:", filtered);
// Output: Filtered: [ 'code', 'javascript', 'node' ]
