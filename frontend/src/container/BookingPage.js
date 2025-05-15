import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import '../Assets/css/Booking.css';

const BookingFormPage = () => {
  const { eventId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const event = location.state?.event || {};

  const ticketOptions = [
    { id: 'double', name: 'Entry for two', price: 149 },
    { id: 'single', name: 'Single entry', price: 99 }
  ];

  const [quantities, setQuantities] = useState({});

  const increment = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const decrement = (id) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [id]: current - 1
      };
    });
  };

  const handleAdd = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: 1
    }));
  };

  const totalAmount = ticketOptions.reduce((sum, ticket) => {
    const qty = quantities[ticket.id] || 0;
    return sum + qty * ticket.price;
  }, 0);

  const totalTickets = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <div className="booking-form-page">
      <div className="booking-form-header">
        <div className="container">
          <h1>Choose Tickets</h1>
          <h2>{event.title}</h2>
        </div>
      </div>

      <div className="booking-form-content">
        <div className="container">
          <div className="ticket-options-section">
            {ticketOptions.map((ticket) => (
              <div key={ticket.id} className="ticket-option-card">
                <div className="ticket-info">
                  <h4>{ticket.name}</h4>
                  <span className="ticket-note">Few Tickets Left</span>
                  <p className="ticket-price">₹{ticket.price}</p>
                </div>
                {quantities[ticket.id] ? (
                  <div className="stepper">
                    <button onClick={() => decrement(ticket.id)}>-</button>
                    <span>{quantities[ticket.id]}</span>
                    <button onClick={() => increment(ticket.id)}>+</button>
                  </div>
                ) : (
                  <button className="ticket-add-btn" onClick={() => handleAdd(ticket.id)}>
                    ADD
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Cart footer */}
          {totalTickets > 0 && (
            <div className="cart-footer">
              <div>
                <strong>₹{totalAmount}</strong><br />
                <span>{totalTickets} ticket{totalTickets > 1 ? 's' : ''}</span>
              </div>
              <button className="btn-add-to-cart">ADD TO CART</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingFormPage;
