const db = require('../database/index2');

// Create a new user
exports.create = async (email, password) => {
    try {
        const [result] = await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
        return { user_id: result.insertId, email };
    } catch (error) {
        throw error;
    }
};

// Get user by email
exports.getByEmail = async (email) => {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    } catch (error) {
        throw error;
    }
};
