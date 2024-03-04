// routes/authRoutes.js

const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const router = express.Router();

// Route to handle user signup
router.post('/signup', async (req, res) => {
    try {
        // Extract username and password from request body
        const { username, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database
        const newUser = await User.create({
            username,
            password: hashedPassword
        });

        // Set user session
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.status(200).json(newUser);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Route to handle user login
router.post('/login', async (req, res) => {
    try {
        // Extract username and password from request body
        const { username, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ where: { username } });

        // If user doesn't exist or password is incorrect, send error response
        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(400).json({ message: 'Incorrect username or password' });
            return;
        }

        // Set user session
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.logged_in = true;
            res.status(200).json({ user, message: 'Login successful' });
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to handle user logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
