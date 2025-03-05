import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export const sections = [
  { id: 'about' },
  { id: 'projects' },
  { id: 'experience' },
  { id: 'contact' },
];

function NavigationBar({ currentSection, setCurrentSection, language, setLanguage, translations }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4">
        <ul className="flex space-x-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => setCurrentSection(section.id)}
                className={`px-4 py-2 font-medium transition-colors duration-300 ${
                  currentSection === section.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {translations[language][section.id]}
              </button>
            </li>
          ))}
        </ul>
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
    </nav>
  );
}

export default NavigationBar;