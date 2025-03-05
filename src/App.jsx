import React, { useState, useRef } from 'react';
import NavigationBar, { sections } from './components/NavigationBar';
import AboutMeSection from './components/AboutMeSection';
import Section from './components/Section';
import ProjectList from './components/ProjectList'; // 🔥 Nouveau composant
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import { translations } from './translations';

function App() {
  const [currentSection, setCurrentSection] = useState('about');
  const [language, setLanguage] = useState('fr');
  const currentIndex = sections.findIndex((s) => s.id === currentSection);

  return (
    <div className="pt-20 overflow-hidden">
      <NavigationBar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        language={language}
        setLanguage={setLanguage}
        translations={translations}
      />
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sections.map((section) => (
            <Section key={section.id}>
              {section.id === 'about' ? (
                <AboutMeSection language={language} />
              ) :
                section.id === 'projects' ? (
                  <ProjectList language={language} /> // 🔥 Affiche tous les projets
                ) : section.id === 'experience' ? (
                  <ExperienceSection language={language} />
                ) : section.id === 'contact' ? (
                  <ContactSection language={language} />
                ) : (
                  <h1 className="text-4xl font-bold">
                    {translations[language][section.id]}
                  </h1>
                )}
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;