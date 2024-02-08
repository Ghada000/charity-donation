// controllers/donationsController.js

const Donations = require('../models/donationmodel');
const Campaigns = require('../models/campaignmodel');


exports.createDonation = async (req, res) => {
    try {
        const { userId, campaignId, amount } = req.body;

        // Validate donation amount
        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            throw new Error('Invalid donation amount');
        }

        await Donations.create(userId, campaignId, parsedAmount);
        await Campaigns.updateProgress(campaignId, parsedAmount); // Pass the parsed amount here

        res.status(201).json({ message: 'Donation created successfully' });
    } catch (error) {
        console.error('Error creating donation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getAllDonations = async (req, res) => {
    try {
        const donations = await Donations.getAll();
        res.status(200).json(donations);
    } catch (error) {
        console.error('Error getting donations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getDonationById = async (req, res) => {
    try {
        const { id } = req.params;
        const donation = await Donations.getById(id);
        if (donation.length === 0) {
            res.status(404).json({ message: 'Donation not found' });
        } else {
            res.status(200).json(donation[0]);
        }
    } catch (error) {
        console.error('Error getting donation by id:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateDonation = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, campaignId, amount } = req.body;
        await Donations.update(id, userId, campaignId, amount);
        res.status(200).json({ message: 'Donation updated successfully' });
    } catch (error) {
        console.error('Error updating donation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteDonation = async (req, res) => {
    try {
        const { id } = req.params;
        await Donations.delete(id);
        res.status(200).json({ message: 'Donation deleted successfully' });
    } catch (error) {
        console.error('Error deleting donation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
