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
      <div className="relative min-h-screen overflow-x-hidden">
        <Background />
        <Navbar currentLang="id" onToggleLanguage={() => {}} />
        <main>
          <Hero />
          <Features />
          <section id="demo" className="py-20">
            <div className="container mx-auto px-4">
              <ShoppingCalculator />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;