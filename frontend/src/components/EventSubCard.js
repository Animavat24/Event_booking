import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/subcategory.css';

const EventSubCard = ({ event }) => {
  const navigate = useNavigate();

const handleBookNow = () => {
  console.log("Book Now clicked", event); // Add this
  const eventId = event._id || event.id;
  if (eventId) {
    navigate(`/booking/${eventId}`, { state: { event } });
  } else {
    console.error("Event ID missing");
  }
};

const handleViewDetails = () => {
  const eventId = event.id || event._id;
  if (eventId) {
    navigate(`/events/${eventId}`, { state: { event } });
  }
};

  return (
    <div className="event-subcard">
      <div className="event-subcard-image">
        <img src={event.image} alt={event.title} />
        <span className="event-subcard-category">{event.category}</span>
        {event.tickets_available < 20 && (
          <span className="event-subcard-limited">Limited Seats!</span>
        )}
      </div>
      <div className="event-subcard-content">
        <h3 className="event-subcard-title">{event.title}</h3>
        <p className="event-subcard-description">{event.description}</p>
        <div className="event-subcard-info">
          <div className="event-subcard-detail">
            <i className="far fa-calendar-alt"></i>
            <span>{event.date}</span>
          </div>
          <div className="event-subcard-detail">
            <i className="fas fa-map-marker-alt"></i>
            <span>{event.location}</span>
          </div>
          <div className="event-subcard-detail">
            <i className="fas fa-ticket-alt"></i>
            <span>{event.price}</span>
          </div>
          <div className="event-subcard-detail">
            <i className="fas fa-users"></i>
            <span>{event.tickets_available} tickets left</span>
          </div>
        </div>
        <div className="book-btn">
          <button className="event-subcard-button book-now" onClick={handleBookNow}>Book Now</button>
          <button className="event-subcard-button" onClick={handleViewDetails}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default EventSubCard;