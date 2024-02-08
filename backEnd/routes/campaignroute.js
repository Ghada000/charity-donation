// routes/campaignsRoutes.js

const express = require('express');
const router = express.Router();
const campaignsController = require('../controllers/campaigncontroller');

// POST create a new campaign
router.post('/', campaignsController.createCampaign);

// GET retrieve all campaigns with progress
router.get('/', campaignsController.getCampaigns);

module.exports = router;
