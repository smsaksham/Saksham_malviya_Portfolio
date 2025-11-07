import React from 'react';
import Section from '../layout/Section';
import SkillCategory from './SkillCategory';
import { Code, GraduationCap, Users, Zap } from 'lucide-react';

// --- Skills Component ---
// Displays technical and soft skills in categories.
function Skills() {
  const skills = {
    frontend: ["HTML", "CSS", "Bootstrap", "Javascript", "ReactJS", "Redux", "GSAP"],
    backend: ["Node.js (Implied)", "Express (Implied)", "MongoDB (Implied)"],
    soft: ["Interpersonal Communication", "Time Management", "Prioritization"]
  };

  return (
    <Section id="skills" title="Core Technical Skills" icon={Zap}>
      <p className="text-lg text-gray-400 mb-8">
        As a MERN Stack Developer, I possess a strong foundation in modern web technologies, complemented by essential soft skills for effective teamwork.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SkillCategory title="Frontend" icon={Code} skills={skills.frontend} />
        <SkillCategory title="Backend/Database" icon={GraduationCap} skills={skills.backend} />
        <SkillCategory title="Soft Skills" icon={Users} skills={skills.soft} />
      </div>
    </Section>
  );
}

export default Skills;