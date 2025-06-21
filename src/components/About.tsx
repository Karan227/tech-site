import React from 'react';
import { Shield, Cloud, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">Vigilix</span>?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Vigilix is a cloud-based food safety platform built for kitchens, restaurants, 
            and foodservice providers to automate compliance and stay audit-ready – anytime, anywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Food Safety First</h3>
            <p className="text-gray-600">
              Comprehensive compliance tools that ensure your kitchen meets all health and safety standards.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud-Based</h3>
            <p className="text-gray-600">
              Access your data from anywhere, with real-time synchronization across all your locations.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Team-Focused</h3>
            <p className="text-gray-600">
              Designed for food service teams to collaborate efficiently while maintaining high standards.
            </p>
          </div>
        </div>

        {/* Visual Story */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Built for Modern Food Service
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traditional paper-based food safety systems are inefficient, error-prone, and fail during critical moments. 
                Vigilix transforms how you manage food safety with intelligent automation and real-time insights.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Replace paper logs with digital automation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Never miss critical temperature checks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Generate audit reports instantly</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" 
                alt="Modern restaurant kitchen with digital systems"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;