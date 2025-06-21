import React from 'react';
import { Shield, Heart, TrendingUp, Award } from 'lucide-react';

const WhyFoodSafety = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Reduce legal risks and liability with comprehensive compliance documentation.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Customer Safety",
      description: "Protect your customers from foodborne illnesses and allergen exposure.",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: TrendingUp,
      title: "Operational Efficiency",
      description: "Streamline processes and reduce time spent on manual compliance tasks.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Reputation Management",
      description: "Maintain your brand reputation with consistent food safety standards.",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Food Safety{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
              Matters
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Food safety isn't just about compliance – it's about protecting your business, 
            your customers, and your reputation in an increasingly regulated industry.
          </p>
        </div>

        {/* Visual Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg" 
              alt="Food safety inspector checking kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">Regular Inspections</h3>
              <p className="text-sm opacity-90">Stay audit-ready at all times</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg" 
              alt="HACCP documentation and records"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">HACCP Compliance</h3>
              <p className="text-sm opacity-90">Automated documentation</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg" 
              alt="Digital sensor recording fridge temperature"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold mb-1">Temperature Control</h3>
              <p className="text-sm opacity-90">Critical safety monitoring</p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:shadow-lg transition-all group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Content Block */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              The Cost of Poor Food Safety
            </h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              A single food safety incident can cost businesses thousands in fines, legal fees, 
              and lost revenue. Don't let preventable mistakes put your business at risk.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">£10,000+</div>
                <div className="opacity-80">Average fine for violations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30%</div>
                <div className="opacity-80">Revenue loss from incidents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">6 months</div>
                <div className="opacity-80">Average recovery time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFoodSafety;