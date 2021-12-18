// const fs = require('fs');
// const path = require('path');

// import the express package
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// define the port
const PORT = process.env.PORT || 3001

// initialize app variable / server
const app = express();



// Middleware
// express.json() takes incoming POST data in the form of JSON and parses it into the req.body JavaScript object
app.use(express.json());

// express.urlencoded({extended: true}) (built-in express method) takes incoming POST data & converts to key/value pairings to be accessed in  req.body object (extended means there may be a sub array so look deep!!)
app.use(express.urlencoded({ extended: true }));
// writes static HTMl pages from public dir
app.use(express.static('public'));



//directs what the routes are for / and api queries
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(`${PORT}`, () => {
  console.log(`Note Server on port ${PORT}`);
});
