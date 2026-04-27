import React from 'react';
import Hero from '../components/Hero';
import DomainCard from '../components/DomainCard';
import { domainsData } from '../data/domains';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Domains Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Learning Domains
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of learning domains and discover the perfect resources for your journey
            </p>
          </div>

          {/* Domain Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {domainsData.map((domain, index) => (
              <div key={domain.slug || domain.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <DomainCard domain={domain} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12 animate-fadeInUp">
            Why Choose StudyHub?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Curated Resources',
                description: 'Handpicked learning platforms and courses from industry experts'
              },
              {
                icon: '🔍',
                title: 'Easy Discovery',
                description: 'Search and filter across domains, skills, and platforms seamlessly'
              },
              {
                icon: '💾',
                title: 'Save & Learn',
                description: 'Bookmark your favorite platforms and build your personalized learning path'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-lg text-blue-100 mb-8 animate-fadeInUp stagger-2">
            Join thousands of learners who are discovering the best resources with StudyHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp stagger-3">
            <button className="px-8 py-4 rounded-lg bg-white text-blue-600 font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Exploring
            </button>
            <button className="px-8 py-4 rounded-lg bg-blue-700 text-white font-bold text-lg hover:bg-blue-800 transition-colors duration-300">
              View All Domains
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> StudyHub
              </h3>
              <p className="text-sm">Empowering learners worldwide with curated educational resources.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/domains" className="hover:text-white transition">Domains</a></li>
                <li><a href="/saved" className="hover:text-white transition">Saved Resources</a></li>
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/login" className="hover:text-white transition">Login</a></li>
                <li><a href="/signup" className="hover:text-white transition">Sign Up</a></li>
                <li><a href="/admin" className="hover:text-white transition">Admin</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">
              © 2024 StudyHub. All rights reserved. | Helping learners discover the best educational resources.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
