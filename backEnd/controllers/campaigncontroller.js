// controllers/campaignController.js

const Campaign = require('../models/campaignmodel');

exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.getAll();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCampaign = async (req, res) => {
  try {
    const { name, goal } = req.body;
    const campaignId = await Campaign.create(name, goal);
    res.status(201).json({ id: campaignId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, goal } = req.body;
    await Campaign.update(id, name, goal);
    res.json({ id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    await Campaign.delete(id);
    res.json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
