import React from 'react';

// --- ContactInfo Component ---
// A helper component for displaying a single piece of contact info.
function ContactInfo({ icon: Icon, title, info, href, isLink = false }) {
  const content = (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 flex items-center gap-4 h-full">
      <Icon className="text-cyan-400 w-8 h-8 " />
      <div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-gray-300 ">{info}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={isLink ? "_blank" : undefined} 
        rel={isLink ? "noopener noreferrer" : undefined}
        className=" hover:bg-gray-700/50 rounded-lg transition-colors duration-300"
      >
        {content}
      </a>
    );
  }
  
  return content;
}


export default ContactInfo;