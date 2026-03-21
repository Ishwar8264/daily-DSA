// Data Structure 👇
// const studentsDatabase = ["jordan", "erick", "john", "michel"];

// // Algorithm for finding a specific user
// const findStudent = (allStudents, studentName) => {
//   for (let i = 0; i < allStudents.length; i++) {
//     if (allStudents[i] === studentName) {
//       console.log(`Found ${studentName}`);
//     }
//   }
// };

const studentsDatabase = ["jordan", "erick", "john", "michel"];

//! 1. method

// const studentName = "john";

// console.log(studentName);

//! 2. basic loop

// const findStudents = (students, name) => {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i] === name) {
//       return `found ${name}`;
//     }
//   }

//   return `not found ${name}`;
// };

//! 3.includes()

// const findStudents = (allStd, stdName) => {
//   if (!stdName) return null;
//   const stdFound = allStd.includes(stdName);
//   return stdFound ? `Found ${stdName}` : `Not found ${stdName}`;
// };

//! 4 find()

// const findStd = (students, name) => {
//   const student = students.find((std) => std === name);
//   return student ? `Found ${name}` : `Not found ${name}`;
// };

//! 5. findIndex()

const stdName = (std, name) => {
  const studeent = std.findIndex((std) => std === name);

  return studeent != -1
    ? `found ${name} \n at index ${studeent}`
    : `not found ${name}`;
};

const results = stdName(studentsDatabase, "john");

console.log(results);
