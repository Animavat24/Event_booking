import api from './api';

export const getEvents = async () => {
  try {
    return await api.get('/events');
  } catch (error) {
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    return await api.post('/events', eventData);
  } catch (error) {
    throw error;
  }
};

export const updateEvent = async (id, eventData) => {
  try {
    return await api.put(`/events/${id}`, eventData);
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    return await api.delete(`/events/${id}`);
  } catch (error) {
    throw error;
  }
};