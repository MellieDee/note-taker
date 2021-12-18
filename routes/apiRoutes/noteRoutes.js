const fs = require('fs');
const router = require('express').Router();
const uniqid = require('uniqid');
const findById = require('../../lib/notes');



// To GET notes data
router.get('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
  if (notes) {
    // console.log('notes are: ' + JSON.stringify(notes));
    res.json(notes);
    // console.log(notes);
  } else {
    res.status(404).send('Something is wrong');
  }
})



// GET by ID
router.get('/notes/:id', (req, res) => {
  // const notes = fs.readFileSync('db/db.json', 'utf-8')
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// GET by ID
// router.get('/note/:id', (req, res) => {
//   const notes = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));

//   console.log(notes);

//   if (req.params.id) {
//     // Log  request to the terminal
//     // console.info(`${req.method} request received to find a note`);

//     // Log the request body
//     console.info(req.params.id);

//     const noteId = req.params.id;
//     // const requestedNote = req.body.upvote;

//     for (let i = 0; i < notes.length; i++) {
//       const currentNote = notes[i];
//       console.log(currentNote.note_id);
//       if (currentNote == noteId) {
//         res.json(currentNote);
//       }
//     }
//     res.json('Review ID not found');
//   }
// });



// POST to Add New Note
router.post('/notes', (req, res) => {

  // Destructuring assignment for the items in req.body
  const title = req.body.title;
  const text = req.body.text;

  // If all the required properties are present
  if (title, text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uniqid.process(),
    };

    const response = {
      status: 'success',
      body: newNote,
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
    res.json(response);


    console.log(newNote);
    // res.json(newNote);
  } else {
    res.json('Error in adding a note');
  }
});

module.exports = router
