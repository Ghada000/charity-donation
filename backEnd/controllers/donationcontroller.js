// controllers/donationController.js

const Donation = require('../models/donationModel');

exports.createDonation = async (req, res) => {
  try {
    const { userId, campaignId, amount } = req.body;
    const donationId = await Donation.create(userId, campaignId, amount);
    res.status(201).json({ id: donationId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
