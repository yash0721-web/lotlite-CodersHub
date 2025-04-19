"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaFilter, FaArrowRight } from 'react-icons/fa';

const tutorials = [
  {
    id: 1,
    title: "HTML Tutorial",
    description: "The word hypertext markup language is composed of the words 'hypertext' and 'markup language'. HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.",
    thumbnail: "/Images/html.png",
    slug: "html-tutorial",
    category: "Web Development",
    featured: true,
    createdAt: "2024-03-15"
  },
  {
    id: 2,
    title: "CSS Tutorial",
    description: "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
    thumbnail: "/Images/css-3.png",
    slug: "css-tutorial",
    category: "Web Development",
    featured: true,
    createdAt: "2024-03-14"
  },
  {
    id: 3,
    title: "JavaScript Tutorial",
    description: "JavaScript is a lightweight, cross-platform, object-oriented programming language. It is used to make web pages interactive and provide online programs, including video games.",
    thumbnail: "/Images/js.png",
    slug: "javascript-tutorial",
    category: "Web Development",
    featured: true,
    createdAt: "2024-03-13"
  },
  {
    id: 4,
    title: "Python Tutorial",
    description: "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation.",
    thumbnail: "/Images/python.png",
    slug: "python-tutorial",
    category: "Programming",
    featured: false,
    createdAt: "2024-03-12"
  },
  {
    id: 5,
    title: "React JS Tutorial",
    description: "React is an open-source front-end JavaScript library. This series will cover React from the basics to advanced concepts, including hooks, context API, and more.",
    thumbnail: "/Images/structure.png",
    slug: "react-tutorial",
    category: "Web Development",
    featured: false,
    createdAt: "2024-03-11"
  },
  {
    id: 6,
    title: "Java Tutorial",
    description: "Java is a programming language, created in 1995. More than 3 billion devices run Java. It is used for mobile applications, desktop applications, web applications, and more.",
    thumbnail: "/Images/java.png",
    slug: "java-tutorial",
    category: "Programming",
    featured: false,
    createdAt: "2024-03-10"
  },
  {
    id: 7,
    title: "C++ Tutorial",
    description: "C++ is a general-purpose programming language that is popular for its efficiency and performance. It is used for mobile applications, desktop applications, web applications, and more.",
    thumbnail: "/Images/c-.png",
    slug: "c++-tutorial",
    category: "Programming",
    featured: false,
    createdAt: "2024-03-09"
  },
  {
    id: 8,
    title: "C# Tutorial",
    description: "C# is a general-purpose programming language that is popular for its efficiency and performance. It is used for mobile applications, desktop applications, web applications, and more.",
    thumbnail: "/Images/c-sharp.png",
    slug: "c-sharp-tutorial",
    category: "Programming",
    featured: false,
    createdAt: "2024-03-08"
  },
  {
    id: 9,
    title: "MySQL Tutorial",
    description: "SQL is a standard language for storing, manipulating, and retrieving data in databases. Our SQL tutorial will teach you how to use SQL to create, modify, and query databases.",
    thumbnail: "/Images/mysql.png",
    slug: "mysql-tutorial",
    category: "Database",
    featured: false,
    createdAt: "2024-03-07"
  }
];

const categories = [
  "All Tutorials",
  "Web Development",
  "Programming",
  "Database"
];

export default function TutorialsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Tutorials");
  const [filteredTutorials, setFilteredTutorials] = useState(tutorials);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter tutorials based on search and category
  useEffect(() => {
    let result = tutorials;
    
    // Filter by category
    if (selectedCategory !== "All Tutorials") {
      result = result.filter(tutorial => tutorial.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(tutorial => 
        tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by active filter (featured, newest, etc.)
    if (activeFilter === "featured") {
      result = result.filter(tutorial => tutorial.featured);
    } else if (activeFilter === "newest") {
      result = [...result].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    
    setFilteredTutorials(result);
  }, [searchTerm, selectedCategory, activeFilter]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Tutorials
            </h1>
            <p className="text-xl mb-8 text-amber-100">
              Start your coding journey with our comprehensive tutorials. Learn from scratch and build your skills step by step.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for tutorials, topics, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 pr-4 rounded-full border-2 border-indigo-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 shadow-lg"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Categories Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaFilter className="text-indigo-600" />
                <span className="font-medium text-gray-700">Filters:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                      selectedCategory === category
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Sort by:</span>
              <select 
                title="Sort tutorials by"
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                <option value="all">All Tutorials</option>
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
            </div>
          ) : filteredTutorials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Link href={`/tutorials/${tutorial.slug}`} className="block">
                    <div className={`relative h-48 ${tutorial.slug === 'mysql-tutorial' ? 'bg-white' : 'bg-gray-100'}`}>
                      <img
                        src={tutorial.thumbnail}
                        alt={tutorial.title}
                        className={`absolute inset-0 w-full h-full ${
                          tutorial.slug === 'mysql-tutorial' 
                            ? 'object-contain p-2' 
                            : 'object-contain p-4'
                        }`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/Images/placeholder.png';
                        }}
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{tutorial.title}</h2>
                    <p className="text-gray-600 mb-4">{tutorial.description}</p>
                    <Link
                      href={`/tutorials/${tutorial.slug}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Start Learning
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No tutorials found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Tutorials");
                  setActiveFilter("all");
                }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 