import React from 'react';
import Section from '../layout/Section';
import ProjectCard from './ProjectCard';
import { Code, IdCard, ListChecks, ShoppingCart } from 'lucide-react';

// --- Projects Component ---
// Displays a grid of project cards.
function Projects() {
  const projects = [
    {
      title: "Shopping Cart App",
      description: "A comprehensive online E-commerce platform for users to browse products and manage selections. Features include browsing, adding to cart, and managing quantities.",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "ReactJS", "Redux"],
      duration: "1 Month",
      icon: ShoppingCart,
      liveLink: "#", // Placeholder
      githubLink: "#", // Placeholder
    },
    {
      title: "Employee Management System (EMS)",
      description: "A web-based application to efficiently manage employee details and records. Focuses on data organization, retrieval, and updating.",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      duration: "1 Month",
      icon: ListChecks,
      liveLink: "#", // Placeholder
      githubLink: "#", // Placeholder
    },
    {
      title: "Personal Portfolio Website",
      description: "A dedicated platform to showcase professional skills, personal information, and project work to potential employers and collaborators.",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      duration: "1 Month",
      icon: IdCard,
      liveLink: "#", // Placeholder
      githubLink: "https://github.com/SM-SAKSHAM", // From PDF
    }
  ];

  return (
    <Section id="projects" title="Projects" icon={Code}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}


export default Projects;