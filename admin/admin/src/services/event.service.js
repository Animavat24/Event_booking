import api from './api';

export const getEvents = async () => {
  try {
    // Replace with actual API call
    // return await api.get('/events');
    
    // Mock data
    return Promise.resolve([
      { id: 1, title: 'Tech Conference', date: '2023-07-15', location: 'Convention Center', capacity: 200 },
      { id: 2, title: 'Product Workshop', date: '2023-07-20', location: 'Meeting Room A', capacity: 50 },
    ]);
  } catch (error) {
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    // Replace with actual API call
    // return await api.post('/events', eventData);
    return Promise.resolve({ ...eventData, id: Math.floor(Math.random() * 1000) });
  } catch (error) {
    throw error;
  }
};