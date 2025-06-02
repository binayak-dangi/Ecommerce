const express = require('express');
const { postCategory } = require('../controllers/categoryController');
const router = express.Router();

// Route to create a new category
router.post('/postcategory', postCategory);


// Export the router to be used in the main app
module.exports= router;