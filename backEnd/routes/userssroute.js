// routes/userssRoutes.js

const express = require('express');
const router = express.Router();
const userssController = require('../controllers/usersscontroller');

// POST create a new user
router.post('/', userssController.createUser);

// GET all users
router.get('/', userssController.getAllUsers);

// GET user by id
router.get('/:id', userssController.getUserById);

// PUT update user
router.put('/:id', userssController.updateUser);

// DELETE user
router.delete('/:id', userssController.deleteUser);

module.exports = router;
