// controllers/userssController.js

const Userss = require('../models/userssmodel');

exports.createUser = async (req, res) => {
    try {
        const { username, email, password, full_name, birthdate } = req.body;
        await Userss.create(username, email, password, full_name, birthdate);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
 