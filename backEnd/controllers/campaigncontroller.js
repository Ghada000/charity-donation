// controllers/campaignsController.js

const Campaigns = require('../models/campaignmodel');

exports.createCampaign = async (req, res) => {
    try {
        const { name, goal } = req.body;
        const campaignId = await Campaigns.create(name, goal);
        res.status(201).json({ message: 'Campaign created successfully', campaignId });
    } catch (error) {
        console.error('Error creating campaign:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaigns.getAll();
        res.status(200).json(campaigns);
    } catch (error) {
        console.error('Error getting campaigns:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
    
exports.getCampaignById = async (req, res) => {
    try {
        const { id } = req.params;
        const campaign = await Campaigns.getById(id);
        if (campaign.length === 0) {
            res.status(404).json({ message: 'Campaign not found' });
        } else {
            res.status(200).json(campaign[0]);
        }
    } catch (error) {
        console.error('Error getting campaign by id:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, goal } = req.body;
        await Campaigns.update(id, name, goal);
        res.status(200).json({ message: 'Campaign updated successfully' });
    } catch (error) {
        console.error('Error updating campaign:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        await Campaigns.delete(id);
        res.status(200).json({ message: 'Campaign deleted successfully' });
    } catch (error) {
        console.error('Error deleting campaign:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
