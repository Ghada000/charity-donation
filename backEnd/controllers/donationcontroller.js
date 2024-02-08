const donationModel = require("../models/donationModel");

function donate(req, res) {
  const { amount, donorName } = req.body;

  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: 'Invalid donation amount' });
  }

  donationModel.createDonation(amount, donorName, (err) => {
    if (err) {
      console.error('Error making donation:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    donationModel.getTotalDonation((err, result) => {
      if (err) {
        console.error('Error getting total donation amount:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      const totalDonation = result[0].totalDonation || 0;
      const progressPercentage = (totalDonation / 1000000) * 100;

      res.json({ totalDonation, progressPercentage });
    });
  });
}
function getTotalDonation(req, res) {
    donationModel.getTotalDonation((err, result) => {
      if (err) {
        console.error('Error getting total donation amount:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      const totalDonation = result[0].totalDonation || 0;
      res.json({ totalDonation });
    });
  }
  
  module.exports = { donate, getTotalDonation };