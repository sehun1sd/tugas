import React from 'react';
import { Layout } from './components/Layout';
import { ShoppingCalculator } from './components/ShoppingCalculator';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Background from './components/Background';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background with stars and gradient */}
        <Background />
        
        {/* Navigation */}
        <Navbar currentLang="id" onToggleLanguage={() => {}} />
        
        {/* Main Content */}
        <main>
          {/* Hero Section with animated entrance */}
          <Hero />
          
          {/* Features Section with staggered reveal */}
          <Features />
          
          {/* Demo Section with voice recognition */}
          <section id="demo" className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              {/* Decorative elements */}
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl" />
              
              {/* Voice Shopping Calculator */}
              <div className="relative">
                <ShoppingCalculator />
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;