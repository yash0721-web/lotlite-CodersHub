import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Vikash Tech Solutions',
  description: 'Privacy policy for Vikash Tech Solutions platform and services.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including when you create an account, make a purchase, or communicate with us. This may include your name, email address, and payment information.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p>We do not share your personal information with third parties except as described in this privacy policy. We may share your information with service providers who assist us in operating our website and conducting our business.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information.</p>
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