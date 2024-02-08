// controllers/userssController.js

const Userss = require('../models/userssmodel');

exports.createUser = async (req, res) => {
    try {
        const { username, email, password, full_name, birthdate } = req.body;
        const userId = await Userss.create(username, email, password, full_name, birthdate);
        res.status(201).json({ message: 'User created successfully', userId });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await Userss.getAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Userss.getById(id);
        if (user.length === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user[0]);
        }
    } catch (error) {
        console.error('Error getting user by id:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password, full_name, birthdate } = req.body;
        await Userss.update(id, username, email, password, full_name, birthdate);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await Userss.delete(id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
