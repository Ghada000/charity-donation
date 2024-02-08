// routes/donationRoutes.js

const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationcontroller');

// POST create a new donation
router.post('/', donationController.createDonation);

module.exports = router;
