import api from './api';

export const getBookings = async () => {
  try {
    return await api.get('/bookings');
  } catch (error) {
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  try {
    return await api.post('/bookings', bookingData);
  } catch (error) {
    throw error;
  }
};

export const updateBooking = async (id, bookingData) => {
  try {
    return await api.put(`/bookings/${id}`, bookingData);
  } catch (error) {
    throw error;
  }
};

export const deleteBooking = async (id) => {
  try {
    return await api.delete(`/bookings/${id}`);
  } catch (error) {
    throw error;
  }
};