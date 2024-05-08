// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Assume we have a file for database connection

const app = express();
const port = 3000;

app.use(bodyParser.json());

// API endpoints for user operations
app.post('/api/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);
        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
