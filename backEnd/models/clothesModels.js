const connection = require("../database/index.js");


module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM `clothes`';
    connection.query(sql, function(error, results, fields) {
      callback(error, results);
    });
  },

  postClothes: function(postClothes, callback) {
    const sql = 'INSERT INTO `clothes` SET ?';
    connection.query(sql, postClothes, function(error, results, fields) {
      callback(error, results);
    });
  },

  putClothes: function(id, myData, callback) {
    const sql = 'UPDATE `clothes` SET ? WHERE id = ?';
  
    connection.query(sql, [myData, id], function(error, results, fields) {
      callback(error, results);
    });
  },
    deleteClothes: function(id, callback) {
    const sql = 'DELETE FROM `clothes` WHERE id = ?';
    connection.query(sql, id, function(error, results, fields) {
      callback(error, results);
    });
  }
}



module.exports={}