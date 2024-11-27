const express = require('express');
const jwt = require('jsonwebtoken');
const { User, Teacher} = require('../db/db'); // Assuming you need to import the User model
const router = express.Router();
const jwt_secret="love"
// ... existing routes ...

// Sign-in route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ id: user._id }, jwt_secret, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Sign-in error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Sign-up route
router.post('/signup', async (req, res) => {
    const { username, password, email,childName,age,parentName } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = new User({ username, password, email,childName,age,parentName  });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// ... existing routes ...

module.exports = router;