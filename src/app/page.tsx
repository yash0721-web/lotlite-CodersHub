import Link from 'next/link';
import { FaAmazon, FaGoogle, FaMicrosoft, FaPaypal } from 'react-icons/fa';
import { SiGoldmansachs, SiHitachi } from 'react-icons/si';
import { FaCode, FaDatabase, FaBrain } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to CodersHub</h1>
            <p className="text-xl mb-8">Learn coding the right way</p>
            <div className="flex gap-4 justify-center">
              <Link href="/courses" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
                Explore Courses
              </Link>
              <Link href="/blog"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
                Read Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">100+</h3>
              <p className="text-gray-600">Courses</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">500K+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">5.0</h3>
              <p className="text-gray-600">Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Code Smarter with Real-World Practice</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At CodersHub, you don&apos;t just learn code — you engage in practical exercises that reflect real-world scenarios. 
              From beginner-friendly lessons to advanced courses trusted by professionals, we prepare you for real-world projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaCode className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">Learn HTML, CSS, JavaScript and modern frameworks to build responsive websites and web applications.</p>
              <Link href="/web-development" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                Learn More →
              </Link>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <FaDatabase className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Data Science & AI</h3>
              <p className="text-gray-600 mb-6">Master Python, data analysis, machine learning and artificial intelligence with hands-on projects.</p>
              <Link href="/data-science" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                Learn More →
              </Link>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FaBrain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Data Structures & Algorithms</h3>
              <p className="text-gray-600 mb-6">Learn DSA and crack interviews at top companies like Google and Microsoft.</p>
              <Link href="/dsa" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Students Work At</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <FaAmazon className="w-16 h-16 text-gray-600 mx-auto" />
            <FaGoogle className="w-16 h-16 text-gray-600 mx-auto" />
            <FaMicrosoft className="w-16 h-16 text-gray-600 mx-auto" />
            <SiGoldmansachs className="w-16 h-16 text-gray-600 mx-auto" />
            <FaPaypal className="w-16 h-16 text-gray-600 mx-auto" />
            <SiHitachi className="w-16 h-16 text-gray-600 mx-auto" />
          </div>
        </div>
      </section>
    </main>
  );
}
