// models/donationmodel.js

const db = require('../database/index2');

const Donations = {
    create: async (userId, campaignId, amount) => {
        try {
            await db.query('INSERT INTO Donations (userId, campaignId, amount) VALUES (?, ?, ?)', [userId, campaignId, amount]);
            return;
        } catch (error) {
            console.error('Error creating donation:', error);
            throw error;
        }
    },

    getAll: async () => {
        try {
            const result = await db.query('SELECT * FROM Donations');
            return result;
        } catch (error) {
            console.error('Error getting donations:', error);
            throw error;
        }
    },

    getTotalDonationAmountForCampaign: async (campaignId) => {
        try {
            const result = await db.query('SELECT SUM(amount) AS total FROM Donations WHERE campaignId = ?', [campaignId]);
            return result[0].total || 0; // Return 0 if there are no donations
        } catch (error) {
            console.error('Error getting total donation amount for campaign:', error);
            throw error;
        }
    }
};

module.exports = Donations;
