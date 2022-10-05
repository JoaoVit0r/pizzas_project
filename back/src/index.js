const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.json({ message: "I'm live" });
});

app.listen(8000);
