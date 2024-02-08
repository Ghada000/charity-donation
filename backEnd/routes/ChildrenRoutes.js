const express = require('express');
const childrenController = require('../controllers/childrenControllers');

const router = express.Router();

router.post('/add', childrenController.create);
router.get('/get', childrenController.getAll);

module.exports = router;
