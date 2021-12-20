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

// router.get('/notes/:id', function (req, res) {
//   const notes = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
// });




//*********************************************************/
// ************      DELETE:    Note        ***************/
//*********************************************************/

router.delete('/notes/:id', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));

  // define active note id
  let noteId = req.params.id;

  for (let i = 0; i < notes.length; i++) {
    if (noteId === notes[i].id) {
      // use splice to remove file, and not leave undefinied 'holes'
      notes.splice([i], 1);

      //write note to db.json file
      fs.writeFileSync('db/db.json', JSON.stringify(notes, null, 4));

      res.json(notes);
    }
  }
});



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
  } else {
    res.json('Error in adding a note');
  }
});

module.exports = router;