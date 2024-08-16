const express = require("express");

// Constants
const PORT = process.env.PORT || 80;
const HOST = "0.0.0.0";

// App
const app = express();
const codename = "Smash Mouth"
app.get("/", (req, res) => res.send(`Hello ${codename}`));

let server = app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

module.exports = server;
