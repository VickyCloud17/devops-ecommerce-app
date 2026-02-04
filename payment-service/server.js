const express = require("express");
const axios = require("axios");

const app = express();

app.get("/health", (req, res) => {
  res.send("Payment service is healthy");
});

app.get("/pay", async (req, res) => {
  try {
    const orderResponse = await axios.get("http://order-service:3002/order");
    res.json({
      payment: "Payment successful",
      orderDetails: orderResponse.data
    });
  } catch (error) {
    res.status(500).json({ error: "Payment failed" });
  }
});

app.listen(3003, () => {
  console.log("Payment service running on port 3003");
});
