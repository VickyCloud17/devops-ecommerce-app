const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("Product service is healthy");
});

app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Demo User" }]);
});

app.get('/', (req, res) => {
  res.send('Product service is running');
});

app.listen(3001, () => {
  console.log("Product service running on port 3001");
});
