const fs = require('fs');
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


// to POST a new note

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be (req.body is the content)
    req.body.id = notes.length.toString();
    req.json(req.body);
    console.log(req.json(req.body));
})


module.exports = router