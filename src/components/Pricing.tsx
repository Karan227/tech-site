import React from 'react';
import { Check, Shield, Wifi, Smartphone, Users, Clock, MessageCircle, Wrench } from 'lucide-react';

const Pricing = () => {
  const withSensorsFeatures = [
    "5 EU-certified temperature sensors",
    "1 WiFi + SIM-enabled Gateway", 
    "Web + App Dashboard Access",
    "Free onboarding & remote setup",
    "24/7 monitoring & alerts",
    "Staff visit during onboarding",
    "Live chat, phone & email support",
    "Fast sensor replacements"
  ];

  const withoutSensorsFeatures = [
    "Web + App Dashboard Access",
    "LoRaWAN-certified sensor support",
    "Real-time monitoring & alerts", 
    "Free onboarding & setup guidance",
    "Live chat, phone & email support",
    "Custom sensor configuration",
    "Multi-location management",
    "Compliance reporting tools"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with EU-certified sensors, a powerful platform, and unmatched customer support – 
            all at a price that makes sense.
          </p>
          <div className="inline-flex items-center bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mt-4">
            <Shield className="w-4 h-4 mr-2" />
            Affordable Pricing. Certified Quality.
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* With Sensors Plan */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-emerald-200 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">With Sensors</h3>
                <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">One-time installation fee</span>
                  <span className="text-xl font-bold text-gray-900">£50</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div>
                    <span className="text-gray-700 block">Refundable security deposit</span>
                    <span className="text-sm text-emerald-600">(5 sensors + 1 gateway)</span>
                  </div>
                  <span className="text-xl font-bold text-emerald-700">£150</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div>
                    <span className="text-gray-700 block">Monthly platform fee</span>
                    <span className="text-sm text-blue-600">(includes up to 5 sensors)</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-700">£60<span className="text-sm font-normal">/month</span></span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Additional Sensors:</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Extra sensor (one-time device cost)</span>
                    <span className="font-medium">£15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Extra sensor (monthly platform cost)</span>
                    <span className="font-medium">£2/month</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {withSensorsFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-4 rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all transform hover:scale-105 font-medium">
                Get Started with Sensors
              </button>
            </div>
          </div>

          {/* Without Sensors Plan */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Without Sensors</h3>
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  BYOD
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                  <div>
                    <span className="text-gray-700 block">Monthly platform fee</span>
                    <span className="text-sm text-blue-600">(Bring your own LoRaWAN sensors)</span>
                  </div>
                  <span className="text-3xl font-bold text-blue-700">£35<span className="text-sm font-normal">/month</span></span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {withoutSensorsFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full border-2 border-blue-500 text-blue-600 py-4 rounded-lg hover:bg-blue-50 transition-all font-medium">
                Start Platform Only
              </button>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-white rounded-2xl p-6 shadow-lg max-w-4xl mx-auto border-l-4 border-emerald-500">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">EU-Certified Quality Guarantee</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                All sensors provided are EU-certified, support cold-to-ambient temperatures, and use secure LoRaWAN communication. 
                Devices must be returned upon service cancellation for full security deposit refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;