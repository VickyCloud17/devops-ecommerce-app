const express = require("express");
const axios = require("axios");

const app = express();

app.get("/health", (req, res) => {
  res.send("Order service is healthy");
});

app.get("/order", async (req, res) => {
  try {
    const userResponse = await axios.get("http://user-service:3000/health");
    const productResponse = await axios.get("http://product-service:3001/health");

    res.json({
      order: "Order placed successfully",
      userService: userResponse.data,
      productService: productResponse.data
    });
  } catch (error) {
    res.status(500).json({ error: "Service communication failed" });
  }
});

app.get("/", (req, res) => {
  res.json({ order: "Order service is running" });
});

app.listen(3002, () => {
  console.log("Order service running on port 3002");
});
