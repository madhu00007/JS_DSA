// Step 1: Create an array with 5 student names
const students = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

// Step 2: Create a function to find a specific student by name
function findStudent(allStudents, studentName) {
  // Iterate over all students
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      return `Student ${studentName} found at index ${i}`;
    }
  }
  return `Student ${studentName} not found`;
}

// Example usage
console.log(findStudent(students, 'Charlie')); // Output: Student Charlie found at index 2
console.log(findStudent(students, 'Zara'));     // Output: Student Zara not found
