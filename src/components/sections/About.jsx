import React from 'react';
import Section from '../layout/Section';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // triggers when 20% of section is visible
    >
      <Section title="Professional Objective" icon={User}>
        <p className="text-xl text-gray-300 leading-relaxed">
          To work in an organization which provides me with ample opportunities to enhance my skills and knowledge along with contributing to the growth of the organisation.
        </p>
      </Section>
    </motion.div>
  );
}

export default About;
