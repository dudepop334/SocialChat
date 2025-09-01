// server.js (Node.js)
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/api/posts", (req, res) => {
  // Forward request to Java Post Service
  // or enqueue job for C++/Rust moderation
  res.send({ status: "received" });
});

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
