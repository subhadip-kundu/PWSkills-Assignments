const students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
];

// a. Add a student
function addStudent(newStudent) {
  if (
    !newStudent ||
    !newStudent.id ||
    !newStudent.firstName ||
    !newStudent.lastName ||
    !newStudent.age ||
    !newStudent.grade
  ) {
    throw new Error(
      "Please provide a valid student object with all properties (id, firstName, lastName, age, grade)"
    );
  }

  students.push(newStudent);
}

// b. Update student information
function updateStudent(id, updateInfo) {
  const studentIndex = students.findIndex((student) => student.id === id);
  if (studentIndex !== -1) {
    students[studentIndex] = { ...students[studentIndex], ...updateInfo };
  } else {
    console.log("Student not found");
  }
}

//c. Delete a Student
function deleteStudent(id) {
  const studentIndex = students.findIndex((student) => student.id === id);
  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
  } else {
    console.log("Student doesn't exist !");
  }
}

// d. List All Students
function listAllStudents() {
  students.forEach((student) => {
    console.log(
      `${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`
    );
  });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
  return students.filter((student) => student.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
  const totalAge = students.reduce((acc, student) => acc + student.age, 0);
  return totalAge / students.length;
}

// Test the functions
addStudent({
  id: 4,
  firstName: "Alice",
  lastName: "Wonderland",
  age: 21,
  grade: "B",
});
updateStudent(3, { age: 20 });
deleteStudent(2);
console.log("All Students:");
listAllStudents();
console.log("Students with Grade A:");
console.log(findStudentsByGrade("A"));
console.log("Average Age of Students:", calculateAverageAge());
