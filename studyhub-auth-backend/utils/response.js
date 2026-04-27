// Standardized API response format
const sendResponse = (res, statusCode, success, message, data = null) => {
  const response = {
    success,
    message,
    timestamp: new Date().toISOString(),
  };

  if (data !== null) {
    response.data = data;
  }

  res.status(statusCode).json(response);
};

module.exports = {
  sendResponse,
};
