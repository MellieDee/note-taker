const path = require('path');
const router = require('express').Router();

router.get('/notess', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});