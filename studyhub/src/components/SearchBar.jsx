import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchAcrossData } from '../data/domains';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const openPlatform = (url) => {
  if (!url) return;

  const safeUrl = url.startsWith('http')
    ? url
    : `https://${url}`;

  window.open(safeUrl, '_blank', 'noopener,noreferrer');
};

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setResults(null);
      setShowResults(false);
      return;
    }

    const searchResults = searchAcrossData(value);
    setResults(searchResults);
    setShowResults(true);
  };

  // ✅ FIXED OUTSIDE handleSearch
  const handleDomainClick = (domain) => {
    const slug =
      domain.slug ||
      domain.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');

    navigate(`/skills/${domain.slug}`)
    setQuery('');
    setShowResults(false);
  };

  const handleSkillClick = (skill) => {
    const domainSlug =
      skill.domain.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');

    const skillSlug =
      skill.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');

    navigate(`/resources/${domainSlug}/${skillSlug}`);
    setQuery('');
    setShowResults(false);
  };

  const handlePlatformClick = (platform) => {
    window.open(platform.url, '_blank');
    setQuery('');
    setShowResults(false);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search domains, skills, platforms..."
          value={query}
          onChange={handleSearch}
          onFocus={() => query && setShowResults(true)}
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
        />

        <svg
          className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* RESULTS */}
      {showResults && results && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto search-results">

          {/* Domains */}
          {results.domains.length > 0 && (
            <div className="border-b border-gray-200">
              <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-600 uppercase">
                Domains ({results.domains.length})
              </div>

              {results.domains.map(domain => (
                <button
                  key={domain.slug || domain.id}
                  onClick={() => handleDomainClick(domain)}
                  className="w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors flex items-center space-x-2"
                >
                  <span className="text-lg">{domain.icon}</span>
                  <div>
                    <div className="font-medium text-gray-900">{domain.name}</div>
                    <div className="text-xs text-gray-500">{domain.skills.length} skills</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Skills */}
          {results.skills.length > 0 && (
            <div className="border-b border-gray-200">
              <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-600 uppercase">
                Skills ({results.skills.length})
              </div>

              {results.skills.map(skill => (
                <button
                  key={`${skill.domainId}-${skill.id}`}
                  onClick={() => handleSkillClick(skill)}
                  className="w-full text-left px-4 py-2 hover:bg-purple-50 transition-colors"
                >
                  <div className="font-medium text-gray-900">{skill.name}</div>
                  <div className="text-xs text-gray-500">in {skill.domain}</div>
                </button>
              ))}
            </div>
          )}

          {/* Platforms */}
          {results.platforms.length > 0 && (
            <div>
              <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-600 uppercase">
                Platforms ({results.platforms.length})
              </div>

              {results.platforms.slice(0, 5).map(platform => (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformClick(platform)}
                  className="w-full text-left px-4 py-2 hover:bg-pink-50 transition-colors"
                >
                  <div className="font-medium text-gray-900">{platform.name}</div>
                  <div className="text-xs text-gray-500">
                    {platform.skill} • {platform.domain}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {results.domains.length === 0 &&
            results.skills.length === 0 &&
            results.platforms.length === 0 && (
              <div className="px-4 py-8 text-center text-gray-500">
                No results found for "{query}"
              </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;