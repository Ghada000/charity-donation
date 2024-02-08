// models/donationsModel.js

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
    // Add other CRUD operations as needed
};

module.exports = Donations;
