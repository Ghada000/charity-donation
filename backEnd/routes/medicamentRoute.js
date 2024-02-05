// routes/medicament.js
const express = require('express');
const controller = require('../controllers/medicamentController.js');
const routes = express.Router();

routes.get('/get', controller.getAllMedicaments);
routes.get('/:id', controller.getMedicamentById);
routes.post('/add', controller.createMedicament);
routes.put('/:id', controller.updateMedicament);
routes.delete('/:id', controller.deleteMedicament);

module.exports = routes;
