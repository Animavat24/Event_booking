import api from './api';

export const login = async (credentials) => {
  try {
    // Replace with actual API call
    // const response = await api.post('/auth/login', credentials);
    // return response;
    
    // Mock response
    return Promise.resolve({
      user: {
        id: 1,
        name: 'Admin',
        email: credentials.email,
        role: 'admin'
      },
      token: 'mock-token'
    });
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  // Add logout API call if needed
  return Promise.resolve();
};