const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("Payment service is healthy");
});

app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Demo User" }]);
});

app.listen(3003, () => {
  console.log("Payment service running on port 3003");
});
