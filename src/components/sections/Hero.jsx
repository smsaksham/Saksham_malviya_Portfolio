import React from 'react';
import Section from '../layout/Section';
import { Mail, Linkedin, Github, Phone, MapPin, User, Briefcase, GraduationCap, Code, Star, Menu, X, Calendar, Building, Zap, MessageSquare, Clock, Users, ShoppingCart, ListChecks, IdCard, Contact } from 'lucide-react';


// --- Hero Component ---
// The main introductory section with name, title, and key action links.
function Hero() {
  return (
    <section id="home" className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
      {/* You can replace this placeholder with an actual image URL */}
      <img 
        src="https://placehold.co/160x160/111827/7dd3fc?text=SM" 
        alt="Saksham Malviya"
        className="w-40 h-40 rounded-full mb-6 border-4 border-cyan-400 shadow-xl"
        onError={(e) => e.target.src = 'https://placehold.co/160x160/111827/7dd3fc?text=SM'}
      />
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
        Saksham Malviya
      </h1>
      <p className="text-3xl md:text-4xl font-light text-cyan-400 mb-8">
        MERN Stack Developer
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="mailto:Sakshammalviya1234@gmail.com" className="group flex items-center gap-2 bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
          <Mail size={20} />
          Email Me
        </a>
        <a href="https://github.com/SM-SAKSHAM" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1">
          <Github size={20} />
          GitHub
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1">
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Hero;