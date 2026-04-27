import React from 'react';
import { Link } from 'react-router-dom';

const SkillCard = ({ skill, domain }) => {
  return (
    <Link to={`/resources/${domain}/${skill.name}`}>
      <div className="skill-card group rounded-xl p-6 bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
        {/* Icon */}
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {skill.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">
          {skill.description}
        </p>

        {/* Platform count */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          {skill.platforms.length} platforms
        </div>

        {/* CTA */}
        <div className="inline-flex items-center text-purple-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          View Resources
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default SkillCard;
