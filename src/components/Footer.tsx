import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-gradient-to-br from-blue-600 to-emerald-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">X</span>
                </div>
              </div>
              <span className="text-2xl font-bold">Vigilix</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Streamline your kitchen compliance with real-time alerts, smart checklists, 
              and auto-logging sensors. Stay audit-ready, anytime, anywhere.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>for food safety</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:info@vigilix.tech" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@vigilix.tech
                </a>
              </li>
              <li>
                <a 
                  href="tel:+447823707962" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +44 7823 707962
                </a>
              </li>
              <li className="text-gray-400">United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Vigilix. All rights reserved. | Built for modern food service operations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;