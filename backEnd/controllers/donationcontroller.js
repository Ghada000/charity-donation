// controllers/donationsController.js

const Donations = require('../models/donationmodel');

exports.createDonation = async (req, res) => {
    try {
        const { userId, campaignId, amount } = req.body;
        await Donations.create(userId, campaignId, amount);
        res.status(201).json({ message: 'Donation created successfully' });
    } catch (error) {
        console.error('Error creating donation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
