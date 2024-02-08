const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

router.post('/donate', donationController.donate);
router.get('/gett', donationController.getTotalDonation);
module.exports = router;
