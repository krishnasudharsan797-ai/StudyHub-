/**
 * Frontend API layer for authentication
 * Production-ready (Vercel + Render)
 */

const API_BASE_URL = "https://studyhub-tzbe.onrender.com/api/auth";

// REGISTER
export const registerUser = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Registration failed');
    }

    return result;
  } catch (error) {
    throw error;
  }
};

// LOGIN
export const loginUser = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Login failed');
    }

    return result;
  } catch (error) {
    throw error;
  }
};

// PROFILE
export const getProfile = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch profile');
    }

    return result;
  } catch (error) {
    throw error;
  }
};