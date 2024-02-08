// models/userssModel.js

const db = require('../database/index2');

const Userss = {
    create: async (username, email, password, full_name, birthdate) => {
        try {
            await db.query('INSERT INTO Userss (username, email, password, full_name, birthdate) VALUES (?, ?, ?, ?, ?)', [username, email, password, full_name, birthdate]);
            return;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },
    // Add other CRUD operations as needed
};

module.exports = Userss;
