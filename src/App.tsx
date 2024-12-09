import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Tokenomics } from './components/Tokenomics';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;