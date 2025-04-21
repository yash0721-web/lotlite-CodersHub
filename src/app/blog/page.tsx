"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaFilter, FaHeart, FaRegHeart, FaBookmark, FaRegBookmark, FaClock, FaUser, FaTag, FaArrowRight, FaCode, FaDatabase, FaBrain, FaRocket, FaLaptopCode, FaMobile, FaServer, FaShieldAlt } from 'react-icons/fa';

// Define BlogPost interface
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  likes: number;
  isLiked: boolean;
  isBookmarked: boolean;
  readTime: string;
  createdAt: string;
  imageUrl: string;
}

// Mock blog posts data
const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to manage state and side effects in functional components.",
    content: "React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class...",
    author: "John Doe",
    category: "React",
    tags: ["react", "hooks", "javascript", "frontend"],
    likes: 42,
    isLiked: false,
    isBookmarked: false,
    readTime: "5 min read",
    createdAt: "2023-06-15",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "TypeScript Best Practices for 2023",
    excerpt: "Discover the latest TypeScript best practices to write more maintainable and type-safe code.",
    content: "TypeScript has become the standard for large-scale JavaScript applications. Here are the best practices for 2023...",
    author: "Jane Smith",
    category: "TypeScript",
    tags: ["typescript", "javascript", "programming"],
    likes: 38,
    isLiked: false,
    isBookmarked: false,
    readTime: "7 min read",
    createdAt: "2023-06-10",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Learn how to design and implement scalable REST APIs using Node.js and Express.",
    content: "Creating a scalable API is crucial for modern web applications. Here's how to do it with Node.js and Express...",
    author: "Alex Johnson",
    category: "Backend",
    tags: ["nodejs", "express", "api", "backend"],
    likes: 56,
    isLiked: false,
    isBookmarked: false,
    readTime: "10 min read",
    createdAt: "2023-06-05",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    excerpt: "A comprehensive guide to understanding the basics of machine learning algorithms.",
    content: "Machine learning is transforming the way we build applications. Learn the fundamentals...",
    author: "Sarah Wilson",
    category: "AI & ML",
    tags: ["machine-learning", "python", "ai", "data-science"],
    likes: 45,
    isLiked: false,
    isBookmarked: false,
    readTime: "8 min read",
    createdAt: "2023-06-01",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    title: "Docker for Beginners",
    excerpt: "Get started with Docker containers and learn how to containerize your applications.",
    content: "Docker has revolutionized how we deploy applications. Learn the basics of containerization...",
    author: "Mike Brown",
    category: "DevOps",
    tags: ["docker", "containers", "devops", "deployment"],
    likes: 39,
    isLiked: false,
    isBookmarked: false,
    readTime: "6 min read",
    createdAt: "2023-05-28",
    imageUrl: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: 6,
    title: "GraphQL vs REST: Which to Choose?",
    excerpt: "Compare GraphQL and REST APIs to decide which is better for your next project.",
    content: "Both GraphQL and REST have their strengths. Learn when to use each...",
    author: "Emily Davis",
    category: "API Design",
    tags: ["graphql", "rest", "api", "web-development"],
    likes: 51,
    isLiked: false,
    isBookmarked: false,
    readTime: "9 min read",
    createdAt: "2023-05-25",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 7,
    title: "Web Security Best Practices",
    excerpt: "Essential security measures to protect your web applications from common vulnerabilities.",
    content: "Security is crucial for web applications. Learn the best practices to keep your app safe...",
    author: "David Lee",
    category: "Security",
    tags: ["security", "web-security", "best-practices"],
    likes: 47,
    isLiked: false,
    isBookmarked: false,
    readTime: "7 min read",
    createdAt: "2023-05-20",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 8,
    title: "Mobile App Development with React Native",
    excerpt: "Build cross-platform mobile applications using React Native.",
    content: "React Native lets you build mobile apps for both iOS and Android. Learn how to get started...",
    author: "Lisa Chen",
    category: "Mobile",
    tags: ["react-native", "mobile", "javascript", "app-development"],
    likes: 43,
    isLiked: false,
    isBookmarked: false,
    readTime: "8 min read",
    createdAt: "2023-05-15",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 9,
    title: "Database Design Patterns",
    excerpt: "Learn common database design patterns and when to use them.",
    content: "Good database design is crucial for application performance. Explore common patterns...",
    author: "Tom Wilson",
    category: "Database",
    tags: ["database", "sql", "nosql", "design-patterns"],
    likes: 49,
    isLiked: false,
    isBookmarked: false,
    readTime: "10 min read",
    createdAt: "2023-05-10",
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

// Categories for filter
const categories = [
  "All Posts",
  "React",
  "TypeScript",
  "Backend",
  "AI & ML",
  "DevOps",
  "API Design",
  "Security",
  "Mobile",
  "Database"
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(mockBlogPosts);
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort blog posts based on active filter
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (activeFilter === "popular") {
      return b.likes - a.likes;
    } else if (activeFilter === "recent") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });

  // Handle like toggle
  const handleLikeToggle = (id: number) => {
    setBlogPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  // Handle bookmark toggle
  const handleBookmarkToggle = (id: number) => {
    setBlogPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id
          ? { ...post, isBookmarked: !post.isBookmarked }
          : post
      )
    );
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "React":
        return <FaCode className="w-5 h-5" />;
      case "TypeScript":
        return <FaCode className="w-5 h-5" />;
      case "Backend":
        return <FaServer className="w-5 h-5" />;
      case "AI & ML":
        return <FaBrain className="w-5 h-5" />;
      case "DevOps":
        return <FaRocket className="w-5 h-5" />;
      case "API Design":
        return <FaCode className="w-5 h-5" />;
      case "Security":
        return <FaShieldAlt className="w-5 h-5" />;
      case "Mobile":
        return <FaMobile className="w-5 h-5" />;
      case "Database":
        return <FaDatabase className="w-5 h-5" />;
      default:
        return <FaLaptopCode className="w-5 h-5" />;
    }
  };

  return (
    <main className="min-h-screen pt-8 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              CodersHub Blog
            </h1>
            <p className="text-xl mb-8 text-amber-100">
              Explore the latest insights, tutorials, and best practices in software development.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for articles, topics, or keywords..."
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
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 ${
                      selectedCategory === category
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {getCategoryIcon(category)}
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Sort by:</span>
              <select 
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                <option value="all">All Posts</option>
                <option value="popular">Most Popular</option>
                <option value="recent">Most Recent</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-900">
              {selectedCategory === "All Posts" ? "All Blog Posts" : `${selectedCategory} Posts`}
            </h2>
          </div>
          
          {sortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-fade-in group"
                  style={{ animationDelay: `${post.id * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      {getCategoryIcon(post.category)}
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FaUser className="mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <FaClock className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center gap-1"
                        >
                          <FaTag className="text-xs" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleLikeToggle(post.id)}
                          className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
                        >
                          {post.isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                          <span>{post.likes}</span>
                        </button>
                        
                        <button
                          onClick={() => handleBookmarkToggle(post.id)}
                          className="text-gray-500 hover:text-indigo-500 transition-colors"
                        >
                          {post.isBookmarked ? <FaBookmark className="text-indigo-500" /> : <FaRegBookmark />}
                        </button>
                      </div>
                      
                      <Link href={`/blog/${post.id}`} className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center group">
                        Read More <FaArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No posts found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Posts");
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
    </main>
  );
} 