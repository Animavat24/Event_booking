const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  const { title, date, location, capacity, description } = req.body;

  try {
    const event = new Event({
      title,
      date,
      location,
      capacity,
      description,
    });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', authMiddleware, async (req, res) => {
  const { title, date, location, capacity, description, status } = req.body;

  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { title, date, location, capacity, description, status },
      { new: true }
    );
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;