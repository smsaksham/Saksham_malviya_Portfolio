import React from 'react';

// --- SkillCategory Component ---
// A helper component to render a list of skills for a specific category.
function SkillCategory({ title, icon: Icon, skills }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-cyan-400" size={24} />
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li key={index} className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full border border-cyan-700">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default SkillCategory;