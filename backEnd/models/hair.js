const connection = require("../database/index");

module.exports = {
  delete: (id, callback) => {
    const sql = "DELETE FROM hair WHERE donation_id=?";
    connection.query(sql, [id], (err, results) => {
      callback(err, results);
    });
  },
  getAll: (callback) => {
    const query = "SELECT * FROM hair";
    connection.query(query, (err, results) => {
      callback(err, results);
    });
  },
  addOne: (data, callback) => {
    const sql = 'INSERT INTO hair SET ?';
    connection.query(sql, data, (err, results) => {
      callback(err, results);
    });
  },
  update: (id, updatedData, callback) => {
    const sql = "UPDATE hair SET ? WHERE donation_id=?";
    connection.query(sql, [updatedData, id], (err, results) => {
      callback(err, results);
    });
  }
};