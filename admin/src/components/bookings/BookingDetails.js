import React from 'react';
import { formatDateTime } from '../../utils/dateFormatter';
import Button from '../common/Button';
import '../../Assets/css/BookingDetails.css';

const BookingDetails = ({ booking, onClose }) => {
  return (
    <div className="booking-details">
      <h3>Booking Details</h3>
      <div className="details-grid">
        <div className="detail-item">
          <span className="detail-label">Event:</span>
          <span className="detail-value">{booking.event}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">User:</span>
          <span className="detail-value">{booking.user}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Date:</span>
          <span className="detail-value">{formatDateTime(booking.date)}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Status:</span>
          <span className={`detail-value status-badge ${booking.status}`}>
            {booking.status}
          </span>
        </div>
        {booking.notes && (
          <div className="detail-item full-width">
            <span className="detail-label">Notes:</span>
            <span className="detail-value">{booking.notes}</span>
          </div>
        )}
      </div>
      <div className="actions">
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default BookingDetails;