import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo and Main Links */}
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  CodersHub
                </Link>
                <div className="hidden md:flex space-x-6">
                  <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition">
                    Courses
                  </Link>
                  <Link href="/tutorials" className="text-gray-600 hover:text-blue-600 transition">
                    Tutorials
                  </Link>
                  <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition">
                    Blog
                  </Link>
                  <Link href="/notes" className="text-gray-600 hover:text-blue-600 transition">
                    Notes
                  </Link>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Start Learning Button */}
              <Link 
                href="/start-learning" 
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition hidden md:block"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
