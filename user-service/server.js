const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("User service is healthy");
});

app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Demo User" }]);
});

app.get('/', (req, res) => {
  res.send('User service is running');
});

app.listen(3000, () => {
  console.log("User service running on port 3000");
});
