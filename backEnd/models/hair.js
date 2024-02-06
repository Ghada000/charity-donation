const connection = require("../database/index");

module.exports = {
  DELETE: (id, callback) => {
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
    const sql = 'INSERT INTO hair SET video_url=?, video_description=?, picture1_title=?, picture1_description=?, picture1_image_url=?,';
    const values = [data.video_url, data.video_description, data.picture1_title, data.picture1_description, data.picture1_image_url];
    connection.query(sql, values, (err, results) => {
      callback(err, results);
    });
  },
  update: (id, updatedData, callback) => {
    const sql = "UPDATE hair SET video_url=?, video_description=?, picture1_title=?, picture1_description=?, picture1_image_url=?, WHERE donation_id=?";
    const values = [updatedData.video_url, updatedData.video_description, updatedData.picture1_title, updatedData.picture1_description, updatedData.picture1_image_url, id];
    connection.query(sql, values, (err, results) => {
      callback(err, results);
    });
  }
};
