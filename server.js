// const fs = require('fs');
// const path = require('path');

// Define Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// Define the port
const PORT = process.env.PORT || 3001

// initialize Express / app variable / server
const app = express();



// *************   Middleware    ***************
// express.json() takes incoming POST data in the form of JSON and parses it into the req.body JavaScript object
app.use(express.json());

// express.urlencoded({extended: true}) 
//(built-in express method) takes incoming POST data & converts to key/value pairs
//Those pairs can be accessed in  req.body object (extended: T means there may be a sub array so look deep!!)
app.use(express.urlencoded({ extended: true }));

// writes static HTMl pages from public dir
app.use(express.static('public'));



//***********    Directs what the routes are for / and api queries and html pages   **************
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



//   ******* "Starts" the server    ************
app.listen(`${PORT}`, () => {
  console.log(`Note Server on port ${PORT}`);
});
