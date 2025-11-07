import React from 'react';


// --- Footer Component ---
// The website footer.
function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Saksham Malviya. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
export default Footer;