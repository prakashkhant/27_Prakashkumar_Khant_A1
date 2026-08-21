const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href="/google">Go to Google</a>
    `);
});

// Google route
app.get("/google", async (req, res) => {
    try {
        const response = await fetch("https://www.google.com");
        const data = await response.text();

        res.send(data);

    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});