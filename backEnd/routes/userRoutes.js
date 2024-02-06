// userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const { authenticateJWT } = require('../controllers/userController');

const router = express.Router();

// Register a new user
router.post('/register', (req, res) => {
  userController.registerUser(req, res);
});

// Log in user
router.post('/login', (req, res) => {
  userController.loginUser(req, res);
});

// Get user profile with JWT authentication
router.get('/profile', authenticateJWT, (req, res) => {
  userController.getUserProfile(req, res);
});

// Update user profile with JWT authentication
router.put('/profile/update', authenticateJWT, (req, res) => {
  userController.updateUserProfile(req, res);
});

// Delete user account without JWT authentication for testing purposes
router.delete('/profile/delete', (req, res) => {
    userController.deleteUser(req, res);
  });

module.exports = router;
