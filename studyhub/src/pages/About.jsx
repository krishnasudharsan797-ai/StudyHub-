import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About StudyHub
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Empowering learners worldwide by connecting them with the best educational resources in one centralized platform.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At StudyHub, we believe that quality education should be accessible to everyone, everywhere. Our mission is to help students find the best learning resources in one place.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We understand the challenges of navigating the vast landscape of online learning platforms. That's why we've curated a comprehensive collection of educational resources across major domains of knowledge.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're just starting your learning journey or looking to deepen your expertise, StudyHub provides the guidance and resources you need to succeed.
              </p>
            </div>
            <div className="animate-fadeInUp stagger-2">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-12 text-white text-center">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold mb-2">Empowering Learners</h3>
                <p>One platform, infinite possibilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fadeInUp">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⭐',
                title: 'Quality',
                description: 'We curate only the highest-quality learning resources from trusted platforms.'
              },
              {
                icon: '🤝',
                title: 'Accessibility',
                description: 'We believe quality education should be accessible to everyone, regardless of background.'
              },
              {
                icon: '🚀',
                title: 'Innovation',
                description: 'We continuously improve and innovate to provide the best learning experience.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fadeInUp">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '5', label: 'Learning Domains' },
              { number: '30+', label: 'Skills' },
              { number: '100+', label: 'Resources' },
              { number: '10K+', label: 'Happy Learners' }
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-gray-100 text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fadeInUp">
            How StudyHub Works
          </h2>
          <div className="space-y-6">
            {[
              {
                number: 1,
                title: 'Explore Domains',
                description: 'Browse through our 5 major learning domains to find your area of interest.'
              },
              {
                number: 2,
                title: 'Discover Skills',
                description: 'Each domain contains multiple skills organized by learning path and difficulty.'
              },
              {
                number: 3,
                title: 'Find Resources',
                description: 'View curated learning platforms and resources for each specific skill.'
              },
              {
                number: 4,
                title: 'Save & Learn',
                description: 'Save your favorite platforms and start your personalized learning journey.'
              }
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-6 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fadeInUp">
            About Our Team
          </h2>
          <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-100 animate-fadeInUp">
            <p className="text-lg text-gray-700 mb-4">
              StudyHub was created by a passionate team of educators and technologists who believe in the power of accessible education.
            </p>
            <p className="text-lg text-gray-700">
              Our team has years of experience in both education and technology, and we're committed to building tools that make learning more accessible, efficient, and enjoyable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fadeInUp">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto animate-fadeInUp stagger-2">
            Join thousands of learners who are transforming their education with StudyHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp stagger-3">
            <Link
              to="/domains"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Domains
            </Link>
            <Link
              to="/signup"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fadeInUp">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Is StudyHub free to use?',
                answer: 'Yes! StudyHub is completely free. We curate resources from various platforms, both free and paid.'
              },
              {
                question: 'Do I need to create an account?',
                answer: 'Creating an account allows you to save platforms and track your learning journey, but it\'s not required to browse.'
              },
              {
                question: 'Can I contribute resources?',
                answer: 'We\'re always looking for community contributions! Contact us to suggest new platforms or resources.'
              },
              {
                question: 'How often is the content updated?',
                answer: 'We regularly update our resources to ensure they remain current and relevant.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
