const Children = require('../models/ChildrenModel');

exports.create = (req, res) => {
  const image_url = req.body.image_url; // Change destructuring to access imageUrl directly
  Children.create(image_url, (err, id) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(201).json({ id });
  });
};

exports.getAll = (req, res) => {
  Children.getAll((err, children) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(children);
  });
};
