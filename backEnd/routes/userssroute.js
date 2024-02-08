// routes/userssRoutes.js

const express = require('express');
const router = express.Router();
const userssController = require('../controllers/usersscontroller');

// POST create a new user
router.post('/', userssController.createUser);

module.exports = router;
