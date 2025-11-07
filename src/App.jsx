import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Personal from './components/sections/Personal';
import Footer from './components/layout/Footer';
import Contact from "./components/sections/Contact.jsx"
// --- Main App Component ---
// This is the root component that renders all other sections of the portfolio.
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans leading-relaxed">
      <Header 
        navLinks={navLinks} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <main onClick={() => setIsMobileMenuOpen(false)}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact/>
        <Personal />
      </main>
      
      <Footer />
    </div>
  );
}

