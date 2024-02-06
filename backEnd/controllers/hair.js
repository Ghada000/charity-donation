const model = require("../models/hair");

module.exports = {
  getAllData: (req, res) => {
    model.getAll((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(data);
      }
    });
  },
  addOneData: (req, res) => {
    const newData = req.body;
    model.addOne(newData, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  updateData: (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    model.update(id, updatedData, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  deleteData: (req, res) => {
    const id = req.params.id;
    model.delete(id, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  }
};