const fs = require('fs');
const router = require('express').Router();
const uniqid = require('uniqid');

const findById = require('../../lib/notes');





//*********************************************************/
// **************    GET:    All Notes    *****************/
//*********************************************************/
//Reads current db.json file then responds with notes (sends to js/html to be rendered)

router.get('/notes', (req, res) => {
  // Read db.json to see current notes and parse 
  const notes = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
  if (notes) {
    res.json(notes);
  } else {
    res.status(404).send('Something is wrong');
  }
})




//*********************************************************/
// ************      DELETE:    Note        ***************/
// //*********************************************************/
// router.get('/notes/:id',  (req, res) => {
//   const notes = fs.readFileSync('db/db.json', 'utf-8')
//   const activeNote  = findById(req.params.id, notes);


//   // if (result) {
//   //   console.log(result)
//   //   res.json(result);
//   // } else {
//   //   res.send(404);
//   // }
//   console.log(activeNote);
//   return activeNote
// });

router.get('/notes/:id', function (req, res) {
  const notes = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));

  

});



router.delete('notes/:id', function(req, res) {

  notes.Remove({ id: req.params.id }, function(err) {
      if (!err) {
          return res.send('deleted!');
      } else {
          return res.send('Error deleting!');
      }
  });

});




//*********************************************************/
// ************      DELETE:    Note        ***************/
//*********************************************************/
// router.get('/notes/:id', (req, res) => {
//     if (req.body && req.params.id) {
//       console.info(`${req.method} request received to get a single note`);
//     }
//   // define active ntoe id
//   const noteId = req.params.id;

//   // Read Current Notes - parse 
//   const notes = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));

//   for (let i = 0; i < notes.length; i++) {
//     if (noteId === notes[i].id) {
//       res.json(noteId);
//       return (noteId);
//     }
//   }
//   res.json('Note not found');
// });





//*********************************************************/
// ************    POST:    Add New Note    ***************/
//*********************************************************/
router.post('/notes', (req, res) => {

  // Destructuring assignment for the title & text in req.body
  const { title, text } = req.body


  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id: uniqid.process(),
    };

    try {
      const notes = fs.readFileSync('db/db.json', 'utf-8')
      //convert string into objects
      const parsedNotes = JSON.parse(notes);
      console.log(parsedNotes);

      //add new note
      parsedNotes.push(newNote);

      //write note to db.json file
      fs.writeFileSync('db/db.json', JSON.stringify(parsedNotes, null, 4));
    }

    catch (error) {
      console.log(error);
      res.json(error)
    };
    res.json(newNote);


    console.log(newNote);
    // res.json(newNote);
  } else {
    res.json('Error in adding a note');
  }
});

module.exports = router;