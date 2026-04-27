const { verifyToken } = require('../utils/jwt');
const {
  AuthenticationError,
  AuthorizationError,
} = require('../utils/errors');

// Middleware to verify JWT token
const authMiddleware = (req, res, next) => {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AuthenticationError('No token provided');
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    // Verify token
    const decoded = verifyToken(token);

    // Attach user info to request
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };

    next();
  } catch (error) {
    if (error instanceof AuthenticationError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
        timestamp: new Date().toISOString(),
      });
    }

    res.status(401).json({
      success: false,
      message: error.message || 'Invalid token',
      timestamp: new Date().toISOString(),
    });
  }
};

// Middleware to check if user is admin
const adminMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    const error = new AuthorizationError('Admin access required');
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
      timestamp: new Date().toISOString(),
    });
  }

  next();
};

module.exports = {
  authMiddleware,
  adminMiddleware,
};
