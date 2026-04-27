import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Domains from './pages/Domains';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import Saved from './pages/Saved';
import About from './pages/About';
import Admin from './pages/Admin';
import './App.css';

function App() {
  const [saved, setSaved] = useState([]);

  // Load saved platforms from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('savedPlatforms');
    if (savedData) {
      setSaved(JSON.parse(savedData));
    }
  }, []);

  const toggleSave = (platform) => {
    setSaved(prevSaved => {
      const isSaved = prevSaved.some(p => p.id === platform.id);
      const newSaved = isSaved 
        ? prevSaved.filter(p => p.id !== platform.id)
        : [...prevSaved, platform];
      
      localStorage.setItem('savedPlatforms', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  const isSaved = (platformId) => {
    return saved.some(p => p.id === platformId);
  };

  const removeSaved = (platformId) => {
    setSaved(prevSaved => {
      const newSaved = prevSaved.filter(p => p.id !== platformId);
      localStorage.setItem('savedPlatforms', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Protected Routes */}
              <Route 
                path="/domains" 
                element={
                  <ProtectedRoute>
                    <Domains />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/skills/:domain" 
                element={
                  <ProtectedRoute>
                    <Skills saved={saved} toggleSave={toggleSave} isSaved={isSaved} />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/resources/:domain/:skill" 
                element={
                  <ProtectedRoute>
                    <Resources saved={saved} toggleSave={toggleSave} isSaved={isSaved} />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/saved" 
                element={
                  <ProtectedRoute>
                    <Saved saved={saved} onRemove={removeSaved} />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/about" 
                element={<About />} 
              />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
