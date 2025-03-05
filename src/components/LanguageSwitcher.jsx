import React from 'react';

function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="relative flex border rounded overflow-hidden">
      {/* Slider animé indiquant la sélection */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full bg-blue-500 transition-transform duration-300 ease-in-out"
        style={{
          transform: language === 'en' ? 'translateX(0%)' : 'translateX(100%)',
        }}
      />
      {/* Bouton pour l'anglais */}
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 flex-1 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
          language === 'en'
            ? 'text-white'
            : 'text-gray-600 hover:bg-blue-100'
        }`}
      >
        🇬🇧
      </button>
      {/* Bouton pour le français */}
      <button
        onClick={() => setLanguage('fr')}
        className={`relative z-10 flex-1 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
          language === 'fr'
            ? 'text-white'
            : 'text-gray-600 hover:bg-blue-100'
        }`}
      >
        🇫🇷
      </button>
    </div>
  );
}

export default LanguageSwitcher;