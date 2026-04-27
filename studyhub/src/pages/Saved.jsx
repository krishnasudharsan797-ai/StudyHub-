import React from 'react';
import { Link } from 'react-router-dom';

const Saved = ({ saved, onRemove }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Saved Platforms
          </h1>
          <p className="text-lg text-gray-600">
            {saved.length === 0
              ? 'You haven\'t saved any platforms yet. Explore domains to find resources.'
              : `You have ${saved.length} saved platform${saved.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Empty State */}
        {saved.length === 0 ? (
          <div className="text-center py-16 animate-fadeInUp">
            <div className="mb-6 text-6xl">📚</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Saved Platforms Yet</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start exploring domains and skills to find learning platforms you love. Save them here for quick access later.
            </p>
            <Link
              to="/domains"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
            >
              Explore Domains
            </Link>
          </div>
        ) : (
          <>
            {/* Saved Platforms */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {saved.map((platform, index) => (
                <div
                  key={platform.id}
                  className="animate-fadeInUp bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Color gradient header */}
                  <div className={`h-24 ${platform.color} flex items-center justify-center`}>
                    <div className="text-5xl">{platform.logo}</div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {platform.name}
                    </h3>

                    <div className="text-sm text-gray-600 mb-2">
                      <div>{platform.skill}</div>
                      <div className="text-xs text-gray-500">{platform.domain}</div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                      {platform.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => window.open(platform.url, '_blank')}
                        className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
                      >
                        Visit
                      </button>
                      <button
                        onClick={() => onRemove(platform.id)}
                        className="px-3 py-2 bg-red-100 text-red-600 rounded-lg font-semibold text-sm hover:bg-red-200 transition-colors"
                        title="Remove from saved"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 5a2 2 0 012-2h6a2 2 0 012 2v12a1 1 0 01-.967 1.29c-.5.05-.987-.212-1.457-.697L7.622 13.41a2 2 0 00-2.144 0l-3.429 2.582c-.47.485-.957.747-1.457.697A1 1 0 015 17V5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fadeInUp">
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {saved.length}
                </div>
                <p className="text-gray-600">Platforms Saved</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {new Set(saved.map(p => p.skill)).size}
                </div>
                <p className="text-gray-600">Different Skills</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  {new Set(saved.map(p => p.domain)).size}
                </div>
                <p className="text-gray-600">Domains Covered</p>
              </div>
            </div>

            {/* Organization Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-8 animate-fadeInUp">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-3xl">🎯</span> Next Steps
              </h2>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-green-600">1</span>
                  <span className="text-gray-700">Visit the platforms using the "Visit" button to start learning</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-green-600">2</span>
                  <span className="text-gray-700">Set up accounts on platforms you're most interested in</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-green-600">3</span>
                  <span className="text-gray-700">Combine multiple platforms for comprehensive learning</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-green-600">4</span>
                  <span className="text-gray-700">Remove platforms from your saved list as you complete them</span>
                </li>
              </ol>
            </div>

            {/* Continue Exploring */}
            <div className="flex justify-center mt-12 animate-fadeInUp">
              <Link
                to="/domains"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg font-semibold transition-all duration-300"
              >
                Continue Exploring
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Saved;
