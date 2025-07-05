import React from 'react';
import { Check, Thermometer, Wifi, Smartphone, Users, Shield, RefreshCw, Clock } from 'lucide-react';

const WhatsIncluded = () => {
  const includedItems = [
    {
      icon: Thermometer,
      title: "5 Temperature Sensors",
      description: "EU-certified LoRaWAN sensors with wide range - cold to ambient temperatures",
      badge: "EU-Certified",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Wifi,
      title: "1 WiFi Gateway",
      description: "WiFi-enabled gateway ensuring reliable data transmission at all times",
      badge: "WiFi Connectivity",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Web + App Dashboard",
      description: "Complete access to monitoring dashboards on any device, anywhere",
      badge: "Multi-Platform",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Users,
      title: "Online & Onsite Support",
      description: "Free comprehensive support including staff visit during onboarding",
      badge: "Free Support",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Shield,
      title: "Secure Real-time Monitoring",
      description: "24/7 encrypted monitoring with instant alerts and notifications",
      badge: "24/7 Secure",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: RefreshCw,
      title: "Refundable Security Coverage",
      description: "Full security deposit refund when devices are returned in good condition",
      badge: "Refund Guarantee",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
              Included
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for complete food safety compliance, delivered and set up by our expert team.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {includedItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                    {item.badge}
                  </span>
                </div>
                
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="flex items-center text-emerald-600">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Included</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlight */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">EU-Certified Quality</h3>
                  <p className="text-emerald-600 font-medium">Guaranteed Compliance</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                All our sensors meet strict EU certification standards, ensuring reliable performance 
                and regulatory compliance for your food safety operations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-emerald-700 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-blue-700 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Secure</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg" 
                alt="EU-certified temperature sensors in commercial kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <div className="flex items-center text-emerald-600">
                  <Shield className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">EU Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">EU-Certified</h4>
            <p className="text-gray-600 text-sm">All sensors meet strict European standards</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Refund Guarantee</h4>
            <p className="text-gray-600 text-sm">Full security deposit refund guaranteed</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Real-time Alerts</h4>
            <p className="text-gray-600 text-sm">Instant notifications for critical events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;