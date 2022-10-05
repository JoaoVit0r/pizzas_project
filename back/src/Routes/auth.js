const { Router } = require("express");

const authRoutes = Router();

authRoutes.post("/login", (req, res) => {
  const { email, password } = req.body;
  return res.json({ id: "1", email, name: "fulano" });
});

module.exports = { authRoutes };
