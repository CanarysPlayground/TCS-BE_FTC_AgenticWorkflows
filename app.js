const express = require('express');
const app = express();

const PORT = 3000;

// Intentional code smell for SonarQube
var message = "Welcome to Release Application";

app.get('/', (req, res) => {
    res.send(message);
});

// Intentional SAST issue for demonstration
app.get('/user', (req, res) => {
    const username = req.query.name;
    res.send("Hello " + username);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
