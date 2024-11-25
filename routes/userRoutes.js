const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Lấy tất cả người dùng
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Tạo người dùng mới
router.post('/users', async (req, res) => {
  const user = new User({
    id: req.body.id,
    full_name: req.body.full_name,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number,
    user_type: req.body.user_type,
    bio: req.body.bio,
    language_spoken: req.body.language_spoken,
    country: req.body.country,
    avatar: req.body.avatar,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
