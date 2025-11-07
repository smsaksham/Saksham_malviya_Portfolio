import React from 'react';

// --- Section Component Wrapper ---
// A reusable component to create consistent section styling.
function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="container mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-8">
        {Icon && <Icon className="text-cyan-400" size={32} />}
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      </div>
      <div className="bg-gray-800/50 p-6 md:p-8 rounded-xl shadow-lg border border-gray-700">
        {children}
      </div>
    </section>
  );
}

export default Section;