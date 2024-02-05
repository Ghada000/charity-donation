const express = require('express');
const controller = require('../controllers/hair.js');
const routes = express.Router();

routes.get('/getAll', controller.getAlldata);
routes.post('/addOne', controller.addOnedata); 
routes.put('/update/:id', controller.update);  
routes.delete('/delete/:id', controller.DELETE); 

module.exports = routes;