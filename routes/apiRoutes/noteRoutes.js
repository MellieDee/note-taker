const fs = require('fs');
const uniqid = require('uniqid');

const router = require('express').Router();

// require data file db.json
const notes = require('../../db/db.json');


// To GET notes data
router.get('/notes', (req, res) => {

  if (notes) {
    res.json(notes);
    console.log(notes);
  } else {
    res.status(404).send('Something is wrong');
  }
})


// GET by ID
// router.get('/notes/:id', (req, res) => {
//   const result = findById(req.params.id, notes);
//   res.json(result)
//   // if (notes) {
//   //   res.json(notes);
//   //   console.log(notes);
//   // } else {
//   //  res.status(404).send('Something is wrong');
//   // }
// })




// POST to Add New Note
router.post('/notes', (req, res) => {

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uniqid.process(),
    };

    fs.readFile('../../db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        //convert string into objects
        const parsedNotes = JSON.parse(data);

        //add new note
        parsedNotes.push(newNote);

        //write note to db.json file
        fs.writeFile(
          '../../db/db.json',
          //db/db.json
        
          JSON.stringify(parsedNotes, null, 3),
          //maybe add err handling??
        );
      }
    });

    // const response = {
    //   status: 'success',
    //   body: newNote,
    // };

    console.log(newNote);
    res.json(newNote);
  } else {
    res.json('Error in adding a note');
  }
});




// router.post('/notes', (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = uniqid.process();

//   // add animal to json file and animals array in this function
//   const note = createNewNote(req.body, notes);

//   res.json(note);
// });






// router.post('/notes', (req, res) => {
//   //req.body is where incoming data will go
  
//   // create uniqId
//   req.body.id = uniqid.process();
//   res.json(req.body);
//   console.log(req.json(req.body));
// })


module.exports = router