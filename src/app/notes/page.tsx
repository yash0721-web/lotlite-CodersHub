"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaFilter, FaBook, FaCode, FaDatabase, FaBrain, FaRocket, FaLaptopCode, FaMobile, FaServer, FaShieldAlt, FaCloud, FaPlus, FaEdit, FaTrash, FaDownload, FaShare, FaStar, FaRegStar, FaBookmark, FaRegBookmark, FaHeart } from 'react-icons/fa';
import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiMongodb, SiDocker, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiGraphql, SiFirebase } from 'react-icons/si';

// Notes data
const mockNotes: Note[] = [
  {
    id: 1,
    title: "React Hooks Deep Dive",
    content: "A comprehensive guide to React Hooks including useState, useEffect, and custom hooks.",
    category: "React",
    tags: ["react", "hooks", "javascript"],
    likes: 42,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-15",
    updatedAt: "2024-03-15",
    price: 85
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    content: "Essential TypeScript patterns and practices for better type safety.",
    category: "TypeScript",
    tags: ["typescript", "javascript", "programming"],
    likes: 38,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-14",
    updatedAt: "2024-03-14",
    price: 80
  },
  {
    id: 3,
    title: "Next.js 13 Features",
    content: "Exploring the new features in Next.js 13.",
    category: "Next.js",
    tags: ["nextjs", "react", "javascript"],
    likes: 56,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-13",
    updatedAt: "2024-03-13",
    price: 90
  },
  {
    id: 4,
    title: "Python Data Structures",
    content: "Complete guide to Python data structures and algorithms.",
    category: "Python",
    tags: ["python", "data-structures", "algorithms"],
    likes: 45,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-12",
    updatedAt: "2024-03-12",
    price: 85
  },
  {
    id: 5,
    title: "Node.js Backend Development",
    content: "Building scalable backend applications with Node.js.",
    category: "Backend",
    tags: ["nodejs", "javascript", "backend"],
    likes: 49,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-11",
    updatedAt: "2024-03-11",
    price: 88
  },
  {
    id: 6,
    title: "MongoDB Database Design",
    content: "Learn MongoDB schema design and best practices.",
    category: "Database",
    tags: ["mongodb", "database", "nosql"],
    likes: 37,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-10",
    updatedAt: "2024-03-10",
    price: 82
  },
  {
    id: 7,
    title: "Docker Containerization",
    content: "Master Docker containerization and deployment.",
    category: "DevOps",
    tags: ["docker", "devops", "containers"],
    likes: 51,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-09",
    updatedAt: "2024-03-09",
    price: 87
  },
  {
    id: 8,
    title: "Machine Learning Basics",
    content: "Introduction to machine learning algorithms and concepts.",
    category: "Data Science",
    tags: ["machine-learning", "python", "ai"],
    likes: 63,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-08",
    updatedAt: "2024-03-08",
    price: 90
  },
  {
    id: 9,
    title: "React Native Mobile Apps",
    content: "Building cross-platform mobile applications with React Native.",
    category: "Mobile Development",
    tags: ["react-native", "mobile", "javascript"],
    likes: 47,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-07",
    updatedAt: "2024-03-07",
    price: 85
  },
  {
    id: 10,
    title: "Web Security Fundamentals",
    content: "Essential web security concepts and best practices.",
    category: "Cybersecurity",
    tags: ["security", "web", "cybersecurity"],
    likes: 44,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-06",
    updatedAt: "2024-03-06",
    price: 88
  },
  {
    id: 11,
    title: "GraphQL API Design",
    content: "Building efficient APIs with GraphQL.",
    category: "Backend",
    tags: ["graphql", "api", "backend"],
    likes: 39,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-05",
    updatedAt: "2024-03-05",
    price: 83
  },
  {
    id: 12,
    title: "AWS Cloud Services",
    content: "Comprehensive guide to AWS cloud services and deployment.",
    category: "DevOps",
    tags: ["aws", "cloud", "devops"],
    likes: 55,
    isLiked: false,
    isBookmarked: false,
    createdAt: "2024-03-04",
    updatedAt: "2024-03-04",
    price: 90
  }
];

// Categories for filter
const categories = [
  "All Notes",
  "Web Development",
  "Data Science",
  "Backend Development",
  "DevOps",
  "Database",
  "Mobile Development",
  "Cybersecurity"
];

// Define Note type
interface Note {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
  likes: number;
  isLiked: boolean;
  isBookmarked: boolean;
  createdAt: string;
  updatedAt: string;
  price: number;
}

export default function NotesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Notes");
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(mockNotes);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [notesList, setNotesList] = useState<Note[]>(mockNotes);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter notes based on search and category
  useEffect(() => {
    let result = notesList;
    
    // Filter by category
    if (selectedCategory !== "All Notes") {
      result = result.filter(note => note.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(note => 
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filter by active filter
    if (activeFilter === "popular") {
      result = [...result].sort((a, b) => b.likes - a.likes);
    } else if (activeFilter === "recent") {
      result = [...result].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    } else if (activeFilter === "bookmarked") {
      result = result.filter(note => note.isBookmarked);
    }
    
    setFilteredNotes(result);
  }, [searchTerm, selectedCategory, activeFilter, notesList]);

  // Handle like toggle
  const handleLikeToggle = (id: number) => {
    setNotesList(prevNotes =>
      prevNotes.map(note =>
        note.id === id
          ? { ...note, isLiked: !note.isLiked, likes: note.isLiked ? note.likes - 1 : note.likes + 1 }
          : note
      )
    );
  };

  // Handle bookmark toggle
  const handleBookmarkToggle = (id: number) => {
    setNotesList(prevNotes =>
      prevNotes.map(note =>
        note.id === id
          ? { ...note, isBookmarked: !note.isBookmarked }
          : note
      )
    );
  };

  // Update the sorting logic to handle number types
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (activeFilter === 'popularity') {
      return (b.likes as number) - (a.likes as number);
    }
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  return (
    <main className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Premium Study Notes
            </h1>
            <p className="text-xl mb-8 text-amber-100">
              Access comprehensive study notes, cheat sheets, and resources to enhance your learning experience.
              All notes priced between ₹80-90 for maximum accessibility.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for notes, topics, or keywords..."
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
                title="Sort notes by"
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                <option value="all">All Notes</option>
                <option value="popular">Most Popular</option>
                <option value="recent">Most Recent</option>
                <option value="bookmarked">Bookmarked</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Notes Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-900">
              {selectedCategory === "All Notes" ? "All Study Notes" : `${selectedCategory} Notes`}
            </h2>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-4 py-2 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 flex items-center"
            >
              <FaPlus className="mr-2" /> Create Note
            </button>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
            </div>
          ) : sortedNotes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedNotes.map((note) => (
                <div key={note.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{note.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{note.content}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        title={`${note.isLiked ? 'Unlike' : 'Like'} note`}
                        onClick={() => handleLikeToggle(note.id)}
                        className={`p-2 rounded-full ${
                          note.isLiked ? 'text-red-500' : 'text-gray-400'
                        } hover:bg-gray-100`}
                      >
                        <FaHeart />
                      </button>
                      <button
                        title={`${note.isBookmarked ? 'Remove bookmark' : 'Bookmark'} note`}
                        onClick={() => handleBookmarkToggle(note.id)}
                        className={`p-2 rounded-full ${
                          note.isBookmarked ? 'text-blue-500' : 'text-gray-400'
                        } hover:bg-gray-100`}
                      >
                        <FaBookmark />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaHeart className={note.isLiked ? "text-red-500" : ""} />
                        {note.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaBookmark className={note.isBookmarked ? "text-blue-500" : ""} />
                      </span>
                    </div>
                    <div className="text-lg font-bold text-indigo-600">
                      ₹{note.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No notes found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Notes");
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

      {/* Create Note Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-indigo-900">Create New Note</h3>
                <button 
                  title="Close modal"
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter note title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select 
                    title="Select note category"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select a category</option>
                    {categories.filter(cat => cat !== "All Notes").map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                  <input 
                    type="number" 
                    min="80"
                    max="90"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter price between ₹80-90"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows={4}
                    placeholder="Enter note description"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="JavaScript, React, Web Development"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows={8}
                    placeholder="Enter note content (Markdown supported)"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button 
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 rounded-md font-semibold hover:from-amber-500 hover:to-yellow-400 transition-all duration-300"
              >
                Create Note
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 