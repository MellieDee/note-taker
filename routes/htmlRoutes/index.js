const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Add a static route for index.html
router.get('/', (req, res) => {
  // `res.sendFile` is Express' way of sending a file
  // `__dirname` is a variable that always returns the directory that your server is running in
  res.sendFile(__dirname + '/index.html');
});

module.exports = router;