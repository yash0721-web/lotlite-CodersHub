import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Work With Us | CodersHub',
  description: 'Join our team or partner with us to create amazing coding education experiences.',
};

export default function WorkWithUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-purple-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">Work With Us</h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Join our mission to make coding education accessible, engaging, and effective for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#careers" 
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                View Careers
              </a>
              <a 
                href="#partnerships" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Partnership Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-8 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Innovation</h3>
              <p className="text-gray-600 text-center text-lg">
                We constantly push boundaries to create better learning experiences and solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-8 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Community</h3>
              <p className="text-gray-600 text-center text-lg">
                We believe in the power of community and collaboration to drive learning and growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-fade-in-up animation-delay-600">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">Excellence</h3>
              <p className="text-gray-600 text-center text-lg">
                We strive for excellence in everything we do, from content creation to user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in">
            Career Opportunities
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-left">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-bold mb-2 md:mb-0 text-gray-800">Senior React Developer</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">Full-time • Remote</span>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  We're looking for an experienced React developer to join our team and help build our next generation of interactive coding tutorials.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full font-medium">React</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full font-medium">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full font-medium">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full font-medium">5+ years</span>
                </div>
                <a 
                  href="#contact" 
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Apply Now
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-left animation-delay-200">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-bold mb-2 md:mb-0 text-gray-800">Content Creator</h3>
                  <span className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">Part-time • Remote</span>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  Join our content team to create engaging coding tutorials, blog posts, and educational materials for our growing community.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-purple-100 text-purple-800 text-sm px-4 py-1 rounded-full font-medium">Technical Writing</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-4 py-1 rounded-full font-medium">JavaScript</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-4 py-1 rounded-full font-medium">Python</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-4 py-1 rounded-full font-medium">2+ years</span>
                </div>
                <a 
                  href="#contact" 
                  className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Apply Now
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-left animation-delay-400">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-bold mb-2 md:mb-0 text-gray-800">Community Manager</h3>
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">Full-time • Remote</span>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  Help us build and nurture our community of learners, moderating discussions, organizing events, and supporting our users.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-green-100 text-green-800 text-sm px-4 py-1 rounded-full font-medium">Community Management</span>
                  <span className="bg-green-100 text-green-800 text-sm px-4 py-1 rounded-full font-medium">Social Media</span>
                  <span className="bg-green-100 text-green-800 text-sm px-4 py-1 rounded-full font-medium">Event Planning</span>
                  <span className="bg-green-100 text-green-800 text-sm px-4 py-1 rounded-full font-medium">3+ years</span>
                </div>
                <a 
                  href="#contact" 
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Educational Institutions</h3>
              <p className="text-gray-700 mb-8 text-lg">
                Partner with us to provide your students with high-quality coding education resources and support.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom learning paths for your curriculum</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Progress tracking and analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Dedicated support team</span>
                </li>
              </ul>
              <a 
                href="#contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Learn More
              </a>
            </div>
            
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Tech Companies</h3>
              <p className="text-gray-700 mb-8 text-lg">
                Collaborate with us to create custom training programs for your employees or to showcase your technologies.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom workshops and training</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Technology integration opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Brand visibility to our developer community</span>
                </li>
              </ul>
              <a 
                href="#contact" 
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in-up">
            <div className="p-10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="job">Job Application</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Tell us about yourself and your interest in working with us..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up animation-delay-200">
              <h3 className="text-xl font-bold mb-3 text-gray-800">What is the application process like?</h3>
              <p className="text-gray-700 text-lg">
                Our application process typically involves submitting your resume and cover letter, followed by an initial screening call, technical assessment (for technical roles), and interviews with team members.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up animation-delay-300">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Do you offer remote work options?</h3>
              <p className="text-gray-700 text-lg">
                Yes, we offer flexible remote work options for most positions. We believe in hiring the best talent regardless of location.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up animation-delay-400">
              <h3 className="text-xl font-bold mb-3 text-gray-800">What types of partnerships do you offer?</h3>
              <p className="text-gray-700 text-lg">
                We offer various partnership opportunities including educational institutions, tech companies, content creators, and community organizations. Each partnership is tailored to the specific needs and goals of both parties.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in-up animation-delay-500">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How can I stay updated on new opportunities?</h3>
              <p className="text-gray-700 text-lg">
                Follow us on social media or subscribe to our newsletter to stay updated on new job openings and partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 