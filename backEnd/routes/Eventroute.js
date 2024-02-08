const express = require('express');
const controller = require('../controllers/EventController');
const Eventrout = express.Router();

Eventrout.get('/getall', controller.getAllEvent);
Eventrout.post('/add', controller.createEvent);
Eventrout.put('/:id', controller.updateEvent);
Eventrout.delete('/:id', controller.deleteEvent);

module.exports = Eventrout;