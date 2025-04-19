"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-gradient-to-r from-indigo-900/90 to-purple-900/90 backdrop-blur-sm py-3'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Main Links */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent hover:from-amber-500 hover:to-yellow-400 transition-all duration-300">
              CodersHub
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/courses" className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-amber-300'} transition-all duration-300 font-medium`}>
                Courses
              </Link>
              <Link href="/tutorials" className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-amber-300'} transition-all duration-300 font-medium`}>
                Tutorials
              </Link>
              <Link href="/blog" className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-amber-300'} transition-all duration-300 font-medium`}>
                Blog
              </Link>
              <Link href="/notes" className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-amber-300'} transition-all duration-300 font-medium`}>
                Notes
              </Link>
              <Link href="/contact" className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-amber-300'} transition-all duration-300 font-medium`}>
                Contact
              </Link>
            </div>
          </div>

          {/* Search Bar and Login/Signup */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses, tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 shadow-sm"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </form>

            {/* Login/Signup Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link 
                href="/login" 
                className={`${isScrolled ? 'text-indigo-600 hover:text-indigo-800' : 'text-white hover:text-amber-300'} transition-all duration-300 font-medium`}
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-5 py-2 rounded-full hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden ${isScrolled ? 'text-gray-600 hover:text-indigo-600' : 'text-white hover:text-amber-300'} transition-all duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-3">
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search courses, tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 shadow-sm"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/courses" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium">
                Courses
              </Link>
              <Link href="/tutorials" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium">
                Tutorials
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium">
                Blog
              </Link>
              <Link href="/notes" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium">
                Notes
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium">
                Contact
              </Link>
              <div className="flex items-center space-x-3 pt-2">
                <Link 
                  href="/login" 
                  className="text-indigo-600 hover:text-indigo-800 transition-all duration-300 font-medium"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-5 py-2 rounded-full hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 