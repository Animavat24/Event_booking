import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import '../Assets/css/Booking.css'
// import '../Assets/css/Detail.css'

const BookingFormPage = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get event data from location state or fetch it based on eventId
  const event = location.state?.event || {};

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    numberOfTickets: 1,
    specialRequests: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    if (formData.numberOfTickets < 1) {
      errors.numberOfTickets = 'Number of tickets must be at least 1';
    } else if (formData.numberOfTickets > event.tickets_available) {
      errors.numberOfTickets = `Only ${event.tickets_available} tickets available`;
    }
    
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate random booking reference
      const reference = 'BK-' + Math.random().toString(36).substring(2, 10).toUpperCase();
      setBookingReference(reference);
      setBookingComplete(true);
      setIsSubmitting(false);
    }, 1500);
  };

  // Handle back to event details
  const handleBackToEvent = () => {
    navigate(`/events/${eventId}`, { state: { event } });
  };

  // Handle continue to homepage
  const handleContinueToHomepage = () => {
    navigate('/');
  };

  // Calculate total price
  const totalPrice = parseFloat(event.price?.replace('$', '') || 0) * formData.numberOfTickets;

  return (
    <div className="booking-form-page">
      <div className="booking-form-header">
        <div className="container">
          <h1>Book Tickets</h1>
          <h2>{event.title}</h2>
        </div>
      </div>

      <div className="booking-form-content">
        <div className="container">
          {!bookingComplete ? (
            <div className="booking-form-grid">
              {/* Form Section */}
              <div className="booking-form-section">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={formErrors.fullName ? 'error' : ''}
                    />
                    {formErrors.fullName && <span className="error-message">{formErrors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={formErrors.phone ? 'error' : ''}
                    />
                    {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="numberOfTickets">Number of Tickets</label>
                    <input
                      type="number"
                      id="numberOfTickets"
                      name="numberOfTickets"
                      min="1"
                      max={event.tickets_available}
                      value={formData.numberOfTickets}
                      onChange={handleInputChange}
                      className={formErrors.numberOfTickets ? 'error' : ''}
                    />
                    {formErrors.numberOfTickets && <span className="error-message">{formErrors.numberOfTickets}</span>}
                    <span className="tickets-available">{event.tickets_available} tickets available</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="specialRequests">Special Requests (Optional)</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows="4"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="form-actions">
                    <button 
                      type="button" 
                      className="btn-secondary"
                      onClick={handleBackToEvent}
                    >
                      Back to Event
                    </button>
                    <button 
                      type="submit" 
                      className="btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Book Now'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Order Summary Section */}
              <div className="order-summary-section">
                <div className="order-summary-card">
                  <div className="order-summary-header">
                    <h3>Order Summary</h3>
                  </div>
                  <div className="order-summary-content">
                    <div className="event-summary">
                      <img src={event.image} alt={event.title} className="event-thumbnail" />
                      <div className="event-summary-details">
                        <h4>{event.title}</h4>
                        <p><i className="far fa-calendar-alt"></i> {event.date}</p>
                        <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                      </div>
                    </div>
                    
                    <div className="order-details">
                      <div className="order-detail-item">
                        <span>Price per ticket:</span>
                        <span>{event.price}</span>
                      </div>
                      <div className="order-detail-item">
                        <span>Number of tickets:</span>
                        <span>{formData.numberOfTickets}</span>
                      </div>
                      <div className="order-detail-item total">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="order-notes">
                      <p><i className="fas fa-info-circle"></i> You'll receive an email confirmation with your tickets.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="booking-confirmation">
              <div className="confirmation-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h2>Booking Confirmed!</h2>
              <p>Thank you for your booking. Your tickets have been reserved for <strong>{event.title}</strong>.</p>
              <div className="confirmation-details">
                <p><strong>Booking Reference:</strong> {bookingReference}</p>
                <p><strong>Event Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Number of Tickets:</strong> {formData.numberOfTickets}</p>
                <p><strong>Total Paid:</strong> ${totalPrice.toFixed(2)}</p>
              </div>
              <p>A confirmation email has been sent to <strong>{formData.email}</strong> with your ticket details.</p>
              <div className="confirmation-actions">
                <button className="btn-secondary" onClick={handleBackToEvent}>Back to Event</button>
                <button className="btn-primary" onClick={handleContinueToHomepage}>Continue to Homepage</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingFormPage;