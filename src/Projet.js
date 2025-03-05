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
    },{
        "id": 3,
        "name": "Projet OpenGL",
        "concept": {
            "fr": "Ce projet OpenGL a été réalisé dans le cadre du Semestre 5 de ma formation en BUT Informatique.",
            "en": "This OpenGL project was carried out as part of Semester 5 of my Computer Science degree (BUT Informatique)."
        },
        "description": {
            "fr": "Le projet consistait à réaliser un outil pédagogique afin de montrer les différents types d'affichage de texture, de lumière et de caméra en OpenGL.",
            "en": "The project involved developing an educational tool to demonstrate different types of texture mapping, lighting, and camera perspectives in OpenGL."
        },
        "image": "/projet/OpenGL/opengl.png",
        "otherImages": [
            "/projet/OpenGL/opengl1.png",
            "/projet/OpenGL/opengl2.png"
        ],
        "technologies": ["CMake", "OpenGL", "C++"],
        "skillsImproved": {
            "fr": [
                "Approfondissement des bases d'OpenGL",
                "Manipulation avancée des shaders et des buffers",
                "Gestion des transformations 3D (matrices de projection, de vue et de modèle)",
                "Compréhension du pipeline graphique",
                "Utilisation de CMake pour la gestion du projet"
            ],
            "en": [
                "Deepened understanding of OpenGL basics",
                "Advanced manipulation of shaders and buffers",
                "Handling 3D transformations (projection, view, and model matrices)",
                "Understanding the graphics pipeline",
                "Using CMake for project management"
            ]
        },
        "difficulties": {
            "fr": [
                "Compréhension et mise en œuvre du pipeline graphique",
                "Optimisation des performances avec les VBO et VAO",
                "Gestion des collisions et des déplacements de la caméra",
                "Debugging des shaders et des transformations"
            ],
            "en": [
                "Understanding and implementing the graphics pipeline",
                "Performance optimization with VBOs and VAOs",
                "Managing collisions and camera movements",
                "Debugging shaders and transformations"
            ]
        }
    },{
        id: 4,
        name: "MicroManager",
        concept: {
            fr: "MicroManager est une application web destinée aux micro-entrepreneurs, facilitant la gestion de leur activité via des outils automatisés pour le suivi des finances, des contrats et des paiements.",
            en: "MicroManager is a web application designed for micro-entrepreneurs, simplifying business management through automated tools for financial tracking, contracts, and payments."
        },
        description: {
            fr: "MicroManager est mon projet de SAÉ en 3ᵉ année de BUT Informatique. Ce projet vise à offrir une solution de gestion complète aux indépendants. L'application permet de gérer les factures, les contrats, les paiements et le suivi des revenus de manière intuitive. Elle propose également un tableau de bord interactif et une gestion multi-entreprise pour ceux ayant plusieurs activités. Le backend est développé avec ExpressJS pour assurer une API performante et évolutive.",
            en: "MicroManager is my **SAÉ project** in the third year of my Computer Science degree (BUT). This project aims to provide a comprehensive management solution for freelancers. The application allows users to manage invoices, contracts, payments, and revenue tracking intuitively. It also includes an interactive dashboard and multi-business management for those running multiple activities. The backend is built with ExpressJS to ensure a performant and scalable API."
        },
        image: "/projet/micromanager/micro.png",
        otherImages: [
            "/projet/micromanager/micro0.png",
            "/projet/micromanager/micro1.png",
            "/projet/micromanager/micro2.png",
            "/projet/micromanager/micro3.png"
        ],
        technologies: ["TypeScript", "ExpressJS", "React", "MariaDB", "Docker"],
        skillsImproved: {
            fr: [
                "Développement d'une API REST avec ExpressJS",
                "Gestion des bases de données relationnelles avec MariaDB",
                "Mise en place d'une architecture API-first",
                "Déploiement et conteneurisation avec Docker",
                "Sécurisation des endpoints et gestion des permissions utilisateur"
            ],
            en: [
                "Developing a REST API with ExpressJS",
                "Managing relational databases with MariaDB",
                "Implementing an API-first architecture",
                "Deployment and containerization with Docker",
                "Securing endpoints and handling user permissions"
            ]
        },
        difficulties: {
            fr: [
                "Mise en place d'un système d'authentification sécurisé avec JWT",
                "Gestion des transactions financières et des statuts de paiement",
                "Optimisation des requêtes pour assurer de bonnes performances",
                "Prise en charge de la gestion multi-entreprise",
                "Débogage des problèmes liés à l’intégration entre frontend et backend"
            ],
            en: [
                "Implementing a secure authentication system with JWT",
                "Handling financial transactions and payment statuses",
                "Optimizing queries to ensure good performance",
                "Supporting multi-business management",
                "Debugging integration issues between frontend and backend"
            ]
        }
    }
];