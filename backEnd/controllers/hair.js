const model = require("../models/hair");

module.exports = {
  getAlldata: (req, res) => {
    model.getAll((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(data);
      }
    });
  },
  addOnedata: (req, res) => {
    const newdata = req.body;
    model.addOne(newdata, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  },
  update: (req, res) => {
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
  DELETE: (req, res) => {
    model.DELETE(req.params.id, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  }
};
