import React from 'react';
import { Phone, Users, Monitor, Wrench, Shield, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const CustomerSupport = () => {
  const supportFeatures = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Direct line to our technical team for urgent queries and immediate assistance.",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Users,
      title: "Staff Visit",
      description: "Complimentary onsite visit during onboarding to ensure perfect setup.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Monitor,
      title: "Live Dashboard",
      description: "Real-time monitoring with instant alerts and comprehensive reporting tools.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Wrench,
      title: "Fast Replacement",
      description: "Quick sensor replacements if any device fails - minimal downtime guaranteed.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Unmatched{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
              Customer Support
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real Support. Real People. Always Available.
          </p>
          <div className="inline-flex items-center bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4 mr-2" />
            EU Certification Guaranteed
          </div>
        </div>

        {/* Support Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:shadow-lg transition-all group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Support Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Support That Feels Like Family
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-700">Free onboarding and remote setup</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-700">Web + App access with live monitoring</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-700">Staff visit included during onboarding</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-700">24/7 availability for urgent queries</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-700">In-app live chat, phone, and email support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-700">Fast replacements if any sensor fails</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
              alt="Customer support team helping restaurant staff"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl opacity-20 mb-4">"</div>
            <blockquote className="text-2xl font-medium mb-6 leading-relaxed">
              Their support feels like an extension of our kitchen team. Instant help when we needed it!
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Sarah Mitchell</div>
                <div className="opacity-80 text-sm">Head Chef, The Garden Bistro</div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl">
            <MessageCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">Live Chat</h4>
            <p className="text-gray-600 text-sm">Instant responses during business hours</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">Phone Support</h4>
            <p className="text-gray-600 text-sm">Direct line for urgent technical issues</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
            <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">24/7 Monitoring</h4>
            <p className="text-gray-600 text-sm">Round-the-clock system monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;