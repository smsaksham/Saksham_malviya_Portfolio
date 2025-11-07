import React from 'react';
import Section from '../layout/Section';
import { Calendar, GraduationCap, Star } from 'lucide-react';

// --- Education Component ---
// Lists educational milestones.
function Education() {
  const education = [
    {
      degree: "MERN Full Stack Training",
      institution: "CodeBetter Software Training Institute Indore",
      year: "2025",
      grade: "Grade: 70%"
    },
    {
      degree: "BCOM (Bachelor of Commerce)",
      institution: "DAVV GACC College Indore / DAVV University",
      year: "2022",
      grade: "Grade: 64%"
    },
    {
      degree: "Higher Secondary School",
      institution: "GAYANUDHAY VIDHYA MANDIR / Board of Secondary Education, MP",
      year: "2019",
      grade: "Grade: 90%"
    }
  ];

  return (
    <Section id="education" title="Key Educational Milestones" icon={GraduationCap}>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-lg text-cyan-400 mb-2">{edu.institution}</p>
            <div className="flex justify-between items-center text-gray-400">
              <span className="flex items-center gap-2"><Calendar size={16} /> {edu.year}</span>
              <span className="flex items-center gap-2"><Star size={16} /> {edu.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
export default Education;