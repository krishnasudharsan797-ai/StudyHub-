import React, { createContext, useState, useCallback, useEffect } from 'react';
import { getToken, setToken, removeToken, getUser, setUser, removeUser } from '../utils/auth';
import { loginUser, registerUser } from '../api/auth';

export const AuthContext = createContext(null);

/**
 * AuthProvider component - Manages authentication state globally
 * Provides login, logout, register functions and persists auth state
 */
export const AuthProvider = ({ children }) => {
  const [user, setAuthUser] = useState(null);
  const [token, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    try {
      const storedToken = getToken();
      const storedUser = getUser();

      if (storedToken && storedUser) {
        setAuthToken(storedToken);
        setAuthUser(storedUser);
      }
    } catch (err) {
      console.error('Error initializing auth:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Login handler
   */
  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await loginUser({ email, password });

      if (response.success && response.data) {
        const { token: newToken, user: userData } = response.data;

        // Store in state
        setAuthToken(newToken);
        setAuthUser(userData);

        // Persist to localStorage
        setToken(newToken);
        setUser(userData);

        return { success: true, data: response.data };
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (err) {
      const errorMessage = err.message || 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Register handler
   */
  const register = useCallback(async (name, email, password, confirmPassword) => {
    setLoading(true);
    setError(null);

    try {
      const response = await registerUser({
        name,
        email,
        password,
        confirmPassword,
      });

      if (response.success && response.data) {
        const { token: newToken, user: userData } = response.data;

        // Store in state
        setAuthToken(newToken);
        setAuthUser(userData);

        // Persist to localStorage
        setToken(newToken);
        setUser(userData);

        return { success: true, data: response.data };
      } else {
        throw new Error(response.message || 'Registration failed');
      }
    } catch (err) {
      const errorMessage = err.message || 'Registration failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Logout handler
   */
  const logout = useCallback(() => {
    setAuthUser(null);
    setAuthToken(null);
    setError(null);

    // Clear localStorage
    removeToken();
    removeUser();
  }, []);

  /**
   * Check if user is authenticated
   */
  const isAuthenticated = !!token && !!user;

  const value = {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to use auth context
 */
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
