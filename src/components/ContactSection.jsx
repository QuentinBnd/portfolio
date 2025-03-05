// src/components/ContactSection.jsx
import React from 'react';
import { translations } from '../translations';

function ContactSection({ language }) {
  const { contact, contactDetails } = translations[language];

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">{contact}</h1>
      <div className="mb-8 text-center">
        <p className="text-lg text-gray-800">
          {contactDetails.email}:{' '}
          <a
            href="mailto:quentinn.bernardd@gmail.com"
            className="underline hover:text-blue-500"
          >
            quentinn.bernardd@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-800">
          {contactDetails.phone}:{' '}
          <a
            href="tel:+33643777948"
            className="underline hover:text-blue-500"
          >
            +33 6 43 77 79 48
          </a>
        </p>
      </div>
      <div className="flex space-x-4">
        <a
          href="/cv.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors duration-300"
        >
          {contactDetails.downloadCV}
        </a>
        <a
          href="https://github.com/QuentinBnd"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ContactSection;