const student = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true,
};

function displayStudentInfo(studentObj) {
  for (let prop in studentObj) {
    console.log(`Property: ${prop}, Value: ${studentObj[prop]}`);
  }
}

// Call the function with the student object
displayStudentInfo(student);
