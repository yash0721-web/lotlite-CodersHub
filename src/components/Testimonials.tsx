"use client";

import Image from 'next/image';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Frontend Developer',
    company: 'Tech Solutions India',
    image: '/Images/testimonial1.jpg',
    quote: 'CodersHub transformed my career. The practical approach and real-world projects helped me land my dream job at a top tech company.',
    rating: 5
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    role: 'Full Stack Developer',
    company: 'Digital Innovations',
    image: '/Images/testimonial2.jpg',
    quote: 'As someone with no prior coding experience, CodersHub made learning to code accessible and enjoyable. The community support is incredible.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ananya Reddy',
    role: 'Data Scientist',
    company: 'AI Research Labs',
    image: '/Images/testimonial3.jpg',
    quote: 'The data science courses at CodersHub are comprehensive and up-to-date with industry standards. I learned more in 3 months than I did in a year of self-study.',
    rating: 5
  },
  {
    id: 4,
    name: 'Arjun Kumar',
    role: 'Mobile App Developer',
    company: 'AppCraft Solutions',
    image: '/Images/testimonial4.jpg',
    quote: 'The mobile development track helped me build my first app from scratch. The mentors are responsive and provide valuable feedback.',
    rating: 4
  },
  {
    id: 5,
    name: 'Meera Gupta',
    role: 'Backend Developer',
    company: 'Cloud Systems',
    image: '/Images/testimonial5.jpg',
    quote: 'I was struggling with backend concepts until I found CodersHub. Their structured approach and hands-on projects made everything click.',
    rating: 5
  },
  {
    id: 6,
    name: 'Vikram Singh',
    role: 'DevOps Engineer',
    company: 'InfraTech Solutions',
    image: '/Images/testimonial6.jpg',
    quote: 'The DevOps course at CodersHub is gold. It covers everything from basics to advanced concepts with practical labs that mirror real-world scenarios.',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            What Our Students Say
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from our community of developers who have transformed their careers with CodersHub.
          </p>
        </div>

        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} ${i < testimonial.rating ? 'animate-pulse' : ''}`} 
                  />
                ))}
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="text-blue-200 absolute -top-2 -left-1 text-xl opacity-50" />
                <p className="text-gray-600 italic pl-6 pr-6">{testimonial.quote}</p>
                <FaQuoteRight className="text-blue-200 absolute -bottom-2 -right-1 text-xl opacity-50" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 bg-white p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <FaQuoteLeft className="text-blue-200 absolute -top-2 -left-1 text-xl opacity-50" />
                    <p className="text-gray-600 italic pl-6 pr-6">{testimonial.quote}</p>
                    <FaQuoteRight className="text-blue-200 absolute -bottom-2 -right-1 text-xl opacity-50" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 