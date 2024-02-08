// routes/campaignsRoutes.js

const express = require('express');
const router = express.Router();
const campaignsController = require('../controllers/campaigncontroller');

// POST create a new campaign
router.post('/', campaignsController.createCampaign);

// GET all campaigns
router.get('/', campaignsController.getAllCampaigns);

// GET campaign by id
router.get('/:id', campaignsController.getCampaignById);

// PUT update campaign
router.put('/:id', campaignsController.updateCampaign);

// DELETE campaign
router.delete('/:id', campaignsController.deleteCampaign);

module.exports = router;
