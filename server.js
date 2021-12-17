// const fs = require('fs');

// import the express package
const express = require('express');
const apiRoutes = require('./routes/apiRoutes/noteRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// define the port
const PORT = process.env.PORT || 3002

// initialize app variable / server
const app =express();




app.use(express.static('public'));


//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(3002, () => {
  console.log(`Note Server on port ${PORT}`);
});
