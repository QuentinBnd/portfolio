import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectCard = ({ project, language }) => {
    const [expanded, setExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleExpand = () => setExpanded(!expanded);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === project.otherImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.otherImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={`bg-white shadow-md rounded-lg overflow-hidden mb-6 transition-all duration-500 ${expanded ? 'h-auto' : 'h-42'}`}>

            {/* En-tête du projet */}
            <div 
                className="flex flex-col md:flex-row cursor-pointer mb-4" 
                onClick={handleExpand}
            >
                {/* Texte à gauche */}
                <div className="md:w-1/2 p-4 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                    <p className="text-gray-700">{project.concept[language]}</p>

                    {/* Technologies utilisées */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image principale à droite */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-40 object-contain"
                    />
                </div>
            </div>

            {/* Détails expansibles */}
            {expanded && (
                <div className="p-4 border-t border-gray-200">

                    {/* Carrousel d'images */}
                    <div className="relative w-full h-64 overflow-hidden flex justify-center items-center mt-4">
                        
                        <button 
                            className="absolute left-2 bg-gray-800 text-white p-2 rounded-full" 
                            onClick={prevImage}
                        >
                            <FaChevronLeft />
                        </button>

                        <img 
                            src={project.otherImages[currentImageIndex]} 
                            alt={`Slide ${currentImageIndex + 1}`} 
                            className="max-w-full max-h-64 rounded-lg"
                        />

                        <button 
                            className="absolute right-2 bg-gray-800 text-white p-2 rounded-full" 
                            onClick={nextImage}
                        >
                            <FaChevronRight />
                        </button>
                    </div>

                    {/* Description détaillée */}
                    <h3 className="text-xl font-semibold mt-4">Description</h3>
                    <p className="text-gray-700">{project.description[language]}</p>

                    {/* Montée en compétences */}
                    <h3 className="text-xl font-semibold mt-4">
                        {language === 'fr' ? 'Montée en compétences' : 'Skills Improved'}
                    </h3>
                    <ul className="list-disc list-inside">
                        {project.skillsImproved[language].map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>

                    {/* Difficultés */}
                    <h3 className="text-xl font-semibold mt-4">
                        {language === 'fr' ? 'Difficultés rencontrées' : 'Challenges Faced'}
                    </h3>
                    <ul className="list-disc list-inside">
                        {project.difficulties[language].map((difficulty, index) => (
                            <li key={index}>{difficulty}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;