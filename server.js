const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3001;
const JWT_SECRET = "fhloston-paradise-secret";

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const users = [
  { id: 1, email: "korben@fhloston.com", password: "multipass" },
  { id: 2, email: "leeloo@fhloston.com", password: "leeloo123" },
  { id: 3, email: "ruby@fhloston.com", password: "greenrocks" },
];

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token, user: { id: user.id, email: user.email } });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
