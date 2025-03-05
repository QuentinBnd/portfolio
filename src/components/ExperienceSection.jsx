// src/components/ExperienceSection.jsx
import React from 'react';
import { experiences } from '../Experience';
import { translations } from '../translations';

function ExperienceSection({ language }) {
    return (
        <div className="container mx-auto px-4 py-12 h-screen overflow-y-auto">
            <h1 className="text-4xl font-bold text-center mb-12">
                {language === 'fr' ? "Expériences Professionnelles" : "Professional Experience"}
            </h1>
            <div className="relative">
                {/* Ligne verticale de la timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>
                <div className="space-y-12 mb-32">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"
                                }`}
                        >
                            <div className="w-full md:w-1/2">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-2xl font-bold">{exp.title}</h2>
                                    <p className="text-gray-600">{exp.company}</p>
                                    <span className="text-sm text-gray-400">{exp.period}</span>
                                    <p className="mt-4 text-gray-700 whitespace-pre-line">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection;