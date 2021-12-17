const fs = require('fs');
const router = require('express').Router();

// require data file db.json
const notes = './db/db.json';


// To GET notes data
router.get('/notes', (req, res) => {
  let results = notes;
   if (results) {
     res.json(results);
     console.log(results);
   } else {
    res.status(404).send('Something is wrong');
   }
})


// to POST a new note

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be (req.body is the content)
    req.body.id = notes.length.toString();
    console.log(req.body);
    req.json(req.body);

})


module.exports = router