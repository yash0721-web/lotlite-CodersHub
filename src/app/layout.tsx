import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vikash Tech Solutions - Learn Coding the Right Way",
  description: "Learn coding with practical exercises and real-world projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <div className="pt-12">
          {children}
        </div>
        
        {/* WhatsApp Button */}
        <WhatsAppButton />
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Main</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="relative group hover:text-purple-400">
                    <span>Home</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link></li>
                  <li><Link href="/contact" className="relative group hover:text-purple-400">
                    <span>Contact</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link></li>
                  <li><Link href="/work-with-us" className="relative group hover:text-purple-400">
                    <span>Work With Us</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Learn</h3>
                <ul className="space-y-2">
                  <li><Link href="/courses" className="relative group hover:text-purple-400">
                    <span>Courses</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link></li>
                  <li><Link href="/tutorials" className="relative group hover:text-purple-400">
                    <span>Tutorials</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link></li>
                  <li><Link href="/notes" className="relative group hover:text-purple-400">
                    <span>Notes</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/terms" className="relative group hover:text-purple-400">
                    <span>Terms</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link></li>
                  <li><Link href="/privacy" className="relative group hover:text-purple-400">
                    <span>Privacy</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link></li>
                  <li><Link href="/cookies" className="relative group hover:text-purple-400">
                    <span>Cookies</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link></li>
                  <li><Link href="/accessibility" className="relative group hover:text-purple-400">
                    <span>Accessibility</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Social</h3>
                <ul className="space-y-2">
                  <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="relative group hover:text-purple-400">
                    <span>GitHub</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a></li>
                  <li><a href="https://www.linkedin.com/in/vikash-dubey-517461262/" target="_blank" rel="noopener noreferrer" className="relative group hover:text-purple-400">
                    <span>LinkedIn</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a></li>
                  <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="relative group hover:text-purple-400">
                    <span>YouTube</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">
                Made in India
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
