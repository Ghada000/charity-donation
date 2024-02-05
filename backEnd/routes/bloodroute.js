// routes/bloodRoutes.js

const express = require('express');
const bloodController = require('../controllers/bloodcontroller');

const router = express.Router();

router.get('/get', bloodController.getAllBlood);
router.get('/:id', bloodController.getBloodById);
router.post('/', bloodController.createBlood);
router.put('/:id', bloodController.updateBlood);
router.delete('/:id', bloodController.deleteBlood);

module.exports = router;
