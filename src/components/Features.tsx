import React from 'react';
import { 
  Thermometer, 
  CheckSquare, 
  Truck, 
  AlertTriangle, 
  Bell, 
  Monitor, 
  FileText 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Automatic Temperature Logging",
      description: "Wireless sensors stream fridge, freezer, and ambient temperatures to your dashboard 24/7.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: CheckSquare,
      title: "Smart Checklists",
      description: "Complete opening, closing, allergy, and audit checklists from any tablet or browser.",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Truck,
      title: "Deliveries Manager",
      description: "Record supplier info, reference ID, integrity checks, and temperatures within seconds.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: AlertTriangle,
      title: "Allergen Check Assistant",
      description: "Instantly identify dishes containing specific allergens to protect your customers.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Push/email notifications for missed tasks or unsafe temperature thresholds.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Monitor,
      title: "Any-Device Access",
      description: "Secure, unified dashboards from office, home, or multiple locations.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: FileText,
      title: "One-Click Reports",
      description: "Instantly generate HACCP and EHO-ready PDFs without paperwork.",
      color: "from-slate-500 to-gray-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Key Features of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
              Vigilix
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive food safety tools designed to streamline your operations 
            and keep you compliant with health regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Feature Spotlight */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Real-Time Temperature Monitoring
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our wireless sensors continuously monitor your equipment temperatures, 
                automatically logging data and sending alerts when thresholds are exceeded. 
                Never worry about food spoilage or compliance violations again.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">-18°C</div>
                  <div className="text-sm text-gray-600">Freezer Temp</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">4°C</div>
                  <div className="text-sm text-gray-600">Chiller Temp</div>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg" 
                alt="Digital temperature monitoring in commercial kitchen"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;