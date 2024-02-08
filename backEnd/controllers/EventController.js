const Event = require('../models/EventModel');

const EventController = {
  getAllEvent: (req, res) => {
    Event.getAll((err, results) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(200).json(results);
      }
    });
  },
  
  getEventById: (req, res) => {
    const id = req.params.id;
    Event.getone(id, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (!result) {
        res.status(404).json({ message: 'Event not found' });
      } else {
        res.status(200).json(result);
      }
    });
  },
  
  createEvent: (req, res) => {
    const EventData = req.body;
    Event.create(EventData, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'Event created successfully' });
      }
    });
  },
  
  updateEvent: (req, res) => {
    const id = req.params.id;
    const EventData = req.body;
    Event.update(id, EventData, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Event not found' });
      } else {
        res.status(200).json({ message: 'Event updated successfully' });
      }
    });
  },
  
  deleteEvent: (req, res) => {
    const id = req.params.id;
    Event.delete(id, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Event not found' });
      } else {
        res.status(200).json({ message: 'Event deleted successfully' });
      }
    });
  }
};

module.exports = EventController;
