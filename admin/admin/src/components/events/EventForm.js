import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import '../../Assets/css/EventForm.css';

const EventForm = ({ event, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    capacity: '',
    description: ''
  });

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title || '',
        date: event.date || '',
        location: event.location || '',
        capacity: event.capacity || '',
        description: event.description || ''
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="event-form">
      <h3>{event ? 'Edit Event' : 'Add New Event'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Date</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Capacity</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
        </div>
        
        <div className="form-actions">
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {event ? 'Update' : 'Create'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;