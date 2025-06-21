import React from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Book a Demo or{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
              Reach Out
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Let's show you how Vigilix can save your time and stress.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@vigilix.tech" className="text-gray-600 hover:text-emerald-600 transition-colors">
                        info@vigilix.tech
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+447823707962" className="text-gray-600 hover:text-blue-600 transition-colors">
                        +44 7823 707962
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600">United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Benefits */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>Personalized 30-minute demo</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>Customized solution overview</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>Implementation timeline</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>ROI analysis for your business</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>Free consultation on food safety compliance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>No obligation assessment</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-sm opacity-90">
                  Ready to transform your food safety operations? Contact us today to schedule your personalized demo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;