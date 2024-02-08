// controllers/donationController.js

const Donation = require('../models/donationmodel');
const db = require('../database/index');

async function updateCampaignProgress(campaignId) {
    try {
        const [rows] = await db.query('SELECT SUM(amount) AS totalAmount FROM Donations WHERE campaignId = ?', [campaignId]);
        const totalAmount = rows[0].totalAmount || 0;

        const [campaignRows] = await db.query('SELECT goal FROM Campaigns WHERE id = ?', [campaignId]);
        const campaignGoal = campaignRows[0].goal;

        const progressPercentage = (totalAmount / campaignGoal) * 100;

        await db.query('UPDATE Campaigns SET progress = ? WHERE id = ?', [progressPercentage, campaignId]);
    } catch (error) {
        console.error('Error updating campaign progress:', error);
        throw error;
    }
}

exports.createDonation = async (req, res) => {
    try {
        const { userId, campaignId, amount } = req.body;
        await Donation.create(userId, campaignId, amount);
        await updateCampaignProgress(campaignId);
        res.status(201).json({ message: 'Donation created successfully' });
    } catch (error) {
        console.error('Error creating donation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
