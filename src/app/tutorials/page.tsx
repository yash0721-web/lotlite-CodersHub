"use client";

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const tutorials = [
  {
    id: 1,
    title: "HTML Tutorial",
    description: "The word hypertext markup language is composed of the words 'hypertext' and 'markup language'. HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.",
    thumbnail: "/Images/html.png",
    slug: "html-tutorial"
  },
  {
    id: 2,
    title: "CSS Tutorial",
    description: "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
    thumbnail: "/Images/css-3.png",
    slug: "css-tutorial"
  },
  {
    id: 3,
    title: "JavaScript Tutorial",
    description: "JavaScript is a lightweight, cross-platform, object-oriented programming language. It is used to make web pages interactive and provide online programs, including video games.",
    thumbnail: "/Images/js.png",
    slug: "javascript-tutorial"
  },
  {
    id: 4,
    title: "Python Tutorial",
    description: "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation.",
    thumbnail: "/Images/python.png",
    slug: "python-tutorial"
  },
  {
    id: 5,
    title: "React JS Tutorial",
    description: "React is an open-source front-end JavaScript library. This series will cover React from the basics to advanced concepts, including hooks, context API, and more.",
    thumbnail: "/Images/structure.png",
    slug: "react-tutorial"
  },
  {
    id: 6,
    title: "Java Tutorial",
    description: "Java is a programming language, created in 1995. More than 3 billion devices run Java. It is used for mobile applications, desktop applications, web applications, and more.",
    thumbnail: "/Images/java.png",
    slug: "java-tutorial"
  },
  {
    id: 7,
    title: "C++ Tutorial",
    description: "C++ is a general-purpose programming language that is popular for its efficiency and performance. It is used for mobile applications, desktop applications, web applications, and more.",
    thumbnail: "/Images/c-.png",
    slug: "c++-tutorial"
  },
  {
    id: 8,
    title: "C# Tutorial",
    description: "C# is a general-purpose programming language that is popular for its efficiency and performance. It is used for mobile applications, desktop applications, web applications, and more.",
    thumbnail: "/Images/c-sharp.png",
    slug: "c-sharp-tutorial"
  } ,
  {
    id: 9,
    title: "MySQL Tutorial",
    description: "SQL is a standard language for storing, manipulating, and retrieving data in databases. Our SQL tutorial will teach you how to use SQL to create, modify, and query databases.",
    thumbnail: "/Images/mysql.png",
    slug: "mysql-tutorial"
  }
];

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-4">Tutorials</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Start your coding journey with our comprehensive tutorials. Learn from scratch and build your skills step by step.
            </p>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
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
        </div>
      </section>
    </div>
  );
} 