// Index.js File for apiRoutes (create to leave room for app to expand functionality)

const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes');

// tell router to use notesRoute.js via variable
router.use(noteRoutes)


module.exports = router