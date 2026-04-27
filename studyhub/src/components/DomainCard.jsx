import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const DomainCard = ({ domain }) => {
  return (
    <Link to={`/skills/${domain.slug}`}>
      <div className="domain-card group rounded-2xl p-6 bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
        {/* Icon with gradient background */}
        <div className={`mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${domain.color} shadow-lg`}>
          <span className="text-3xl">{domain.icon}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {domain.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {domain.description}
        </p>

        {/* Skills count */}
        <div className="flex items-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {domain.skills.length} skills available
        </div>

        {/* Arrow icon */}
        <div className="mt-4 inline-flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Explore
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default DomainCard;
