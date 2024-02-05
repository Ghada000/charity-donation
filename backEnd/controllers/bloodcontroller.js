// controllers/bloodController.js

const Blood = require('../models/bloodmodel');

const bloodController = {
  getAllBlood: (req, res) => {
    Blood.getAll((err, results) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(200).json(results);
      }
    });
  },
  
  getBloodById: (req, res) => {
    const id = req.params.id;
    Blood.getById(id, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (!result) {
        res.status(404).json({ message: 'Blood not found' });
      } else {
        res.status(200).json(result);
      }
    });
  },
  
  createBlood: (req, res) => {
    const bloodData = req.body;
    Blood.create(bloodData, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'Blood created successfully' });
      }
    });
  },
  
  updateBlood: (req, res) => {
    const id = req.params.id;
    const bloodData = req.body;
    Blood.update(id, bloodData, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Blood not found' });
      } else {
        res.status(200).json({ message: 'Blood updated successfully' });
      }
    });
  },
  
  deleteBlood: (req, res) => {
    const id = req.params.id;
    Blood.delete(id, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Blood not found' });
      } else {
        res.status(200).json({ message: 'Blood deleted successfully' });
      }
    });
  }
};

module.exports = bloodController;
