// Exercise 2: if/else Conditionals
// Write a function gradeScore(score) that:

// Returns "A" for scores 90+

// Returns "B" for 80-89

// Returns "C" for 70-79

// Returns "F" for <70

const gradeScore = (score) => {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else return "F";
};

console.log(gradeScore(95)); // "A"
console.log(gradeScore(85)); // "B"
