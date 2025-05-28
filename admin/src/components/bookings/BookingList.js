import React, { useState, useEffect } from 'react';
import { formatDateTime } from '../../utils/dateFormatter';
import Table from '../common/Table';
import Button from '../common/Button';
import Modal from '../common/Modal';
import BookingDetails from './BookingDetails';
import { getBookings } from '../../services/booking.service';
import '../../Assets/css/BookingList.css';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getBookings();
        setBookings(response);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  const headers = ['Event', 'User', 'Date', 'Status', 'Actions'];

  const renderRow = (booking) => (
    <tr key={booking._id}>
      <td>{booking.event.title}</td>
      <td>{booking.user.name}</td>
      <td>{formatDateTime(booking.date)}</td>
      <td>
        <span className={`status-badge ${booking.status}`}>{booking.status}</span>
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
      <h2>Bookings</h2>
      <Table headers={headers} data={bookings} renderRow={renderRow} />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {selectedBooking && (
          <BookingDetails booking={selectedBooking} onClose={() => setShowModal(false)} />
        )}
      </Modal>
    </div>
  );
};

export default BookingList;