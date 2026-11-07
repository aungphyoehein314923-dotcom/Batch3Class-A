const students = [
    { name: "Sara", score: 80 },
    { name: "Tom", score: 90 }
];

const studentNames = students.map(student => student.name.toUpperCase());

console.log(studentNames);