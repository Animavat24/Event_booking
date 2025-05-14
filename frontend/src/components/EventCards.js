import React from 'react';
import '../Assets/css/Homepage.css';

const EventCard = ({ event }) => {
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
        <button className="event-button">View Details</button>
      </div>
    </div>
  );
};

export default EventCard;