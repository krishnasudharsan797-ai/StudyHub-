const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (userId, role) => {
  try {
    const token = jwt.sign(
      { id: userId, role: role },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE || '7d',
      }
    );
    return token;
  } catch (error) {
    throw new Error('Token generation failed');
  }
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      throw new Error('Invalid token');
    }
    if (error.name === 'TokenExpiredError') {
      throw new Error('Token has expired');
    }
    throw error;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
