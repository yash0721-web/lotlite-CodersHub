"use client";

import Link from 'next/link';
import { FaAmazon, FaGoogle, FaMicrosoft, FaPaypal, FaGithub, FaYoutube, FaTwitter, FaLinkedin, FaArrowRight, FaCheckCircle, FaLaptopCode, FaCode, FaDatabase, FaBrain, FaRocket, FaUsers, FaBook, FaCertificate } from 'react-icons/fa';
import { SiGoldmansachs, SiHitachi, SiJavascript, SiPython, SiReact, SiNodedotjs, SiMongodb, SiDocker } from 'react-icons/si';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-7xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Welcome to CodersHub
            </h1>
            <p className="text-2xl mb-12 text-amber-100">Master the Art of Coding</p>
            <div className="flex gap-6 justify-center">
              <Link href="/courses" 
                className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-8 py-4 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg text-lg">
                Explore Courses
              </Link>
              <Link href="/blog"
                className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-full font-semibold hover:bg-amber-400 hover:text-indigo-900 transition-all duration-300 hover:scale-105 text-lg">
                Read Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-10 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-amber-400 group">
              <h3 className="text-6xl font-bold text-indigo-900 mb-4 group-hover:text-amber-500 transition-colors">100+</h3>
              <p className="text-gray-600 text-xl">Premium Courses</p>
            </div>
            <div className="p-10 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-yellow-400 group">
              <h3 className="text-6xl font-bold text-indigo-900 mb-4 group-hover:text-yellow-500 transition-colors">500K+</h3>
              <p className="text-gray-600 text-xl">Active Students</p>
            </div>
            <div className="p-10 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-amber-400 group">
              <h3 className="text-6xl font-bold text-indigo-900 mb-4 group-hover:text-amber-500 transition-colors">5.0</h3>
              <p className="text-gray-600 text-xl">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-indigo-900">Code Smarter with Real-World Practice</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              At CodersHub, you don&apos;t just learn code — you engage in practical exercises that reflect real-world scenarios. 
              From beginner-friendly lessons to advanced courses trusted by professionals, we prepare you for real-world projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-100 group">
              <div className="w-full h-64 rounded-t-2xl flex items-center justify-center overflow-hidden">
                <video 
                  src="/Images/web dev.mp4" 
                  className="w-full h-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  ref={(video) => {
                    if (video) {
                      video.playbackRate = 1.0;
                    }
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-indigo-900">Web Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Learn HTML, CSS, JavaScript and modern frameworks to build responsive websites and web applications.</p>
                <Link href="/web-development" className="text-purple-600 hover:text-purple-700 font-semibold transition flex items-center justify-center group">
                  Learn More 
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-yellow-100 group">
              <div className="w-full h-64 rounded-t-2xl flex items-center justify-center overflow-hidden">
                <video 
                  src="/Images/AI&ML.mp4" 
                  className="w-full h-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  ref={(video) => {
                    if (video) {
                      video.playbackRate = 1.0;
                    }
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-indigo-900">AI & ML</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Master Python, data analysis, machine learning and artificial intelligence with hands-on projects.</p>
                <Link href="/data-science" className="text-purple-600 hover:text-purple-700 font-semibold transition flex items-center justify-center group">
                  Learn More 
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-100 group">
              <div className="w-full h-64 rounded-t-2xl flex items-center justify-center overflow-hidden bg-gray-100">
                <img 
                  src="/Images/ds.jpg" 
                  alt="Data Structures and Algorithms" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-indigo-900">Data Structures & Algorithms</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Learn DSA and crack interviews at top companies like Google and Microsoft.</p>
                <Link href="/dsa" className="text-purple-600 hover:text-purple-700 font-semibold transition flex items-center justify-center group">
                  Learn More 
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Why Choose CodersHub?</h2>
            <p className="text-amber-100 text-lg">
              We provide a comprehensive learning experience designed to help you succeed in your coding journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform">
                <FaLaptopCode className="w-8 h-8 text-indigo-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-300">Hands-on Projects</h3>
              <p className="text-amber-100/90">Learn by building real-world projects that you can add to your portfolio.</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform">
                <FaUsers className="w-8 h-8 text-indigo-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-300">Community Support</h3>
              <p className="text-amber-100/90">Join a community of learners and get help when you need it.</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform">
                <FaBook className="w-8 h-8 text-indigo-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-300">Comprehensive Content</h3>
              <p className="text-amber-100/90">From basics to advanced topics, we cover everything you need to know.</p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform">
                <FaCertificate className="w-8 h-8 text-indigo-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-300">Certification</h3>
              <p className="text-amber-100/90">Earn certificates upon completion to showcase your skills to employers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-indigo-900">Technologies You'll Master</h2>
            <p className="text-gray-600 text-lg">
              Our courses cover the most in-demand technologies used by top companies worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group">
              <SiJavascript className="w-16 h-16 text-yellow-500 mb-4 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-indigo-900">JavaScript</h3>
            </div>
            <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group">
              <SiPython className="w-16 h-16 text-blue-500 mb-4 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-indigo-900">Python</h3>
            </div>
            <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group">
              <SiReact className="w-16 h-16 text-blue-400 mb-4 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-indigo-900">React</h3>
            </div>
            <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group">
              <SiNodedotjs className="w-16 h-16 text-green-600 mb-4 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-indigo-900">Node.js</h3>
            </div>
            <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group">
              <SiMongodb className="w-16 h-16 text-green-500 mb-4 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-indigo-900">MongoDB</h3>
            </div>
            <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group">
              <SiDocker className="w-16 h-16 text-blue-600 mb-4 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-indigo-900">Docker</h3>
            </div>
            <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group">
              <FaRocket className="w-16 h-16 text-purple-600 mb-4 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-indigo-900">DevOps</h3>
            </div>
            <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group">
              <FaBrain className="w-16 h-16 text-pink-600 mb-4 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-indigo-900">AI & ML</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Companies Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Our Students Work At</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center">
            <FaAmazon className="w-16 h-16 text-amber-400 mx-auto hover:text-yellow-300 transition-colors transform hover:scale-110 transition-transform" />
            <FaGoogle className="w-16 h-16 text-amber-400 mx-auto hover:text-yellow-300 transition-colors transform hover:scale-110 transition-transform" />
            <FaMicrosoft className="w-16 h-16 text-amber-400 mx-auto hover:text-yellow-300 transition-colors transform hover:scale-110 transition-transform" />
            <SiGoldmansachs className="w-16 h-16 text-amber-400 mx-auto hover:text-yellow-300 transition-colors transform hover:scale-110 transition-transform" />
            <FaPaypal className="w-16 h-16 text-amber-400 mx-auto hover:text-yellow-300 transition-colors transform hover:scale-110 transition-transform" />
            <SiHitachi className="w-16 h-16 text-amber-400 mx-auto hover:text-yellow-300 transition-colors transform hover:scale-110 transition-transform" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-indigo-900">Ready to Start Your Coding Journey?</h2>
            <p className="text-gray-600 text-xl mb-12">
              Join thousands of students who have already transformed their careers with CodersHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/courses" 
                className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-8 py-4 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg text-lg">
                Browse All Courses
              </Link>
              <Link href="/contact"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 text-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
