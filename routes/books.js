const express = require('express');
const router = express.Router();

const controller = require('../controllers/booksControllers');

router.get('/', controller.getAllBooks);
router.post('/', controller.insertBook);

module.exports = router;