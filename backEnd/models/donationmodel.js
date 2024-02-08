// models/donationModel.js

const db = require('../database/index2');

const Donation = {
  create: async (userId, campaignId, amount) => {
    try {
      const [result] = await db.query('INSERT INTO Donations (userId, campaignId, amount) VALUES (?, ?, ?)', [userId, campaignId, amount]);
      return result.insertId;
    } catch (error) {
      throw new Error('Error creating donation: ' + error.message);
    }
  }
};

module.exports = Donation;
