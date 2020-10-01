const express = require('express');
const router = express.Router();

const controller = require('../controllers/booksControllers');

router.get('/', controller.getAllBooks);
router.post('/', controller.insertBook);
router.put('/:id', controller.updateBook);
router.delete('/:id', controller.deleteBook);

module.exports = router;