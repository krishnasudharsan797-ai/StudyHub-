import React from 'react';
import DomainCard from '../components/DomainCard';
import { domainsData } from '../data/domains';

const Domains = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Learning Domains
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore our comprehensive collection of learning domains. Click on any domain to discover skills and resources.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {domainsData.map((domain, index) => (
            <div key={domain.slug || domain.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.08}s` }}>
              <DomainCard domain={domain} />
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 p-8 bg-white rounded-2xl border border-gray-100 shadow-md animate-fadeInUp">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Inside?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Skill-Based Learning
              </h3>
              <p className="text-gray-600">
                Each domain contains multiple skills organized by difficulty and learning path.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">🔗</span> Curated Resources
              </h3>
              <p className="text-gray-600">
                For each skill, we've curated the best learning platforms and resources available.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">💾</span> Save Favorites
              </h3>
              <p className="text-gray-600">
                Save your favorite platforms and skills to create a personalized learning list.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">🔍</span> Global Search
              </h3>
              <p className="text-gray-600">
                Use the search bar to find specific domains, skills, or platforms quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
