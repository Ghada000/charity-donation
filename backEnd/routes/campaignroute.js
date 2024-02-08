// routes/campaignRoutes.js

const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaigncontroller'); // Corrected filename

// GET all campaigns
router.get('/', campaignController.getAllCampaigns);

// POST create a new campaign
router.post('/', campaignController.createCampaign);

// PUT update an existing campaign
router.put('/:id', campaignController.updateCampaign);

// DELETE delete a campaign
router.delete('/:id', campaignController.deleteCampaign);

module.exports = router;
