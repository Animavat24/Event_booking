import api from './api';

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    localStorage.setItem('token', response.token);
    return response;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await api.post('/auth/logout');
    localStorage.removeItem('token');
  } catch (error) {
    console.error('Logout error:', error);
  }
};