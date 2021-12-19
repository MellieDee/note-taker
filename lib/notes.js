// //js for working with NOTE FUNCTIONS

const fs = require('fs');
const path = require('path');


// // Function to create a new Note
// function createNewNote(body, notesArr) {
//   const note = body;
//   notesArr.push(note);

//   fs.writeFileSync(
//     path.join(__dirname, '../../db/db.json'),
//     JSON.stringify({ notes: notesArr }, null, 3)
//   );
//   // console.log(note);
//   return note;
// };



// Function to find note by its unique Id
// takes in id and notesArr and returns a single note object
const findById = (id, notesArr) => {
  const result = notesArr.filter(note => note.id === id)[0];
  console.log(result + 'line26');
  return result;
};

module.exports = findById;





// module.exports = { 
//   createNewNote,
//   // findById,
// //}