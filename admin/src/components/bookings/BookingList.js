import React, { useState, useEffect } from 'react';
import { formatDateTime } from '../../utils/dateFormatter';
import Table from '../common/Table';
import Button from '../common/Button';
import Modal from '../common/Modal';
import BookingDetails from './BookingDetails';
import '../../Assets/css/BookingList.css';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Mock data - replace with API call
    const mockBookings = [
      { id: 1, event: 'Tech Conference', user: 'John Doe', date: '2023-07-15T09:00:00', status: 'confirmed' },
      { id: 2, event: 'Product Workshop', user: 'Jane Smith', date: '2023-07-20T14:00:00', status: 'pending' },
    ];
    setBookings(mockBookings);
  }, []);

  const headers = ['Event', 'User', 'Date', 'Status', 'Actions'];

  const renderRow = (booking) => (
    <tr key={booking.id}>
      <td>{booking.event}</td>
      <td>{booking.user}</td>
      <td>{formatDateTime(booking.date)}</td>
      <td>
        <span className={`status-badge ${booking.status}`}>
          {booking.status}
        </span>
      </td>
      <td>
        <Button 
          variant="primary" 
          size="small" 
          onClick={() => {
            setSelectedBooking(booking);
            setShowModal(true);
          }}
        >
          View
        </Button>
      </td>
    </tr>
  );

  return (
    <div className="booking-list">
      <div className="booking-list-header">
        <h2>Bookings</h2>
      </div>
      <Table headers={headers} data={bookings} renderRow={renderRow} />
      
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {selectedBooking && (
          <BookingDetails 
            booking={selectedBooking} 
            onClose={() => setShowModal(false)} 
          />
        )}
      </Modal>
    </div>
  );
};

export default BookingList;