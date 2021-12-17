const fs = require('fs');
const uniqid = require('uniqid');

const router = require('express').Router();

// require data file db.json
const notes = require('../../db/db.json');
const { createNewNote, findById } = require('../../lib/notes');


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
router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  res.json(result)
  // if (notes) {
  //   res.json(notes);
  //   console.log(notes);
  // } else {
  //  res.status(404).send('Something is wrong');
  // }
})


// // to POST a new note


router.post('/notes', (req, res) => {
  //req.body is where incoming data will go
  
  // create uniqId
  req.body.id = uniqid.process();
  res.json(req.body);
  console.log(req.json(req.body));
})


module.exports = router