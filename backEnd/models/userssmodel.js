// models/userssModel.js

const db = require('../database/index2');

const Userss = {
    create: async (username, email, password, full_name, birthdate) => {
        try {
            const result = await db.query('INSERT INTO Userss (username, email, password, full_name, birthdate) VALUES (?, ?, ?, ?, ?)', [username, email, password, full_name, birthdate]);
            return result.insertId;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },
    getAll: async () => {
        try {
            const result = await db.query('SELECT * FROM Userss');
            return result;
        } catch (error) {
            console.error('Error getting users:', error);
            throw error;
        }
    },
    getById: async (id) => {
        try {
            const result = await db.query('SELECT * FROM Userss WHERE id = ?', [id]);
            return result;
        } catch (error) {
            console.error('Error getting user by id:', error);
            throw error;
        }
    },
    update: async (id, username, email, password, full_name, birthdate) => {
        try {
            await db.query('UPDATE Userss SET username = ?, email = ?, password = ?, full_name = ?, birthdate = ? WHERE id = ?', [username, email, password, full_name, birthdate, id]);
            return;
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    },
    delete: async (id) => {
        try {
            await db.query('DELETE FROM Userss WHERE id = ?', [id]);
            return;
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
};

module.exports = Userss;
