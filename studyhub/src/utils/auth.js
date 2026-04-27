/**
 * Authentication utility functions
 * Handles token and user data persistence in localStorage
 */

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

/**
 * Get the JWT token from localStorage
 * @returns {string|null} - JWT token or null if not found
 */
export const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};

/**
 * Set the JWT token in localStorage
 * @param {string} token - JWT token to store
 */
export const setToken = (token) => {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Error setting token:', error);
  }
};

/**
 * Remove the JWT token from localStorage
 */
export const removeToken = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

/**
 * Check if user is logged in
 * @returns {boolean} - True if token exists, false otherwise
 */
export const isLoggedIn = () => {
  return !!getToken();
};

/**
 * Get user data from localStorage
 * @returns {Object|null} - User object or null if not found
 */
export const getUser = () => {
  try {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
};

/**
 * Set user data in localStorage
 * @param {Object} user - User object to store
 */
export const setUser = (user) => {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error('Error setting user:', error);
  }
};

/**
 * Remove user data from localStorage
 */
export const removeUser = () => {
  try {
    localStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error('Error removing user:', error);
  }
};

/**
 * Clear all authentication data
 */
export const logout = () => {
  removeToken();
  removeUser();
};

/**
 * Persist authentication data
 * @param {Object} data - Authentication response data
 * @param {string} data.token - JWT token
 * @param {Object} data.user - User object
 */
export const persistAuth = (data) => {
  if (data.token) {
    setToken(data.token);
  }
  if (data.user) {
    setUser(data.user);
  }
};
