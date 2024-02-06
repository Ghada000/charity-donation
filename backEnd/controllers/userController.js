const userModel = require('../models/userModel');

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.create(email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await userModel.getByEmail(email);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
