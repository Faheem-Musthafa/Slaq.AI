import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-slaq-green selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;