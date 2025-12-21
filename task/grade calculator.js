function calculateGrade(marks) {
    //base 
    if (marks < 0 || marks > 100) {
        return "Invalid marks. Please enter marks between 0 and 100";
    }

    if (marks >= 90 && marks <= 100) {
        return "A";
    } else if (marks >= 80 && marks < 90) {
        return "B";
    } else if (marks >= 70 && marks < 80) {
        return "C";
    } else if (marks >= 60 && marks < 70) {
        return "D";
    } else {
        return "F";
    }
}

let marks = 78;
console.log(`Student marks: ${marks}`);
console.log(`Grade: ${calculateGrade(marks)}`);