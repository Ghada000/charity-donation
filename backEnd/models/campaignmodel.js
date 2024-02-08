// models/campaignsModel.js

const db = require('../database/index2');

const Campaigns = {
    create: async (name, goal) => {
        try {
            await db.query('INSERT INTO Campaigns (name, goal) VALUES (?, ?)', [name, goal]);
            return;
        } catch (error) {
            console.error('Error creating campaign:', error);
            throw error;
        }
    },
    getAllCampaigns: async () => { // Define the method to get all campaigns
        try {
            const campaigns = await db.query('SELECT * FROM Campaigns');
            return campaigns;
        } catch (error) {
            console.error('Error getting all campaigns:', error);
            throw error;
        }
    },
    // Method to get total amount donated for a campaign
    getTotalDonatedForCampaign: async (campaignId) => {
        try {
            const result = await db.query('SELECT SUM(amount) AS totalDonated FROM Donations WHERE campaignId = ?', [campaignId]);
            return result[0].totalDonated || 0;
        } catch (error) {
            console.error('Error getting total donated for campaign:', error);
            throw error;
        }
    },
    // Add other CRUD operations as needed
};

module.exports = Campaigns;
