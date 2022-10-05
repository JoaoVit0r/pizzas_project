const express = require("express");
const bodyParser = require("body-parser");

const { authRoutes } = require("./Routes/auth");
const { usersRoutes } = require("./Routes/users");

const app = express();

app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.json({ message: "I'm live" });
});

app.use(authRoutes)
app.use(usersRoutes)


app.listen(8000);
