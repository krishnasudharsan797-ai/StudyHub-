import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600';
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-2 group-hover:shadow-lg transition-shadow">
              <span className="text-white text-xl font-bold">📚</span>
            </div>
            <span className="text-xl font-bold text-gray-900">StudyHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/domains" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/domains')}`}>
              Domains
            </Link>
            <Link to="/saved" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/saved')}`}>
              Saved
            </Link>
            <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/about')}`}>
              About
            </Link>
            {user?.role === 'admin' && (
              <Link to="/admin" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/admin')}`}>
                Admin
              </Link>
            )}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:block flex-1 mx-8">
            <SearchBar />
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  Welcome, <span className="font-semibold">{user?.name}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg font-medium transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fadeInUp">
            <div className="px-2 py-2">
              <SearchBar />
            </div>
            <Link to="/domains" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">
              Domains
            </Link>
            <Link to="/saved" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">
              Saved
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">
              About
            </Link>
            {user?.role === 'admin' && (
              <Link to="/admin" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">
                Admin
              </Link>
            )}
            <div className="border-t border-gray-200 pt-2 space-y-2">
              {isAuthenticated ? (
                <>
                  <span className="block px-3 py-2 text-sm text-gray-700">
                    Welcome, <span className="font-semibold">{user?.name}</span>
                  </span>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-md bg-red-100 text-red-700 font-medium hover:bg-red-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">
                    Login
                  </Link>
                  <Link to="/signup" className="block px-3 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
