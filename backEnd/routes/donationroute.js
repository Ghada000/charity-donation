// routes/donationsRoutes.js

const express = require('express');
const router = express.Router();
const donationsController = require('../controllers/donationcontroller');

// POST create a new donation
router.post('/', donationsController.createDonation);

// GET all donations
router.get('/', donationsController.getAllDonations);

// GET donation by id
router.get('/:id', donationsController.getDonationById);

// PUT update donation
router.put('/:id', donationsController.updateDonation);

// DELETE donation
router.delete('/:id', donationsController.deleteDonation);

module.exports = router;
