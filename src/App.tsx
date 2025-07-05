import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import WhatsIncluded from './components/WhatsIncluded';
import Pricing from './components/Pricing';
import CustomerSupport from './components/CustomerSupport';
import WhyFoodSafety from './components/WhyFoodSafety';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoVideo from './components/DemoVideo';


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DemoVideo />
        <About />
        <Features />
        <WhatsIncluded />
        <Pricing />
        <CustomerSupport />
        <WhyFoodSafety />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;