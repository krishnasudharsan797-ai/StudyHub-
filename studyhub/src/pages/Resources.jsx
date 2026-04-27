import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PlatformCard from '../components/PlatformCard';
import { domainsData } from '../data/domains';

const Resources = ({ saved, toggleSave, isSaved }) => {
  const { domain, skill } = useParams();
  const navigate = useNavigate();
  const openPlatform = (url) => {
  if (!url) return;

  const safeUrl = url.startsWith('http')
    ? url
    : `https://${url}`;

  window.open(safeUrl, '_blank', 'noopener,noreferrer');
};

  const domainData = domainsData.find(d => d.name === domain);
  const skillData = domainData?.skills.find(s => s.name === skill);

  if (!domainData || !skillData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources Not Found</h2>
          <p className="text-gray-600 mb-6">The skill or domain you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/domains')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Domains
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 animate-slideInLeft">
          <button onClick={() => navigate('/domains')} className="text-blue-600 hover:text-blue-700 font-medium">
            Domains
          </button>
          <span>/</span>
          <button onClick={() => navigate(`/skills/${domain}`)} className="text-blue-600 hover:text-blue-700 font-medium">
            {domain}
          </button>
          <span>/</span>
          <span className="text-gray-900 font-medium">{skill}</span>
        </div>

        {/* Header */}
        <div className="mb-12 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {skill} Learning Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore {skillData.platforms.length} carefully curated platforms to master {skill}.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {skillData.platforms.map((platform, index) => (
            <div
              key={platform.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.08}s` }}
            >

              {/* 🔥 LOGO FIX (SAFE FALLBACK UI) */}
              <div className="mb-2 text-3xl">
                {platform.logo}
              </div>

              <PlatformCard
                platform={platform}
                onSave={toggleSave}
                isSaved={isSaved}
              />
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-md p-8 mb-16 animate-fadeInUp">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Platform</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {skillData.platforms.map(platform => (
                  <tr key={platform.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{platform.logo}</span>
                        <div>
                          <div className="font-semibold text-gray-900">{platform.name}</div>
                          <div className="text-sm text-gray-600">{platform.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Learning Platform
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => openPlatform(platform.url)}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline"
                      >
                        Visit →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-center mt-12 animate-fadeInUp">
          <button
            onClick={() => navigate(`/skills/${domainData.slug}`)}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-semibold transition-colors"
          >
            Back to Skills
          </button>

          <button
            onClick={() => navigate('/saved')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
          >
            View Saved ({saved.length})
          </button>
        </div>

      </div>
    </div>
  );
};

export default Resources;