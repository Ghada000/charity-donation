const express = require('express');
const controller = require('../controllers/hair');
const routes = express.Router();

routes.get('/getAll', controller.getAllData);
routes.post('/addOne', controller.addOneData); 
routes.put('/update/:id', controller.updateData);  
routes.delete('/delete/:id', controller.deleteData); 

module.exports = routes