require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json()); 


app.get('/signup', (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;


    if (!username) {
        return res.status(400).json({ error: "Username cannot be empty" });
    }
    if (!email) {
        return res.status(400).json({ error: "Email cannot be empty" });
    }
    if (!password) {
        return res.status(400).json({ error: "Password cannot be empty" });
    }
    if (password.length < 8 || password.length > 16) {
        return res.status(400).json({ error: "Password length should be greater than 8 or less than or equal to 16" });
    }


    return res.status(201).json({ message: "User registered successfully", user: { username, email, dateOfBirth } });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
