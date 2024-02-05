const express = require('express');
const controller = require('../controllers/clothesControllers.js');
const routes = express.Router();

routes.get('/getall', controller.getAllClothes);
routes.post('/add', controller.createClothes);
routes.put('/:id', controller.updateClothes);
routes.delete('/:id', controller.deleteClothes);

module.exports = routes;
