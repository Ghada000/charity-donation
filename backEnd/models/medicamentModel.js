// models/medicament.js
const connection = require("../database/index.js");

const getAllMedicaments = (callback) => {
  connection.query("SELECT * FROM medicaments", callback);
};

const getMedicamentById = (id, callback) => {
  connection.query("SELECT * FROM medicaments WHERE id=?", [id], callback);
};

const createMedicament = (medicamentData, callback) => {
  const { name, image_url, category, description } = medicamentData;
  connection.query(
    "INSERT INTO medicaments (name, image_url, category, description) VALUES (?, ?, ?, ?)",
    [name, image_url, category, description],
    callback
  );
};

const updateMedicament = (id, medicamentData, callback) => {
  const { name, image_url, category, description } = medicamentData;
  connection.query(
    "UPDATE medicaments SET name=?, image_url=?, category=?, description=? WHERE id=?",
    [name, image_url, category, description, id],
    callback
  );
};

const deleteMedicament = (id, callback) => {
  connection.query("DELETE FROM medicaments WHERE id=?", [id], callback);
};

module.exports = {
  getAllMedicaments,
  getMedicamentById,
  createMedicament,
  updateMedicament,
  deleteMedicament,
};
