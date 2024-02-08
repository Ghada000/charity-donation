// models/campaignModel.js

const db = require('../database/index2');

const Campaign = {
  getAll: async () => {
    try {
      const [rows, fields] = await db.query('SELECT * FROM Campaigns');
      return rows;
    } catch (error) {
      throw new Error('Error getting campaigns: ' + error.message);
    }
  },

  create: async (name, goal, progress = 0) => {
    try {
      const [result] = await db.query('INSERT INTO Campaigns (name, goal, progress) VALUES (?, ?, ?)', [name, goal, progress]);
      return result.insertId;
    } catch (error) {
      throw new Error('Error creating campaign: ' + error.message);
    }
  },

  update: async (id, name, goal) => {
    try {
      await db.query('UPDATE Campaigns SET name=?, goal=? WHERE id=?', [name, goal, id]);
      return id;
    } catch (error) {
      throw new Error('Error updating campaign: ' + error.message);
    }
  },

  delete: async (id) => {
    try {
      await db.query('DELETE FROM Campaigns WHERE id=?', [id]);
      return id;
    } catch (error) {
      throw new Error('Error deleting campaign: ' + error.message);
    }
  }
};

module.exports = Campaign;
