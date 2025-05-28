const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming',
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', eventSchema);