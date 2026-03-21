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

const findStudents = (allStd, stdName) => {
  if (!stdName) return null;
  const stdFound = allStd.includes(stdName);
  return stdFound ? `Found ${stdName}` : `Not found ${stdName}`;
};

const results = findStudents(studentsDatabase, "Ishwar");

console.log(results);
