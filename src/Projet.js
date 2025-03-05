export const projets = [
    {
        id: 1,
        name: "Finder",
        concept: {
            fr: "Finder est une application web qui permet de mettre en relation des particuliers pour se rendre des services contre rémunération.",
            en: "Finder is a web application that connects individuals to offer paid services."
        },
        description: {
            fr: "Dans le cadre de ma deuxième année de BUT Informatique, nous devions réaliser un projet en groupe tout au long de cette année. Un commanditaire nous a donné un cahier des charges pour réaliser cette application, et nous avons suivi la méthode Scrum pour la réaliser.",
            en: "As part of my second year of my Computer Science degree, we had to work on a year-long group project. A client provided us with specifications, and we followed the Scrum methodology to develop this application."
        },
        image: "/projet/finder/finder.png",
        otherImages: [
            "/projet/finder/finder1.png",
            "/projet/finder/finder2.png",
        ],
        technologies: ['Laravel', 'Docker', 'JavaScript'],
        skillsImproved: {
            fr: [
                "Approfondissement des bases de Laravel",
                "Utilisation avancée de Docker",
                "Gestion de projet en méthode Scrum",
                "Travail en équipe et communication",
                "Gestion des bases de données relationnelles"
            ],
            en: [
                "Deepened Laravel knowledge",
                "Advanced Docker usage",
                "Project management using Scrum methodology",
                "Teamwork and communication skills",
                "Relational database management"
            ]
        },
        difficulties: {
            fr: [
                "Intégration de Docker dans un environnement de développement",
                "Coordination efficace entre les membres de l'équipe",
                "Compréhension et mise en place des concepts avancés de Laravel",
                "Gestion des versions et des conflits avec Git"
            ],
            en: [
                "Integrating Docker into a development environment",
                "Effective team coordination",
                "Understanding and implementing advanced Laravel concepts",
                "Version control and conflict resolution with Git"
            ]
        },
    },
    {
        id: 2,
        name: "Alt-Stella",
        concept: {
            fr: "Alt-Stella est une plateforme web qui permet aux artistes 3D du monde entier de collaborer sur des projets interactifs. L'application offre un espace pour créer, rejoindre et gérer des projets collaboratifs avec des fonctionnalités avancées comme l'intégration d'un portfolio et un espace e-commerce pour vendre des assets 3D.",
            en: "Alt-Stella is a web platform that allows 3D artists worldwide to collaborate on interactive projects. The application provides a space to create, join, and manage collaborative projects with advanced features such as portfolio integration and an e-commerce section for selling 3D assets."
        },
        description: {
            fr: "Alt-Stella est un projet personnel visant à créer un espace interactif pour les artistes 3D. L'objectif est de fournir une plateforme où les utilisateurs peuvent présenter leurs réalisations, participer à des projets communautaires et vendre des assets. Le projet inclut une gestion des utilisateurs, un espace projet détaillé avec suivi de l'avancement et une boutique en ligne.",
            en: "Alt-Stella is a personal project aimed at creating an interactive space for 3D artists. The goal is to provide a platform where users can showcase their work, participate in community projects, and sell assets. The project includes user management, a detailed project space with progress tracking, and an online store."
        },
        image: "/projet/alt-stella/alt.png",
        otherImages: [
            "/projet/alt-stella/alt1.png",
            "/projet/alt-stella/alt2.png",
            "/projet/alt-stella/alt3.png",
            "/projet/alt-stella/alt4.png",
        ],
        technologies: ['React', 'Docker', 'MariaDB', "Three.js"],
        skillsImproved: {
            fr: [
                "Développement full-stack avec React et Express.js",
                "Intégration de Three.js pour le rendu 3D",
                "Mise en place d'une base de données relationnelle avec MariaDB",
                "Utilisation de Docker pour l'orchestration des services",
                "Optimisation des performances pour une application web interactive"
            ],
            en: [
                "Full-stack development with React and Express.js",
                "Integration of Three.js for 3D rendering",
                "Setting up a relational database with MariaDB",
                "Using Docker for service orchestration",
                "Performance optimization for an interactive web application"
            ]
        },
        difficulties: {
            fr: [
                "Gestion de la synchronisation entre plusieurs utilisateurs dans un projet collaboratif",
                "Intégration de Three.js avec une interface fluide et optimisée",
                "Sécurisation des transactions dans la boutique en ligne",
                "Gestion des performances pour éviter les temps de chargement élevés",
                "Déploiement et conteneurisation des différents services via Docker"
            ],
            en: [
                "Managing synchronization between multiple users in a collaborative project",
                "Integrating Three.js with a smooth and optimized interface",
                "Securing transactions in the online store",
                "Handling performance to prevent long loading times",
                "Deploying and containerizing various services using Docker"
            ]
        },
    },
];