// routes/donationsRoutes.js

const express = require('express');
const router = express.Router();
const donationsController = require('../controllers/donationcontroller');

// POST create a new donation
router.post('/', donationsController.createDonation);

module.exports = router;
