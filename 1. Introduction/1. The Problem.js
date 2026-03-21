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

// 1. method

// const studentName = "john";

// console.log(studentName);

// 2. basic loop

const findStudents = (students, name) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i] === name) {
      return `found ${name}`;
    }
  }

  return `not found ${name}`;
};

// const findStudents = (allStd, stdName) => {
//   if (!stdName) return null;
//   const stdFound = allStd.includes(stdName);
//   return stdFound ? `Found ${stdName}` : `Not found ${stdName}`;
// };

const results = findStudents(studentsDatabase, "john");

console.log(results);
