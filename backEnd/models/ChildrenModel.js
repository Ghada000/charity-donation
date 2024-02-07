const db = require('../database/index');

function saveImageUrl(imageUrl, callback) {
    const sql = 'INSERT INTO children (image_url) VALUES (?)';
    connection.query(sql, [imageUrl], (err, result) => {
      if (err) {
        console.error('Error saving image URL:', err);
        callback(err);
        return;
      }
      console.log('Image URL saved to database');
      callback(null, result);
    });
  }
  
  function getImageUrl(callback) {
    const sql = 'SELECT image_url FROM children ORDER BY id DESC LIMIT 1';
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching image URL:', err);
        callback(err);
        return;
      }
      if (result.length === 0) {
        callback(null, null);
        return;
      }
      const imageUrl = result[0].image_url;
      callback(null, imageUrl);
    });
  }
  
  module.exports = {
    saveImageUrl,
    getImageUrl
  };