const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.get("/users", (req, res) => {
  return res.json({ id: "1", name: "fulano" });
});

module.exports = { usersRoutes };
