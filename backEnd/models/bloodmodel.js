// models/Blood.js

const db = require('../database/index');

const Blood = {
  getAll: (callback) => {
    db.query('SELECT * FROM blood', callback);
  },
  
  getById: (id, callback) => {
    db.query('SELECT * FROM blood WHERE id = ?', [id], callback);
  },
  
  create: (bloodData, callback) => {
    db.query('INSERT INTO blood SET ?', bloodData, callback);
  },
  
  update: (id, bloodData, callback) => {
    db.query('UPDATE blood SET ? WHERE id = ?', [bloodData, id], callback);
  },
  
  delete: (id, callback) => {
    db.query('DELETE FROM blood WHERE id = ?', [id], callback);
  }
};

module.exports = Blood;
