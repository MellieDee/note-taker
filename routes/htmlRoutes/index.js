const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Add a static route for index.html
router.get('/', (req, res) => {
  // `__dirname` is a variable - directory that your server is running in
  res.sendFile(__dirname + '/index.html');
});

// Add a static route for any other misc route leads to index.html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});


module.exports = router;