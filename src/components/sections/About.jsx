import React from 'react';
import Section from '../layout/Section';
import { User } from 'lucide-react';

// --- About Component ---
// Displays the "Professional Objective"
function About() {
  return (
    <Section id="about" title="Professional Objective" icon={User}>
      <p className="text-xl text-gray-300 leading-relaxed">
        To work in an organization which provides me with ample opportunities to enhance my skills and knowledge along with contributing to the growth of the organisation.
      </p>
    </Section>
  );
}

export default About;