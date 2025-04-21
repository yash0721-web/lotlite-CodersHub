import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | CodersHub',
  description: 'Cookie policy for CodersHub platform and services.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Cookies</h2>
              <p>We use cookies to remember your preferences, understand how you use our website, and improve your browsing experience. This includes essential cookies for site functionality and optional cookies for analytics and personalization.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Essential cookies for basic site functionality</li>
                <li>Analytics cookies to understand user behavior</li>
                <li>Preference cookies to remember your settings</li>
                <li>Marketing cookies for targeted advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Managing Cookies</h2>
              <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
            </section>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 