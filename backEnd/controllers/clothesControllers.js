
const clothesModel = require("../models/clothesModels");

const ClothesControllers = {
  getAllClothes: (req, res) => {
    clothesModel.getAll((err, results) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(200).json(results);
      }
    });
  },

  createClothes: (req, res) => {
    const clothesData = req.body;
    clothesModel.createClothes(clothesData, (err, result) => {
      if (err) {
        console.error(err); // Log the error
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'Clothes created successfully' });
      }
    });
  },
  

  updateClothes: (req, res) => {
    const id = req.params.id;
    const clothesData = req.body;
    clothesModel.updateClothes(id, clothesData, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Clothes not found' });
      } else {
        res.status(200).json({ message: 'Clothes updated successfully' });
      }
    });
  },

  deleteClothes: (req, res) => {
    const id = req.params.id;
    clothesModel.deleteClothes(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Clothes not found' });
      } else {
        res.status(200).json({ message: 'Clothes deleted successfully' });
      }
    });
  }
};

module.exports = ClothesControllers;
