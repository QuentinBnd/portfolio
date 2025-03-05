import React, { useEffect } from 'react';
import { translations } from '../translations';
import {
    SiCplusplus, SiTypescript, SiNextdotjs, SiNestjs, SiLaravel, SiExpress,
    SiMysql, SiPostgresql, SiMongodb, SiGitlab, SiLeaflet, SiOpengl
} from 'react-icons/si';
import {
    DiJava, DiPython, DiJavascript1, DiPhp, DiReact, DiNodejs, DiGit, DiDocker
} from 'react-icons/di';
import { AiOutlineDatabase } from 'react-icons/ai';

const skills = {
    languages: [
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'Java', icon: <DiJava /> },
        { name: 'Python', icon: <DiPython /> },
        { name: 'JavaScript', icon: <DiJavascript1 /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'PHP', icon: <DiPhp /> },
        { name: 'SQL', icon: <AiOutlineDatabase /> },
    ],
    frameworks: [
        { name: 'React.js', icon: <DiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Node.js', icon: <DiNodejs /> },
        { name: 'Express.js', icon: <SiExpress /> }, // 🔥 Ajout de ExpressJS ici
        { name: 'Laravel', icon: <SiLaravel /> },
        { name: 'Leaflet', icon: <SiLeaflet /> },
        { name: 'OpenGL', icon: <SiOpengl /> },
    ],
    databases: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    tools: [
        { name: 'Git', icon: <DiGit /> },
        { name: 'GitLab', icon: <SiGitlab /> },
        { name: 'Docker', icon: <DiDocker /> },
    ],
};

const profilePic = translations.pp;

const AboutMeSection = ({ language }) => {
    
    useEffect(() => {
        document.documentElement.style.overflow = "auto"; // Active le scroll global
        document.body.style.overflow = "auto";
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col items-center px-4 md:px-8 text-center overflow-auto mt-16">
            {/* Photo de profil */}
            <img
                src={profilePic}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 shadow-lg object-cover"
            />

            {/* Description */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-4">{translations[language].title}</h1>
            <p className="text-sm md:text-lg max-w-2xl px-2">
                {language === 'fr'
                    ? "Je m'appelle Quentin BERNARD, j'ai 23 ans. Étudiant en informatique (BUT 3) en alternance, spécialisé en développement web et applications. Passionné par l'IA, la cybersécurité et les projets innovants."
                    : "My name is Quentin BERNARD, I am 23 years old. I am a third-year Computer Science student (BUT 3) in a work-study program, specializing in web and application development. Passionate about AI, cybersecurity, and innovative projects."}
            </p>

            {/* Langages et Technologies */}
            <div className="mt-8 w-full max-w-4xl flex-grow">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="mb-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-2">
                            {translations[language][
                                category === 'languages' ? 'programmingLanguages' :
                                    category === 'frameworks' ? 'frameworks' :
                                        category === 'databases' ? 'databases' :
                                            'tools'
                            ]}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {items.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex items-center space-x-2 bg-gray-800 text-white px-3 md:px-4 py-2 rounded-lg shadow-md text-sm md:text-base"
                                >
                                    <span className="text-base md:text-lg">{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ESPACE POUR DÉROULEMENT */}
            <div className="h-32" />
        </div>
    );
};

export default AboutMeSection;