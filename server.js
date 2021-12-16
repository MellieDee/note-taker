// const fs = require('fs');

// import the express package
const express = require('express');

// require data file db.json
const db = require('./db/db.json');

// define the port
const PORT = process.envPORT || 3001

// initialize app variable / server
const app =express();

// const apiRoutes = require('./routes/apiRoutes');



// Add a static route for index.html
app.get('/', (req, res) => {
  // `res.sendFile` is Express' way of sending a file
  // `__dirname` is a variable that always returns the directory that your server is running in
  res.sendFile(__dirname + '/index.html');
});


app.use(express.static('public'));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);


app.listen(3001, () => {
  console.log(`Note Server on port ${PORT}`);
});
