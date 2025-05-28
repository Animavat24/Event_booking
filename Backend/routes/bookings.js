const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('event', 'title')
      .populate('user', 'name email')
      .sort({ date: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  const { event, user, date, notes } = req.body;

  try {
    const booking = new Booking({
      event,
      user,
      date,
      notes,
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', authMiddleware, async (req, res) => {
  const { event, user, date, status, notes } = req.body;

  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { event, user, date, status, notes },
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;