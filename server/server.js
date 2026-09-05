require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

// Simple health check so hitting the API root doesn't just show "Cannot GET /"
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Portfolio API is running" });
});

app.use("/api/projects", require("./routes/projects"));
app.use("/api/contact", require("./routes/contact"));

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Centralized error handler (catches anything thrown/rejected in routes)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
