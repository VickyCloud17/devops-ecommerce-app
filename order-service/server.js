const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("Order service is healthy");
});

app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Demo User" }]);
});

app.listen(3002, () => {
  console.log("Order service running on port 3002");
});
