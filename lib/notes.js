const fs = require('fs');
const path = require('path');


// Function to create a new Note
function createNewNote(body, notesArr) {
  const note = body;
  notesArr.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify({ notes: notesArr }, null, 3)
  );
  return note;
}


// Function to find note by its unique Id
// function findById(id, notesArr){
//   const result = notesArr.filter(note => note.id === id)[0];
//   console.log(result + 'line20');
//   return result;
// };

module.exports = createNewNote;





// module.exports = { 
//   createNewNote,
//   // findById,
// //}