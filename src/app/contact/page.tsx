"use client";

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Images/Hero-Banner Contact.jpg" 
            alt="Customer service representative" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-amber-400 mb-4">Contact Us</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Have questions or feedback? We&apos;d love to hear from you. Fill out the form below or reach out to us directly.
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex justify-end">
            <div className="w-full md:w-1/2 bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-amber-400 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/70"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/70"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/70"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/70"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full backdrop-blur-sm text-white bg-amber-400 py-3 px-6 rounded-md transition duration-300 border border-white/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-purple-200">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">We're Here To Help</h2>
            <p className="text-purple-700 mb-8">
              Our dedicated support team is ready to assist you with any questions or concerns. 
              Feel free to reach out through any of our contact channels below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaEnvelope size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800">Email</h3>
                  <p className="text-purple-700">support@codershub.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaPhone size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800">Phone</h3>
                  <p className="text-purple-700">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaMapMarkerAlt size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800">Address</h3>
                  <p className="text-purple-700">123 Coding Street, Tech City, TC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaClock size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800">Working Hours</h3>
                  <p className="text-purple-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}