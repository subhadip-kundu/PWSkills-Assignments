function gradeStudent() {
    let marks = prompt("Enter the student's marks:");

    if (isNaN(marks)) {
        alert("Please enter a valid number for marks.");
    } else {
        marks = parseInt(marks);

        if (marks >= 90) {
            grade = "A";
        } else if (marks >= 70) {
            grade = "B";
        } else if (marks >= 50) {
            grade = "C";
        } else {
            grade = "F";
        }

        alert(`Student's grade is: ${grade}`);
    }
}

gradeStudent();
