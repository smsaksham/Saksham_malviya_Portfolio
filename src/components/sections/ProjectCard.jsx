import { Clock } from 'lucide-react';
import React from 'react';

// --- ProjectCard Component ---
// A helper component to render a single project card.
function ProjectCard({ project }) {
  const { title, description, skills, duration, icon: Icon, liveLink, githubLink } = project;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/20">
      <div className="p-6 flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="text-cyan-400" size={28} />
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
          <Clock size={16} /> {duration}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Skills Applied:</h4>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <li key={index} className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full border border-cyan-700">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-800/50 p-6 border-t border-gray-700 flex gap-4">
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 text-center bg-cyan-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-cyan-400 transition-colors duration-300"
        >
          View Live
        </a>
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 text-center bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;