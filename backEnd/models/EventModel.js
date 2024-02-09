const connection = require("../database/index");

module.exports = {
  delete: (id, callback) => {
    const sql = "DELETE FROM events WHERE id=?";
    connection.query(sql, [id], (err, results) => {
      if (err) {
        callback(err, null);
      } else if (results.affectedRows === 0) {
        // Event not found, send a 404 response
        callback({ status: 404, message: 'Event not found' }, null);
      } else {
        callback(null, results);
      }
    });
  },
  getAll: (callback) => {
    const query = "SELECT * FROM events";
    connection.query(query, (err, results) => {
      callback(err, results);
    });
  },
  create: (data, callback) => {
    const sql = 'INSERT INTO events SET ?';
    connection.query(sql, data, (err, results) => {
      callback(err, results);
    });
  },
  update: (id, updatedData, callback) => {
    const sql = "UPDATE events SET ? WHERE id=?";
    connection.query(sql, [updatedData, id], (err, results) => {
      if (err) {
        console.error('Error during update:', err);
      }
      console.log('SQL Query:', sql, [updatedData, id]);
      callback(err, results);
    });
  },

  getone: (id, callback) => {
    const query = "SELECT * FROM events where id=?";
    connection.query(query, [id], (err, results) => {
      callback(err, results);
    });
  }
};
