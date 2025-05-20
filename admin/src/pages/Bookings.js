import React from 'react';
import BookingList from '../components/bookings/BookingList';
import '../Assets/css/Bookings.css';

const Bookings = () => {
  return (
    <div className="bookings-page">
      <BookingList />
    </div>
  );
};

export default Bookings;