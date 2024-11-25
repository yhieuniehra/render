const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_number: { type: String, required: true },
  user_type: { type: String, required: true },
  bio: { type: String },
  language_spoken: { type: String, default: null },
  country: { type: String, required: true },
  avatar: { type: String },
});

module.exports = mongoose.model('User', userSchema);
