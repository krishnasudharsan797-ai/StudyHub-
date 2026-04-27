import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SkillCard from '../components/SkillCard';
import { domainsData } from '../data/domains';

const Skills = () => {
  const { domain } = useParams();
  const navigate = useNavigate();

  const domainData = domainsData.find(d => d.slug === domain);

  if (!domainData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Domain Not Found</h2>
          <p className="text-gray-600 mb-6">The domain you're looking for doesn't exist.</p>
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
        <button
          onClick={() => navigate('/domains')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Domains
        </button>

        {/* Page Header */}
        <div className="mb-12 animate-fadeInUp">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">{domainData.icon}</div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                {domainData.name}
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                {domainData.description}
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {domainData.skills.map((skill, index) => (
            <div key={skill.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.08}s` }}>
              <SkillCard skill={skill} domain={domainData.name} />
            </div>
          ))}
        </div>

        {/* Skills Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md animate-fadeInUp">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {domainData.skills.length}
            </div>
            <p className="text-gray-600">Skills in this domain</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md animate-fadeInUp stagger-2">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {domainData.skills.reduce((acc, skill) => acc + skill.platforms.length, 0)}
            </div>
            <p className="text-gray-600">Learning platforms available</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md animate-fadeInUp stagger-3">
            <div className="text-3xl font-bold text-pink-600 mb-2">
              100%
            </div>
            <p className="text-gray-600">Curated resources</p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 animate-fadeInUp">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Get Started</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                1
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Choose a Skill</h3>
                <p className="text-gray-600">Click on any skill card above to explore learning platforms</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                2
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Review Platforms</h3>
                <p className="text-gray-600">View curated learning platforms available for that skill</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">
                3
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Save & Learn</h3>
                <p className="text-gray-600">Save your favorite platforms and start your learning journey</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Skills;
