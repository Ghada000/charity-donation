const connection = require("../database/index");



function createDonation(amount, donorName, callback) {
  connection.query('INSERT INTO donations (amount, donor_name) VALUES (?, ?)', [amount, donorName], callback);
}

function getTotalDonation(callback) {
  connection.query('SELECT SUM(amount) AS totalDonation FROM donations', callback);
}

module.exports = { createDonation, getTotalDonation };
