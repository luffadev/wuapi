const express = require('express');
const router = express.Router();

const controller = require('../controllers/apiController');

router.post('/', controller.insertBook);


module.exports = router;