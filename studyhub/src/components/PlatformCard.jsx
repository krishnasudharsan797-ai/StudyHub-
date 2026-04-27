import React from 'react';

const PlatformCard = ({ platform, onSave, isSaved }) => {
  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSave(platform);
  };

  const handleVisit = () => {
    window.open(platform.url, '_blank');
  };

  return (
    <div className="platform-card group rounded-xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* Color gradient header */}
      <div className={`h-24 ${platform.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-5xl">{platform.logo}</div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {platform.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 flex-1">
          {platform.description}
        </p>

        {/* Buttons Container */}
        <div className="flex gap-2">
          {/* Visit Button */}
          <button
            onClick={handleVisit}
            className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group/btn"
          >
            <span>Visit</span>
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
              isSaved(platform.id)
                ? 'bg-red-100 text-red-600 hover:bg-red-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            title={isSaved(platform.id) ? 'Remove from saved' : 'Save for later'}
          >
            <svg className={`w-5 h-5 ${isSaved(platform.id) ? 'fill-current' : ''}`} fill={isSaved(platform.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v12a1 1 0 01-.967 1.29c-.5.05-.987-.212-1.457-.697L7.622 13.41a2 2 0 00-2.144 0l-3.429 2.582c-.47.485-.957.747-1.457.697A1 1 0 015 17V5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
