const express = require('express');
const Message = require('../models/Message');
const User = require('../models/User');

const router = express.Router();

// Get all messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new message
router.post('/messages', async (req, res) => {
  const { sender, text } = req.body;
  try {
    const message = new Message({ sender, text });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new user
router.post('/users', async (req, res) => {
  const { username } = req.body;
  try {
    const user = new User({ username });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
