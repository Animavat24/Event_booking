const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
  const payload = {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1w' });
};

// Example usage
const user = {
  id: '1234567890',
  name: 'Test Admin',
  email: 'test@example.com',
  role: 'admin',
};

const token = generateToken(user);
console.log('Generated JWT Token:', token);