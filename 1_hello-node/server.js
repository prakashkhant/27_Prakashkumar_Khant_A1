const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve HTML file
app.use(express.static(path.join(__dirname, "public")));

// GET route
app.get("/gethello", (req, res) => {
    res.send("Hello NodeJS!!");
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});