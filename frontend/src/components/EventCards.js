import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Homepage.css';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  // Handle view details button click
  const handleViewDetails = () => {
    // Navigate to subcategory page with event data
    navigate(`/events/category/${encodeURIComponent(event.category)}`, {
      state: { eventData: event }
    });
  };

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
        <span className="event-category">{event.category}</span>
      </div>
      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <div className="event-info">
          <div className="event-detail">
            <i className="far fa-calendar-alt"></i>
            <span>{event.date}</span>
          </div>
          <div className="event-detail">
            <i className="fas fa-map-marker-alt"></i>
            <span>{event.location}</span>
          </div>
        </div>
        <button className="event-button" onClick={handleViewDetails}>View Details</button>
      </div>
    </div>
  );
};

export default EventCard;