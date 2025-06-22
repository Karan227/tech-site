import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
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
        <WhyFoodSafety />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;