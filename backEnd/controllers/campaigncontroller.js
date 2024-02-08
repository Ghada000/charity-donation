// controllers/campaignsController.js

const Campaigns = require('../models/campaignmodel');

exports.createCampaign = async (req, res) => {
    try {
        const { name, goal } = req.body;
        await Campaigns.create(name, goal);
        res.status(201).json({ message: 'Campaign created successfully' });
    } catch (error) {
        console.error('Error creating campaign:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getCampaigns = async (req, res) => {
    try {
        // Retrieve all campaigns from the database
        const campaigns = await Campaigns.getAllCampaigns(); // Corrected method name
        
        // Calculate progress for each campaign
        const campaignsWithProgress = await Promise.all(campaigns.map(async campaign => {
            const totalDonated = await Campaigns.getTotalDonatedForCampaign(campaign.id);
            const progress = (totalDonated / campaign.goal) * 100;
            return { ...campaign, progress };
        }));
        
        res.status(200).json(campaignsWithProgress);
    } catch (error) {
        console.error('Error getting campaigns:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Add other controller methods as needed
