import React from 'react';
import { translations } from '../translations';
import {
    SiCplusplus, SiTypescript, SiNextdotjs, SiNestjs, SiLaravel,
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
    return (
        <div className="h-screen overflow-y-auto flex flex-col items-center px-8 text-center">
            {/* Photo de profil */}
            <img
                src={profilePic}
                alt="Profile"
                className="w-40 h-40 rounded-full mb-4 shadow-lg object-cover object-center"
            />

            {/* Description */}
            <h1 className="text-4xl font-bold mb-4 mt-4">{translations[language].title}</h1>
            <p className="text-lg max-w-2xl">
                {language === 'fr'
                    ? "Je m'appelle Quentin BERNARD, j'ai 23 ans. Étudiant en informatique (BUT 3) en alternance, spécialisé en développement web et applications. Passionné par l'IA, la cybersécurité et les projets innovants."
                    : "My name is Quentin BERNARD, I am 23 years old. I am a third-year Computer Science student (BUT 3) in a work-study program, specializing in web and application development. Passionate about AI, cybersecurity, and innovative projects."}
            </p>

            {/* Langages et Technologies */}
            <div className="mt-8 w-full max-w-4xl">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">
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
                                    className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md"
                                >
                                    <span className="text-lg">{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ESPACE POUR DÉROULEMENT */}
            <div className="h-16" />
        </div>
    );
};

export default AboutMeSection;