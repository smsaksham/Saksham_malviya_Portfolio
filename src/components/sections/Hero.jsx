import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero() {
  // Variants for button animations with stagger
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.section
      id="home"
      className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }} // trigger every time 20% is visible
    >
      {/* Profile Image */}
      <motion.img
        src="https://placehold.co/160x160/111827/7dd3fc?text=SM"
        alt="Saksham Malviya"
        className="w-40 h-40 rounded-full mb-6 border-4 border-cyan-400 shadow-xl"
        onError={(e) =>
          (e.target.src = 'https://placehold.co/160x160/111827/7dd3fc?text=SM')
        }
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: false }}
      />

      {/* Name */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        Saksham Malviya
      </motion.h1>

      {/* Title */}
      <motion.p
        className="text-3xl md:text-4xl font-light text-cyan-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        MERN Stack Developer
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: false }}
      >
        <motion.a
          href="mailto:msaksham8120@gmail.com"
          className="group flex items-center gap-2 bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-cyan-400 transition-all duration-300 transform hover:-translate-y-1"
          variants={buttonVariants}
        >
          <Mail size={20} />
          Email Me
        </motion.a>

        <motion.a
          href="https://github.com/smsaksham"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1"
          variants={buttonVariants}
        >
          <Github size={20} />
          GitHub
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/saksham-malviya/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1"
          variants={buttonVariants}
        >
          <Linkedin size={20} />
          LinkedIn
        </motion.a>
      </motion.div>

      {/* Scroll Down Button */}
      <motion.button
        onClick={() => {
          const about = document.getElementById('about');
          about?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mt-10 flex items-center gap-2 text-cyan-400 animate-pulse hover:text-cyan-300 transition-all duration-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        Scroll Down
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>
    </motion.section>
  );
}

export default Hero;
