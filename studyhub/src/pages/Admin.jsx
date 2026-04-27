import React, { useState } from 'react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('domain');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFormSubmit = (e, formName) => {
    e.preventDefault();
    setSuccessMessage(`${formName} added successfully!`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-5xl">⚙️</span>
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Manage learning domains, skills, and platforms. Add new content to expand StudyHub's offerings.
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 font-medium animate-fadeInUp">
            ✓ {successMessage}
          </div>
        )}

        {/* Tabs */}
        <div className="mb-8 flex gap-2 border-b border-gray-200 overflow-x-auto animate-fadeInUp">
          {[
            { id: 'domain', label: '📚 Add Domain', icon: '🌐' },
            { id: 'skill', label: '🎯 Add Skill', icon: '💡' },
            { id: 'platform', label: '🔗 Add Platform', icon: '📱' },
            { id: 'stats', label: '📊 Statistics', icon: '📈' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-4 font-semibold text-sm sm:text-base border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Domain */}
          {activeTab === 'domain' && (
            <div className="lg:col-span-2 animate-fadeInUp">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Domain</h2>
                <form onSubmit={(e) => handleFormSubmit(e, 'Domain')}>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Domain Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Artificial Intelligence"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Description
                      </label>
                      <textarea
                        placeholder="Describe what this domain covers..."
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Icon Emoji
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 🤖"
                        maxLength="2"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Color Gradient
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>from-blue-500 to-cyan-500</option>
                        <option>from-purple-500 to-pink-500</option>
                        <option>from-green-500 to-teal-500</option>
                        <option>from-orange-500 to-red-500</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                    >
                      Add Domain
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Add Skill */}
          {activeTab === 'skill' && (
            <div className="lg:col-span-2 animate-fadeInUp">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Skill</h2>
                <form onSubmit={(e) => handleFormSubmit(e, 'Skill')}>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Select Domain
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Web Development</option>
                        <option>Data Science</option>
                        <option>Cloud & DevOps</option>
                        <option>Mobile Development</option>
                        <option>Design & UX</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Skill Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Advanced React"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Description
                      </label>
                      <textarea
                        placeholder="What will learners master in this skill?"
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Difficulty Level
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                    >
                      Add Skill
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Add Platform */}
          {activeTab === 'platform' && (
            <div className="lg:col-span-2 animate-fadeInUp">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Platform</h2>
                <form onSubmit={(e) => handleFormSubmit(e, 'Platform')}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Domain
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                          <option>Web Development</option>
                          <option>Data Science</option>
                          <option>Cloud & DevOps</option>
                          <option>Mobile Development</option>
                          <option>Design & UX</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Skill
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                          <option>Select a skill</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Platform Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Udemy"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Website URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Description
                      </label>
                      <textarea
                        placeholder="What makes this platform special?"
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Logo Emoji
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 🎬"
                        maxLength="2"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                    >
                      Add Platform
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Statistics */}
          {activeTab === 'stats' && (
            <div className="lg:col-span-2 animate-fadeInUp">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Total Domains', value: '5', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Total Skills', value: '30+', color: 'from-purple-500 to-pink-500' },
                  { label: 'Total Platforms', value: '100+', color: 'from-orange-500 to-red-500' },
                  { label: 'Active Users', value: '10K+', color: 'from-green-500 to-teal-500' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`p-8 bg-gradient-to-br ${stat.color} rounded-2xl text-white shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <p className="text-white/80 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="mt-8 bg-white rounded-2xl shadow-md border border-gray-100 p-8 animate-fadeInUp">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { action: 'Platform Added', item: 'Codecademy - Web Development', time: '2 hours ago' },
                    { action: 'Domain Updated', item: 'Data Science', time: '5 hours ago' },
                    { action: 'Skill Added', item: 'Machine Learning - Data Science', time: '1 day ago' },
                    { action: 'Platform Removed', item: 'Outdated Resource', time: '2 days ago' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div>
                        <p className="font-semibold text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.item}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Right Sidebar - Info */}
          <div className="animate-fadeInUp stagger-2">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-6 sticky top-20">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">ℹ️</span> Admin Tips
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-lg">✓</span>
                  <span>Add domains first, then skills within them</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lg">✓</span>
                  <span>Each skill should have at least 2-3 platforms</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lg">✓</span>
                  <span>Use descriptive names and descriptions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lg">✓</span>
                  <span>Verify platform URLs before adding</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-lg">✓</span>
                  <span>Update content regularly to keep it fresh</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                <p className="text-xs text-gray-600">
                  <strong>Note:</strong> This is a UI prototype. Form submissions don't persist data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
