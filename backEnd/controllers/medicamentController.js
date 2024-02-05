const model = require("../models/medicamentModel.js");
const getAllMedicaments = (req, res) => {
   model.getAllMedicaments((err, results) => {
      if (err) {
        console.error('Error fetching medicaments:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(results);
      }
    });
  };
  
  const getMedicamentById = (req, res) => {
    const id = req.params.id;
   model.getMedicamentById(id, (err, results) => {
      if (err) {
        console.error('Error fetching medicament by ID:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(results[0]);
      }
    });
  };
  
  const createMedicament = (req, res) => {
    const medicamentData = req.body;
   model.createMedicament(medicamentData, (err, results) => {
      if (err) {
        console.error('Error creating medicament:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Medicament created successfully', id: results.insertId });
      }
    });
  };
  
  const updateMedicament = (req, res) => {
    const id = req.params.id;
    const medicamentData = req.body;
   model.updateMedicament(id, medicamentData, (err, results) => {
      if (err) {
        console.error('Error updating medicament:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Medicament updated successfully' });
      }
    });
  };
  
  const deleteMedicament = (req, res) => {
    const id = req.params.id;
   model.deleteMedicament(id, (err, results) => {
      if (err) {
        console.error('Error deleting medicament:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Medicament deleted successfully' });
      }
    });
  };
  
  module.exports = {
    getAllMedicaments,
    getMedicamentById,
    createMedicament,
    updateMedicament,
    deleteMedicament,
  };