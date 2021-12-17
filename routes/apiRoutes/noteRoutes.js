const fs = require('fs');
const router = require('express').Router();

// require data file db.json
const notes = './db/db.json';

router.get('/notes', (req, res) => {
  let results = notes;
   if (req.query) {
     res
   }
})

module.exports = router