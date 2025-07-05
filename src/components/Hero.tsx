import React from 'react';
import { ArrowRight,Play } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const element = document.getElementById('demo-video');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg" 
          alt="Modern kitchen team using tablets for food safety"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-blue-50/80"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              Cloud-Based Food Safety Platform
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stay One Step{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
                Ahead
              </span>{' '}
              on Food Safety
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Streamline your kitchen compliance with real-time alerts, smart checklists, 
              and auto-logging sensors. Keep your business audit-ready, anytime, anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center font-medium text-lg group"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={scrollToDemo}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center justify-center font-medium text-lg group"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-600">Audit Ready</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="dsahboard.jpg" 
                alt="Chef using tablet in modern kitchen"
                className="w-full h-80 object-cover rounded-lg"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-lg shadow-lg">
                <div className="text-xs font-medium">Temperature Alert</div>
                <div className="text-lg font-bold">2°C</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-lg shadow-lg">
                <div className="text-xs font-medium">Tasks Complete</div>
                <div className="text-lg font-bold">8/10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;