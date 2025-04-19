import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodersHub - Learn Coding the Right Way",
  description: "Learn coding with practical exercises and real-world projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <div className="pt-20">
          {children}
        </div>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Main</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-purple-400">Home</Link></li>
                  <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
                  <li><Link href="/work-with-us" className="hover:text-purple-400">Work With Us</Link></li>
                  <li><Link href="/my-gear" className="hover:text-purple-400">My Gear</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Learn</h3>
                <ul className="space-y-2">
                  <li><Link href="/courses" className="hover:text-purple-400">Courses</Link></li>
                  <li><Link href="/tutorials" className="hover:text-purple-400">Tutorials</Link></li>
                  <li><Link href="/notes" className="hover:text-purple-400">Notes</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/terms" className="hover:text-purple-400">Terms</Link></li>
                  <li><Link href="/privacy" className="hover:text-purple-400">Privacy</Link></li>
                  <li><Link href="/refund" className="hover:text-purple-400">Refund</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Social</h3>
                <ul className="space-y-2">
                  <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">GitHub</a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Twitter</a></li>
                  <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">YouTube</a></li>
                  <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Facebook</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">
                Made in India | Inspired by <a href="https://www.codewithharry.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">CodersHub</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
