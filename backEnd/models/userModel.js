const db = require('../database/index2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key_here';

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
    return token;
};

exports.create = async (email, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
        return { user_id: result.insertId, email };
    } catch (error) {
        throw error;
    }
};

exports.getByEmail = async (email) => {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    } catch (error) {
        throw error;
    }
};
