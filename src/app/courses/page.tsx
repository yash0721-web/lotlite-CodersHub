"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaFilter, FaStar, FaClock, FaUserGraduate, FaCode, FaDatabase, FaBrain, FaRocket, FaLaptopCode, FaMobile, FaServer, FaShieldAlt, FaCloud } from 'react-icons/fa';
import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiMongodb, SiDocker, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiGraphql, SiFirebase } from 'react-icons/si';

// Course data
const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB in one comprehensive course.",
    image: "/course-web-dev.jpg",
    instructor: "John Doe",
    rating: 4.8,
    students: 12500,
    duration: "48 hours",
    level: "Beginner to Advanced",
    price: 149,
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    featured: true
  },
  {
    id: 2,
    title: "Python for Data Science & Machine Learning",
    description: "Learn Python programming, data analysis, visualization, and machine learning algorithms.",
    image: "/course-python.jpg",
    instructor: "Jane Smith",
    rating: 4.9,
    students: 9800,
    duration: "36 hours",
    level: "Intermediate",
    price: 179,
    category: "Data Science",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow"],
    featured: true
  },
  {
    id: 3,
    title: "Advanced React & Redux Masterclass",
    description: "Build scalable React applications with Redux, hooks, and advanced patterns.",
    image: "/course-react.jpg",
    instructor: "Mike Johnson",
    rating: 4.7,
    students: 7500,
    duration: "24 hours",
    level: "Advanced",
    price: 129,
    category: "Web Development",
    tags: ["React", "Redux", "TypeScript", "Next.js", "GraphQL"],
    featured: false
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    description: "Create cross-platform mobile applications for iOS and Android using React Native.",
    image: "/course-mobile.jpg",
    instructor: "Sarah Williams",
    rating: 4.6,
    students: 6200,
    duration: "30 hours",
    level: "Intermediate",
    price: 159,
    category: "Mobile Development",
    tags: ["React Native", "JavaScript", "iOS", "Android", "Firebase"],
    featured: false
  },
  {
    id: 5,
    title: "DevOps & Cloud Computing",
    description: "Learn Docker, Kubernetes, AWS, and CI/CD pipelines for modern development.",
    image: "/course-devops.jpg",
    instructor: "David Brown",
    rating: 4.8,
    students: 5300,
    duration: "42 hours",
    level: "Intermediate to Advanced",
    price: 199,
    category: "DevOps",
    tags: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    featured: true
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    description: "Master the basics of cybersecurity, ethical hacking, and network security.",
    image: "/course-security.jpg",
    instructor: "Emily Davis",
    rating: 4.7,
    students: 4800,
    duration: "28 hours",
    level: "Beginner to Intermediate",
    price: 149,
    category: "Cybersecurity",
    tags: ["Security", "Ethical Hacking", "Network Security", "Cryptography"],
    featured: false
  },
  {
    id: 7,
    title: "Full-Stack Development with MERN Stack",
    description: "Build complete web applications with MongoDB, Express, React, and Node.js.",
    image: "/course-mern.jpg",
    instructor: "Alex Thompson",
    rating: 4.9,
    students: 8900,
    duration: "40 hours",
    level: "Intermediate",
    price: 169,
    category: "Web Development",
    tags: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
    featured: true
  },
  {
    id: 8,
    title: "UI/UX Design for Developers",
    description: "Learn to create beautiful, user-friendly interfaces and improve user experience.",
    image: "/course-uiux.jpg",
    instructor: "Lisa Chen",
    rating: 4.6,
    students: 4100,
    duration: "22 hours",
    level: "Beginner to Intermediate",
    price: 99,
    category: "Design",
    tags: ["UI Design", "UX Design", "Figma", "Adobe XD", "Prototyping"],
    featured: false
  }
];

// Categories for filter
const categories = [
  "All Courses",
  "Web Development",
  "Data Science",
  "Mobile Development",
  "DevOps",
  "Cybersecurity",
  "Design"
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter courses based on search and category
  useEffect(() => {
    let result = courses;
    
    // Filter by category
    if (selectedCategory !== "All Courses") {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filter by active filter (featured, newest, etc.)
    if (activeFilter === "featured") {
      result = result.filter(course => course.featured);
    } else if (activeFilter === "newest") {
      // Sort by newest (assuming id is higher for newer courses)
      result = [...result].sort((a, b) => b.id - a.id);
    } else if (activeFilter === "popular") {
      // Sort by number of students
      result = [...result].sort((a, b) => b.students - a.students);
    } else if (activeFilter === "price-low") {
      // Sort by price low to high
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (activeFilter === "price-high") {
      // Sort by price high to low
      result = [...result].sort((a, b) => b.price - a.price);
    }
    
    setFilteredCourses(result);
  }, [searchTerm, selectedCategory, activeFilter]);

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
              Explore Our Courses
            </h1>
            <p className="text-xl mb-8 text-amber-100">
              Discover a wide range of programming courses designed to help you master new skills and advance your career.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for courses, topics, or skills..."
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

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
            
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Sort by:</span>
              <select 
                title="Sort by"
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                <option value="all">All Courses</option>
                <option value="popular">Most Popular</option>
                <option value="recent">Most Recent</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
            </div>
          ) : filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <div 
                  key={course.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group h-full flex flex-col"
                >
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-800 opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="absolute top-3 left-3 bg-amber-400 text-indigo-900 px-2 py-0.5 rounded-full text-xs font-bold">
                      {course.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white text-indigo-900 px-2 py-0.5 rounded-full text-xs font-bold flex items-center">
                      <FaStar className="text-amber-400 mr-1" /> {course.rating}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-3">
                        <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                        <p className="text-xs opacity-90">{course.instructor}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center text-gray-600 text-xs">
                        <FaClock className="mr-1" /> {course.duration}
                      </div>
                      <div className="flex items-center text-gray-600 text-xs">
                        <FaUserGraduate className="mr-1" /> {course.students.toLocaleString()} students
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2 flex-grow">{course.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {course.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {course.tags.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-md text-xs font-medium">
                          +{course.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto">
                      <div className="text-xl font-bold text-indigo-900 flex items-center">
                        <span className="text-amber-500 mr-1">₹</span> {course.price}
                      </div>
                      <Link 
                        href={`/courses/${course.id}`}
                        className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-3 py-1.5 rounded-full text-sm font-semibold hover:from-amber-500 hover:to-yellow-400 transition-all duration-300"
                      >
                        View Course
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No courses found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Courses");
                  setActiveFilter("featured");
                }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Browse by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform">
                <FaCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm">12 Courses</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform">
                <FaDatabase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">Data Science</h3>
              <p className="text-gray-600 text-sm">8 Courses</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform">
                <FaMobile className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">Mobile Development</h3>
              <p className="text-gray-600 text-sm">6 Courses</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform">
                <FaRocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">DevOps</h3>
              <p className="text-gray-600 text-sm">5 Courses</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform">
                <FaShieldAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">Cybersecurity</h3>
              <p className="text-gray-600 text-sm">4 Courses</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform">
                <FaLaptopCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">UI/UX Design</h3>
              <p className="text-gray-600 text-sm">3 Courses</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform">
                <FaServer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">Backend Development</h3>
              <p className="text-gray-600 text-sm">7 Courses</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform">
                <FaCloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">Cloud Computing</h3>
              <p className="text-gray-600 text-sm">4 Courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Technologies You'll Learn</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiJavascript className="w-12 h-12 text-yellow-400 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">JavaScript</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiPython className="w-12 h-12 text-blue-400 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Python</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiReact className="w-12 h-12 text-blue-400 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">React</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiNodedotjs className="w-12 h-12 text-green-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Node.js</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiMongodb className="w-12 h-12 text-green-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">MongoDB</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiDocker className="w-12 h-12 text-blue-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Docker</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiTypescript className="w-12 h-12 text-blue-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">TypeScript</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiNextdotjs className="w-12 h-12 text-white mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Next.js</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiTailwindcss className="w-12 h-12 text-cyan-400 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Tailwind CSS</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiRedux className="w-12 h-12 text-purple-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Redux</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiGraphql className="w-12 h-12 text-pink-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">GraphQL</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiFirebase className="w-12 h-12 text-yellow-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Firebase</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-indigo-900">Ready to Start Learning?</h2>
            <p className="text-gray-600 text-xl mb-8">
              Join thousands of students who have already transformed their careers with our courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup" 
                className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-8 py-4 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Started Today
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 