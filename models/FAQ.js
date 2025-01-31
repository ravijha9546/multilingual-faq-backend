const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: {
    text: String,
    translations: {
      hi: String,
      bn: String,
    }
  },
  answer: {
    text: String,
    translations: {
      hi: String,
      bn: String,
    }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FAQ', faqSchema);