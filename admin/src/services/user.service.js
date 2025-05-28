import api from './api';

export const getUsers = async () => {
  try {
    return await api.get('/users');
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    return await api.post('/users', userData);
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    return await api.put(`/users/${id}`, userData);
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    return await api.delete(`/users/${id}`);
  } catch (error) {
    throw error;
  }
};