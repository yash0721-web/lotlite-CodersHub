import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Accessibility Statement | Vikash Tech Solutions',
  description: 'Accessibility statement for Vikash Tech Solutions platform and services.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Accessibility Policy</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Our Commitment</h2>
              <p>Vikash Tech Solutions is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Accessibility Standards</h2>
              <p>We follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to ensure our website is accessible to all users. This includes providing text alternatives for non-text content, ensuring content is keyboard accessible, and maintaining proper color contrast.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Features and Accommodations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keyboard navigation support</li>
                <li>Screen reader compatibility</li>
                <li>Text size adjustment options</li>
                <li>Color contrast compliance</li>
                <li>Alternative text for images</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Feedback and Support</h2>
              <p>We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers or if you need assistance accessing any part of our site.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Continuous Improvement</h2>
              <p>We are committed to regularly reviewing and updating our website to ensure it remains accessible to all users. Our team undergoes regular training on accessibility best practices.</p>
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