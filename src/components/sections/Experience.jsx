import React from 'react';
import Section from '../layout/Section';
import { Briefcase, Calendar } from 'lucide-react';

// --- Experience Component ---
// Lists professional experience items.
function Experience() {
  const experiences = [
    {
      role: "Intern Full Stack Developer",
      company: "Inwizio Technologies Pvt. Ltd",
      duration: "December 2024 - March 2025 (3 months)",
      description: "Gained practical experience in developing and maintaining Web Applications using core technologies including HTML, CSS, JAVASCRIPT, and REACTJS."
    }
  ];

  return (
    <Section id="experience" title="Professional Experience" icon={Briefcase}>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 relative pl-8">
            <span className="absolute left-0 top-0 mt-7 ml-3 w-3 h-3 bg-cyan-400 rounded-full border-2 border-gray-900"></span>
            <div className="absolute left-4 top-10 w-0.5 h-[calc(100%-2.5rem)] bg-gray-700"></div>
            
            <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
            <p className="text-lg text-cyan-400 mb-2">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
              <Calendar size={16} /> {exp.duration}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
export default Experience;