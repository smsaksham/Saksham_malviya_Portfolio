import React from 'react';
import Section from '../layout/Section';
import { User } from 'lucide-react';

// --- Personal Component ---
// Displays personal details and interests.
function Personal() {
  const interests = ["Music", "Cricket", "Coding"];

  return (
    <Section id="personal" title="Personal Profile & Interests" icon={User}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h3 className="text-2xl font-semibold text-white mb-4">Personal Details</h3>
          <ul className="space-y-2 text-gray-300">
            <li><strong>Father's Name:</strong> MR. LALIT MALVIYA</li>
            <li><strong>Date of Birth:</strong> 2002-07-06</li>
            <li><strong>Gender:</strong> Male</li>
            <li><strong>Marital Status:</strong> Unmarried</li>
            <li><strong>Nationality:</strong> India</li>
            <li><strong>Languages Known:</strong> Hindi, English</li>
          </ul>
        </div>
        
        {/* Interests */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h3 className="text-2xl font-semibold text-white mb-4">Interests</h3>
          <ul className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <li key={index} className="bg-cyan-900/50 text-cyan-300 text-lg font-medium px-4 py-2 rounded-lg border border-cyan-700">
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Personal;