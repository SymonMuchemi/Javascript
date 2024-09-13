// Write a JavaScript program to delete the rollno property
// from the following object. Also print the object before or
// after deleting the property.
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log('Before deletion:');

for (let key in student) {
    console.log(`${key} = ${student[key]}`)
}

delete student.rollno

console.log('After deletion:');

for (let key in student) {
    console.log(`${key} = ${student[key]}`)
}

