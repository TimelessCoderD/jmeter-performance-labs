const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let sessions = {};
let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Headphones" },
  { id: 3, name: "Camera" },
  { id: 4, name: "Shoes" },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const token = Math.random().toString(36).substring(2);
    sessions[token] = username;
    return res.json({ message: "Login successful", token });
  }
  res.status(400).json({ message: "Invalid login" });
});

app.get("/search", (req, res) => {
  const { token, q } = req.query;
  if (!sessions[token]) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  const results = products.filter((p) =>
    p.name.toLowerCase().includes(q.toLowerCase())
  );
  res.json(results);
});

app.post("/cart", (req, res) => {
  const { token, productId } = req.body;
  if (!sessions[token]) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  res.json({ message: `Product ${productId} added to cart` });
});

app.post("/logout", (req, res) => {
  const { token } = req.body;
  delete sessions[token];
  res.json({ message: "Logged out" });
});

app.listen(PORT, () => {
  console.log(`Sample app running on http://localhost:${PORT}`);
});
