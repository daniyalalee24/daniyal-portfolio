const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  try {
    const name = (req.body.name || "").trim();
    const email = (req.body.email || "").trim();
    const message = (req.body.message || "").trim();

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!EMAIL_REGEX.test(email)) {
      return res
        .status(400)
        .json({ error: "Please enter a valid email address" });
    }
    if (message.length > 2000) {
      return res.status(400).json({ error: "Message is too long" });
    }

    const newMessage = await Message.create({ name, email, message });
    res.status(201).json(newMessage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
