import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import '../Assets/css/Detail.css';

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get event data from location state or fetch it based on eventId
  const event = location.state?.event || {};

  // Handle booking button click
  const handleBookNow = () => {
    navigate(`/booking/${event.id}`, { state: { event } });
  };

  // For additional event information that might not be in the card view
  const additionalInfo = {
    organizer: "City Events Inc.",
    contactEmail: "info@cityevents.com",
    contactPhone: "+1 (555) 123-4567",
    fullDescription: `${event.description} This premier event offers a unique opportunity to experience the best in ${event.category}. 
      Join us for an unforgettable experience with experts and enthusiasts alike. 
      The event includes interactive sessions, networking opportunities, and exclusive content.
      Don't miss this chance to be part of our community!`,
    agenda: [
      { time: "10:00 AM", activity: "Registration & Welcome Coffee" },
      { time: "11:00 AM", activity: "Opening Session" },
      { time: "12:30 PM", activity: "Lunch Break" },
      { time: "1:30 PM", activity: "Main Event" },
      { time: "4:00 PM", activity: "Networking Session" },
      { time: "5:00 PM", activity: "Closing Remarks" }
    ],
    refundPolicy: "Full refund available up to 7 days before the event. 50% refund available 3-7 days before the event. No refunds within 72 hours of the event."
  };

  return (
    <div className="event-details-page">
      {/* Event Header */}
      <div className="event-details-header">
        <div className="container">
          <span className="event-category">{event.category}</span>
          <h1 className="event-title">{event.title}</h1>
          <div className="event-meta">
            <span className="event-date"><i className="far fa-calendar-alt"></i> {event.date}</span>
            <span className="event-location"><i className="fas fa-map-marker-alt"></i> {event.location}</span>
            <span className="event-price"><i className="fas fa-ticket-alt"></i> {event.price}</span>
          </div>
        </div>
      </div>

      {/* Event Content */}
      <div className="event-details-content">
        <div className="container">
          <div className="event-details-grid">
            {/* Main Content */}
            <div className="event-main-content">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                {event.tickets_available < 20 && (
                  <span className="event-limited-tag">Limited Seats!</span>
                )}
              </div>

              <div className="event-description-section">
                <h2>About This Event</h2>
                <p>{additionalInfo.fullDescription}</p>
              </div>

              <div className="event-agenda-section">
                <h2>Event Agenda</h2>
                <div className="event-agenda">
                  {additionalInfo.agenda.map((item, index) => (
                    <div className="agenda-item" key={index}>
                      <div className="agenda-time">{item.time}</div>
                      <div className="agenda-activity">{item.activity}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="event-policy-section">
                <h2>Refund Policy</h2>
                <p>{additionalInfo.refundPolicy}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="event-sidebar">
              <div className="event-booking-card">
                <div className="booking-card-header">
                  <h3>Event Information</h3>
                </div>
                <div className="booking-card-content">
                  <div className="booking-info-item">
                    <i className="far fa-calendar-alt"></i>
                    <div>
                      <h4>Date & Time</h4>
                      <p>{event.date}</p>
                    </div>
                  </div>
                  <div className="booking-info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h4>Location</h4>
                      <p>{event.location}</p>
                    </div>
                  </div>
                  <div className="booking-info-item">
                    <i className="fas fa-ticket-alt"></i>
                    <div>
                      <h4>Price</h4>
                      <p>{event.price}</p>
                    </div>
                  </div>
                  <div className="booking-info-item">
                    <i className="fas fa-users"></i>
                    <div>
                      <h4>Availability</h4>
                      <p>{event.tickets_available} tickets left</p>
                    </div>
                  </div>
                  <div className="booking-info-item">
                    <i className="fas fa-user-tie"></i>
                    <div>
                      <h4>Organizer</h4>
                      <p>{additionalInfo.organizer}</p>
                    </div>
                  </div>

                  <button className="book-now-btn" onClick={handleBookNow}>
                    Book Now
                  </button>
                </div>
              </div>

              <div className="event-contact-card">
                <div className="contact-card-header">
                  <h3>Contact Information</h3>
                </div>
                <div className="contact-card-content">
                  <div className="contact-info-item">
                    <i className="fas fa-envelope"></i>
                    <p>{additionalInfo.contactEmail}</p>
                  </div>
                  <div className="contact-info-item">
                    <i className="fas fa-phone"></i>
                    <p>{additionalInfo.contactPhone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Events Section - Could be added in future */}
    </div>
  );
};

export default EventDetailsPage;