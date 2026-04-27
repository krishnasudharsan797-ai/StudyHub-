import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "Knowledge is power. Start learning today.",
    "Every expert was once a beginner.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "Education is the most powerful weapon which you can use to change the world.",
    "Learning never exhausts the mind.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero relative overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
          Start Your Learning Journey <span className="text-4xl sm:text-5xl lg:text-6xl">🚀</span>
        </h1>

        {/* Rotating Quote */}
        <div className="h-16 mb-8 flex items-center justify-center">
          <p className="hero-quote text-lg sm:text-xl text-gray-600 font-medium italic animate-fadeIn">
            "{quotes[currentQuote]}"
          </p>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-10 animate-fadeInUp stagger-2">
          Explore curated learning resources across 5 major domains. Find the perfect platform to master new skills.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp stagger-3">
          <Link
            to="/domains"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore Domains
          </Link>
          <Link
            to="/signup"
            className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 max-w-md mx-auto animate-fadeInUp stagger-4">
          <div className="stats-card p-4 rounded-lg bg-white shadow-md">
            <div className="text-2xl font-bold text-blue-600">5</div>
            <div className="text-sm text-gray-600">Domains</div>
          </div>
          <div className="stats-card p-4 rounded-lg bg-white shadow-md">
            <div className="text-2xl font-bold text-purple-600">30+</div>
            <div className="text-sm text-gray-600">Skills</div>
          </div>
          <div className="stats-card p-4 rounded-lg bg-white shadow-md">
            <div className="text-2xl font-bold text-pink-600">100+</div>
            <div className="text-sm text-gray-600">Resources</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
