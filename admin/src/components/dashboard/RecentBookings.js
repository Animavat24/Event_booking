import React from 'react';
import { formatDateTime } from '../../utils/dateFormatter';
import '../../Assets/css/RecentBookings.css';

const RecentBookings = () => {
  // Mock data - replace with real API call
  const bookings = [
    { id: 1, event: 'Conference', user: 'John Doe', date: '2023-06-15T14:00:00', status: 'confirmed' },
    { id: 2, event: 'Workshop', user: 'Jane Smith', date: '2023-06-16T10:00:00', status: 'pending' },
    { id: 3, event: 'Seminar', user: 'Bob Johnson', date: '2023-06-17T16:00:00', status: 'confirmed' },
    { id: 4, event: 'Meeting', user: 'Alice Brown', date: '2023-06-18T09:00:00', status: 'cancelled' },
  ];

  return (
    <div className="recent-bookings">
      <h3>Recent Bookings</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <div className="booking-info">
              <span className="event-name">{booking.event}</span>
              <span className="user-name">{booking.user}</span>
              <span className="booking-date">{formatDateTime(booking.date)}</span>
            </div>
            <span className={`status-badge ${booking.status}`}>{booking.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBookings;