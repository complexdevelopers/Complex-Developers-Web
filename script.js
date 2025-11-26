/* ============================================
   COMPLEX DEVELOPERS - MAIN JAVASCRIPT
   All Interactive Features
   ============================================ */

// === Translations Object ===
const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Complex Developers",
      tagline: "Transforming Ideas into Digital Reality",
      cta: "Explore Our Services"
    },
    sections: {
      whatWeDo: "What We Do",
      whyChooseUs: "Why Choose Us",
      quickAbout: "Quick About",
      contactCTA: "Ready to Start Your Project?",
      getQuote: "Get a Quote",
      viewAllServices: "View All Services",
      learnMore: "Learn More About Us",
      allServices: "All Services",
      allProjects: "All Projects",
      filter: "Filter",
      ourStory: "Our Story",
      meetTeam: "Meet the Team",
      coreValues: "Core Values",
      sendMessage: "Send Message",
      name: "Name",
      email: "Email",
      message: "Message",
      contactInfo: "Contact Information",
      followUs: "Follow Us"
    },
    services: {
      webDesigning: {
        name: "Web Designing",
        desc: "Creative and responsive web designs that captivate your audience and enhance user experience."
      },
      webDevelopment: {
        name: "Web Development",
        desc: "Full-stack web applications built with cutting-edge technologies and best practices."
      },
      softwareDevelopment: {
        name: "Software Development",
        desc: "Custom software solutions tailored to your business needs and requirements."
      },
      gameDevelopment: {
        name: "Game Development",
        desc: "Immersive gaming experiences across multiple platforms and genres."
      },
      aiIntegration: {
        name: "AI Integration",
        desc: "Seamlessly integrate artificial intelligence into your existing systems and workflows."
      },
      aiEngineering: {
        name: "AI Engineering",
        desc: "Advanced AI solutions and machine learning models engineered for your specific use cases."
      },
      apiIntegration: {
        name: "API Integration",
        desc: "Connect your applications with third-party services through robust API integrations."
      },
      cybersecurity: {
        name: "Website and App Security",
        desc: "Comprehensive cybersecurity solutions and penetration testing to protect your digital assets."
      },
      cloudMigration: {
        name: "Cloud Infrastructure Setup and Migration",
        desc: "Seamless cloud migration and management services for scalable infrastructure."
      },
      webAssembly: {
        name: "WebAssembly Compliance",
        desc: "High-performance web applications using WebAssembly for near-native speed."
      },
      seoOptimization: {
        name: "Site Speed and SEO Optimization",
        desc: "Boost your website's performance and search engine rankings with our optimization services."
      },
      automation: {
        name: "Business Automation & Workflow Integration",
        desc: "No-code and low-code automation solutions to streamline your business processes."
      },
      localization: {
        name: "Multi-language Website Integration",
        desc: "Expand your reach with localized websites supporting multiple languages and regions."
      },
      maintenance: {
        name: "Website/App Maintenance Plan",
        desc: "Comprehensive maintenance-as-a-service to keep your digital products running smoothly."
      },
      appDevelopment: {
        name: "App Development",
        desc: "Native and cross-platform mobile applications for iOS, Android, and beyond."
      },
      postersCreation: {
        name: "Posters Creation",
        desc: "Professional and eye-catching poster designs for marketing, events, and promotional campaigns."
      },
      contentWriting: {
        name: "Content Writing",
        desc: "Engaging and SEO-optimized content that resonates with your audience and drives conversions."
      },
      emailMarketing: {
        name: "Email Marketing and Automation",
        desc: "Strategic email campaigns and automated workflows to nurture leads and engage customers effectively."
      },
      analytics: {
        name: "Analytics",
        desc: "Comprehensive data analytics and insights to track performance, understand user behavior, and make data-driven decisions."
      },
      businessDigitization: {
        name: "Full Business Digitization Package",
        desc: "Complete end-to-end digital transformation solutions to modernize your entire business operations and processes."
      },
      saasDevelopment: {
        name: "SaaS (Software-as-a-Service) Development",
        desc: "Scalable cloud-based software solutions delivered as a service, enabling subscription-based business models."
      }
    },
    portfolio: {
      web: "Web",
      app: "App",
      ai: "AI",
      game: "Game"
    },
    about: {
      vision: "Our Vision",
      mission: "Our Mission",
      story: "Our Story",
      values: "Core Values"
    },
    footer: {
      quickLinks: "Quick Links",
      services: "Services",
      resources: "Resources",
      copyright: "© 2025 Complex Developers. All rights reserved."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      portfolio: "Portfolio",
      about: "À propos",
      contact: "Contact"
    },
    hero: {
      title: "Complex Developers",
      tagline: "Transformer les Idées en Réalité Numérique",
      cta: "Explorer Nos Services"
    },
    sections: {
      whatWeDo: "Ce Que Nous Faisons",
      whyChooseUs: "Pourquoi Nous Choisir",
      quickAbout: "À Propos Rapide",
      contactCTA: "Prêt à Démarrer Votre Projet?",
      getQuote: "Obtenir un Devis",
      viewAllServices: "Voir Tous les Services",
      learnMore: "En Savoir Plus Sur Nous",
      allServices: "Tous les Services",
      allProjects: "Tous les Projets",
      filter: "Filtrer",
      ourStory: "Notre Histoire",
      meetTeam: "Rencontrer l'Équipe",
      coreValues: "Valeurs Fondamentales",
      sendMessage: "Envoyer un Message",
      name: "Nom",
      email: "Email",
      message: "Message",
      contactInfo: "Informations de Contact",
      followUs: "Suivez-Nous"
    },
    services: {
      webDesigning: {
        name: "Conception Web",
        desc: "Conceptions web créatives et responsives qui captivent votre audience."
      },
      webDevelopment: {
        name: "Développement Web",
        desc: "Applications web full-stack construites avec des technologies de pointe."
      },
      softwareDevelopment: {
        name: "Développement Logiciel",
        desc: "Solutions logicielles personnalisées adaptées à vos besoins."
      },
      gameDevelopment: {
        name: "Développement de Jeux",
        desc: "Expériences de jeu immersives sur plusieurs plateformes."
      },
      aiIntegration: {
        name: "Intégration IA",
        desc: "Intégrez l'intelligence artificielle dans vos systèmes existants."
      },
      aiEngineering: {
        name: "Ingénierie IA",
        desc: "Solutions IA avancées et modèles d'apprentissage automatique."
      },
      apiIntegration: {
        name: "Intégration API",
        desc: "Connectez vos applications avec des services tiers."
      },
      cybersecurity: {
        name: "Sécurité Web et App",
        desc: "Solutions de cybersécurité complètes et tests de pénétration."
      },
      cloudMigration: {
        name: "Configuration et Migration Cloud",
        desc: "Services de migration et gestion cloud pour une infrastructure scalable."
      },
      webAssembly: {
        name: "Conformité WebAssembly",
        desc: "Applications web haute performance avec WebAssembly."
      },
      seoOptimization: {
        name: "Optimisation Vitesse et SEO",
        desc: "Améliorez les performances et le classement de votre site web."
      },
      automation: {
        name: "Automatisation et Intégration",
        desc: "Solutions d'automatisation sans code et à faible code."
      },
      localization: {
        name: "Intégration Multi-langue",
        desc: "Élargissez votre portée avec des sites web localisés."
      },
      maintenance: {
        name: "Plan de Maintenance",
        desc: "Maintenance en tant que service pour vos produits numériques."
      },
      appDevelopment: {
        name: "Développement d'Applications",
        desc: "Applications mobiles natives et multiplateformes."
      },
      postersCreation: {
        name: "Création d'Affiches",
        desc: "Conceptions d'affiches professionnelles et accrocheuses pour le marketing, les événements et les campagnes promotionnelles."
      },
      contentWriting: {
        name: "Rédaction de Contenu",
        desc: "Contenu engageant et optimisé pour le SEO qui résonne avec votre audience et génère des conversions."
      },
      emailMarketing: {
        name: "Marketing par Email et Automatisation",
        desc: "Campagnes email stratégiques et workflows automatisés pour nourrir les leads et engager efficacement les clients."
      },
      analytics: {
        name: "Analytique",
        desc: "Analyses de données complètes et insights pour suivre les performances, comprendre le comportement des utilisateurs et prendre des décisions basées sur les données."
      },
      businessDigitization: {
        name: "Package Complet de Numérisation d'Entreprise",
        desc: "Solutions complètes de transformation numérique de bout en bout pour moderniser toutes vos opérations et processus commerciaux."
      },
      saasDevelopment: {
        name: "Développement SaaS (Logiciel en tant que Service)",
        desc: "Solutions logicielles cloud évolutives livrées en tant que service, permettant des modèles commerciaux basés sur l'abonnement."
      }
    },
    portfolio: {
      web: "Web",
      app: "App",
      ai: "IA",
      game: "Jeu"
    },
    about: {
      vision: "Notre Vision",
      mission: "Notre Mission",
      story: "Notre Histoire",
      values: "Valeurs Fondamentales"
    },
    footer: {
      quickLinks: "Liens Rapides",
      services: "Services",
      resources: "Ressources",
      copyright: "© 2025 Complex Developers. Tous droits réservés."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      portfolio: "Portafolio",
      about: "Acerca de",
      contact: "Contacto"
    },
    hero: {
      title: "Complex Developers",
      tagline: "Transformando Ideas en Realidad Digital",
      cta: "Explorar Nuestros Servicios"
    },
    sections: {
      whatWeDo: "Qué Hacemos",
      whyChooseUs: "Por Qué Elegirnos",
      quickAbout: "Acerca de Rápido",
      contactCTA: "¿Listo para Comenzar Tu Proyecto?",
      getQuote: "Obtener Cotización",
      viewAllServices: "Ver Todos los Servicios",
      learnMore: "Conoce Más Sobre Nosotros",
      allServices: "Todos los Servicios",
      allProjects: "Todos los Proyectos",
      filter: "Filtrar",
      ourStory: "Nuestra Historia",
      meetTeam: "Conoce al Equipo",
      coreValues: "Valores Fundamentales",
      sendMessage: "Enviar Mensaje",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      contactInfo: "Información de Contacto",
      followUs: "Síguenos"
    },
    services: {
      webDesigning: {
        name: "Diseño Web",
        desc: "Diseños web creativos y responsivos que cautivan a tu audiencia."
      },
      webDevelopment: {
        name: "Desarrollo Web",
        desc: "Aplicaciones web full-stack construidas con tecnologías de vanguardia."
      },
      softwareDevelopment: {
        name: "Desarrollo de Software",
        desc: "Soluciones de software personalizadas adaptadas a tus necesidades."
      },
      gameDevelopment: {
        name: "Desarrollo de Juegos",
        desc: "Experiencias de juego inmersivas en múltiples plataformas."
      },
      aiIntegration: {
        name: "Integración IA",
        desc: "Integra inteligencia artificial en tus sistemas existentes."
      },
      aiEngineering: {
        name: "Ingeniería IA",
        desc: "Soluciones IA avanzadas y modelos de aprendizaje automático."
      },
      apiIntegration: {
        name: "Integración API",
        desc: "Conecta tus aplicaciones con servicios de terceros."
      },
      cybersecurity: {
        name: "Seguridad Web y App",
        desc: "Soluciones de ciberseguridad y pruebas de penetración."
      },
      cloudMigration: {
        name: "Configuración y Migración Cloud",
        desc: "Servicios de migración y gestión cloud para infraestructura escalable."
      },
      webAssembly: {
        name: "Cumplimiento WebAssembly",
        desc: "Aplicaciones web de alto rendimiento con WebAssembly."
      },
      seoOptimization: {
        name: "Optimización de Velocidad y SEO",
        desc: "Mejora el rendimiento y el ranking de tu sitio web."
      },
      automation: {
        name: "Automatización e Integración",
        desc: "Soluciones de automatización sin código y de bajo código."
      },
      localization: {
        name: "Integración Multi-idioma",
        desc: "Amplía tu alcance con sitios web localizados."
      },
      maintenance: {
        name: "Plan de Mantenimiento",
        desc: "Mantenimiento como servicio para tus productos digitales."
      },
      appDevelopment: {
        name: "Desarrollo de Aplicaciones",
        desc: "Aplicaciones móviles nativas y multiplataforma."
      },
      postersCreation: {
        name: "Creación de Pósters",
        desc: "Diseños de pósters profesionales y llamativos para marketing, eventos y campañas promocionales."
      },
      contentWriting: {
        name: "Redacción de Contenido",
        desc: "Contenido atractivo y optimizado para SEO que resuena con tu audiencia y genera conversiones."
      },
      emailMarketing: {
        name: "Marketing por Email y Automatización",
        desc: "Campañas de email estratégicas y flujos de trabajo automatizados para nutrir leads y comprometer clientes de manera efectiva."
      },
      analytics: {
        name: "Analítica",
        desc: "Análisis de datos completos e insights para rastrear el rendimiento, entender el comportamiento del usuario y tomar decisiones basadas en datos."
      },
      businessDigitization: {
        name: "Paquete Completo de Digitalización Empresarial",
        desc: "Soluciones completas de transformación digital de extremo a extremo para modernizar todas sus operaciones y procesos comerciales."
      },
      saasDevelopment: {
        name: "Desarrollo SaaS (Software como Servicio)",
        desc: "Soluciones de software basadas en la nube escalables entregadas como servicio, permitiendo modelos de negocio basados en suscripción."
      }
    },
    portfolio: {
      web: "Web",
      app: "App",
      ai: "IA",
      game: "Juego"
    },
    about: {
      vision: "Nuestra Visión",
      mission: "Nuestra Misión",
      story: "Nuestra Historia",
      values: "Valores Fundamentales"
    },
    footer: {
      quickLinks: "Enlaces Rápidos",
      services: "Servicios",
      resources: "Recursos",
      copyright: "© 2025 Complex Developers. Todos los derechos reservados."
    }
  },
  sw: {
    nav: {
      home: "Nyumbani",
      services: "Huduma",
      portfolio: "Portfolio",
      about: "Kuhusu",
      contact: "Wasiliana"
    },
    hero: {
      title: "Complex Developers",
      tagline: "Kubadilisha Mawazo Kuwa Ukweli wa Dijitali",
      cta: "Gundua Huduma Zetu"
    },
    sections: {
      whatWeDo: "Tunafanya Nini",
      whyChooseUs: "Kwa Nini Utuchague",
      quickAbout: "Kuhusu Haraka",
      contactCTA: "Tayari Kuanza Mradi Wako?",
      getQuote: "Pata Bei",
      viewAllServices: "Angalia Huduma Zote",
      learnMore: "Jifunze Zaidi Kuhusu Sisi",
      allServices: "Huduma Zote",
      allProjects: "Miradi Yote",
      filter: "Chuja",
      ourStory: "Hadithi Yetu",
      meetTeam: "Kutana na Timu",
      coreValues: "Maadili ya Msingi",
      sendMessage: "Tuma Ujumbe",
      name: "Jina",
      email: "Barua Pepe",
      message: "Ujumbe",
      contactInfo: "Maelezo ya Mawasiliano",
      followUs: "Tufuate"
    },
    services: {
      webDesigning: {
        name: "Kubuni Tovuti",
        desc: "Miundo ya tovuti ya ubunifu na inayojibu inayovutia hadhira yako."
      },
      webDevelopment: {
        name: "Maendeleo ya Tovuti",
        desc: "Programu za tovuti za stack kamili zilizojengwa kwa teknolojia za kisasa."
      },
      softwareDevelopment: {
        name: "Maendeleo ya Programu",
        desc: "Suluhisho za programu maalum zilizotengenezwa kwa mahitaji yako."
      },
      gameDevelopment: {
        name: "Maendeleo ya Mchezo",
        desc: "Uzoefu wa michezo ya kuvutia katika jukwaa nyingi."
      },
      aiIntegration: {
        name: "Ujumuishaji wa AI",
        desc: "Ujumuishe akili bandia katika mifumo yako ya sasa."
      },
      aiEngineering: {
        name: "Uhandisi wa AI",
        desc: "Suluhisho za AI za hali ya juu na mifano ya kujifunza mashine."
      },
      apiIntegration: {
        name: "Ujumuishaji wa API",
        desc: "Unganisha programu zako na huduma za watu wengine."
      },
      cybersecurity: {
        name: "Usalama wa Tovuti na Programu",
        desc: "Suluhisho za usalama wa mtandao na upimaji wa kuingilia."
      },
      cloudMigration: {
        name: "Usanidi na Uhamishaji wa Wingu",
        desc: "Huduma za uhamishaji na usimamizi wa wingu kwa miundombinu inayoweza kupanuka."
      },
      webAssembly: {
        name: "Uzingatiaji wa WebAssembly",
        desc: "Programu za tovuti za utendakazi wa juu kwa kutumia WebAssembly."
      },
      seoOptimization: {
        name: "Uboreshaji wa Kasi na SEO",
        desc: "Boresha utendakazi na nafasi ya tovuti yako katika injini za utafutaji."
      },
      automation: {
        name: "Otomatiki na Ujumuishaji",
        desc: "Suluhisho za otomatiki zisizo na msimbo na za msimbo mdogo."
      },
      localization: {
        name: "Ujumuishaji wa Lugha Nyingi",
        desc: "Panua ufikiaji wako kwa tovuti zilizo na lugha nyingi."
      },
      maintenance: {
        name: "Mpango wa Matengenezo",
        desc: "Matengenezo kama huduma ya bidhaa zako za dijitali."
      },
      appDevelopment: {
        name: "Maendeleo ya Programu",
        desc: "Programu za simu za asili na za jukwaa nyingi."
      },
      postersCreation: {
        name: "Uundaji wa Madaftari",
        desc: "Miundo ya kitaalamu na ya kuvutia ya madaftari kwa masoko, matukio, na kampeni za kukuza."
      },
      contentWriting: {
        name: "Kuandika Maudhui",
        desc: "Maudhui ya kuvutia na yaliyoboreshwa kwa SEO ambayo huwavutia hadhira yako na kuongeza uongofu."
      },
      emailMarketing: {
        name: "Masoko ya Barua Pepe na Otomatiki",
        desc: "Kampeni za barua pepe za kimkakati na mifumo ya otomatiki ya kukuza wateja na kuwashirikisha wateja kwa ufanisi."
      },
      analytics: {
        name: "Uchambuzi wa Takwimu",
        desc: "Uchambuzi kamili wa takwimu na maarifa ya kufuatilia utendakazi, kuelewa tabia ya watumiaji, na kufanya maamuzi yanayotegemea data."
      },
      businessDigitization: {
        name: "Kifurushi Kamili cha Kidijitali cha Biashara",
        desc: "Suluhisho kamili za mabadiliko ya kidijitali kutoka mwanzo hadi mwisho za kisasa za shughuli zote za biashara na michakato."
      },
      saasDevelopment: {
        name: "Maendeleo ya SaaS (Programu kama Huduma)",
        desc: "Suluhisho za programu za wingu zinazoweza kupanuka zinazotolewa kama huduma, zikiwezesha mifumo ya biashara ya usajili."
      }
    },
    portfolio: {
      web: "Tovuti",
      app: "Programu",
      ai: "AI",
      game: "Mchezo"
    },
    about: {
      vision: "Maono Yetu",
      mission: "Lengo Letu",
      story: "Hadithi Yetu",
      values: "Maadili ya Msingi"
    },
    footer: {
      quickLinks: "Viungo vya Haraka",
      services: "Huduma",
      resources: "Rasilimali",
      copyright: "© 2025 Complex Developers. Haki zote zimehifadhiwa."
    }
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      portfolio: "Portfolio",
      about: "Über uns",
      contact: "Kontakt"
    },
    hero: {
      title: "Complex Developers",
      tagline: "Ideen in digitale Realität verwandeln",
      cta: "Unsere Dienstleistungen erkunden"
    },
    sections: {
      whatWeDo: "Was wir tun",
      whyChooseUs: "Warum uns wählen",
      quickAbout: "Schnell über uns",
      contactCTA: "Bereit, Ihr Projekt zu starten?",
      getQuote: "Angebot erhalten",
      viewAllServices: "Alle Dienstleistungen anzeigen",
      learnMore: "Mehr über uns erfahren",
      allServices: "Alle Dienstleistungen",
      allProjects: "Alle Projekte",
      filter: "Filtern",
      ourStory: "Unsere Geschichte",
      meetTeam: "Team kennenlernen",
      coreValues: "Kernwerte",
      sendMessage: "Nachricht senden",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      contactInfo: "Kontaktinformationen",
      followUs: "Folgen Sie uns"
    },
    services: {
      webDesigning: {
        name: "Web-Design",
        desc: "Kreative und responsive Web-Designs, die Ihr Publikum begeistern."
      },
      webDevelopment: {
        name: "Web-Entwicklung",
        desc: "Full-Stack-Webanwendungen mit modernsten Technologien."
      },
      softwareDevelopment: {
        name: "Software-Entwicklung",
        desc: "Maßgeschneiderte Softwarelösungen für Ihre Bedürfnisse."
      },
      gameDevelopment: {
        name: "Spieleentwicklung",
        desc: "Immersive Spielerlebnisse auf mehreren Plattformen."
      },
      aiIntegration: {
        name: "KI-Integration",
        desc: "Integrieren Sie künstliche Intelligenz in Ihre bestehenden Systeme."
      },
      aiEngineering: {
        name: "KI-Ingenieurwesen",
        desc: "Fortgeschrittene KI-Lösungen und Machine-Learning-Modelle."
      },
      apiIntegration: {
        name: "API-Integration",
        desc: "Verbinden Sie Ihre Anwendungen mit Drittanbieterdiensten."
      },
      cybersecurity: {
        name: "Web- und App-Sicherheit",
        desc: "Umfassende Cybersicherheitslösungen und Penetrationstests."
      },
      cloudMigration: {
        name: "Cloud-Infrastruktur und Migration",
        desc: "Nahtlose Cloud-Migration und Verwaltungsdienste."
      },
      webAssembly: {
        name: "WebAssembly-Konformität",
        desc: "Hochleistungs-Webanwendungen mit WebAssembly."
      },
      seoOptimization: {
        name: "Geschwindigkeits- und SEO-Optimierung",
        desc: "Verbessern Sie die Leistung und das Ranking Ihrer Website."
      },
      automation: {
        name: "Automatisierung und Integration",
        desc: "No-Code- und Low-Code-Automatisierungslösungen."
      },
      localization: {
        name: "Mehrsprachige Website-Integration",
        desc: "Erweitern Sie Ihre Reichweite mit lokalisierten Websites."
      },
      maintenance: {
        name: "Wartungsplan",
        desc: "Wartung als Service für Ihre digitalen Produkte."
      },
      appDevelopment: {
        name: "App-Entwicklung",
        desc: "Native und plattformübergreifende mobile Anwendungen."
      },
      postersCreation: {
        name: "Poster-Erstellung",
        desc: "Professionelle und auffällige Poster-Designs für Marketing, Veranstaltungen und Werbekampagnen."
      },
      contentWriting: {
        name: "Content-Erstellung",
        desc: "Ansprechende und SEO-optimierte Inhalte, die bei Ihrer Zielgruppe Anklang finden und Conversions fördern."
      },
      emailMarketing: {
        name: "E-Mail-Marketing und Automatisierung",
        desc: "Strategische E-Mail-Kampagnen und automatisierte Workflows zur Lead-Pflege und effektiven Kundenbindung."
      },
      analytics: {
        name: "Analytik",
        desc: "Umfassende Datenanalyse und Erkenntnisse zur Leistungsverfolgung, zum Verständnis des Nutzerverhaltens und zur datengestützten Entscheidungsfindung."
      },
      businessDigitization: {
        name: "Vollständiges Business-Digitalisierungspaket",
        desc: "Komplette End-to-End-Digitalisierungslösungen zur Modernisierung Ihrer gesamten Geschäftsabläufe und Prozesse."
      },
      saasDevelopment: {
        name: "SaaS-Entwicklung (Software-as-a-Service)",
        desc: "Skalierbare cloud-basierte Softwarelösungen, die als Service bereitgestellt werden und abonnementbasierte Geschäftsmodelle ermöglichen."
      }
    },
    portfolio: {
      web: "Web",
      app: "App",
      ai: "KI",
      game: "Spiel"
    },
    about: {
      vision: "Unsere Vision",
      mission: "Unsere Mission",
      story: "Unsere Geschichte",
      values: "Kernwerte"
    },
    footer: {
      quickLinks: "Schnelllinks",
      services: "Dienstleistungen",
      resources: "Ressourcen",
      copyright: "© 2025 Complex Developers. Alle Rechte vorbehalten."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      portfolio: "المحفظة",
      about: "من نحن",
      contact: "اتصل بنا"
    },
    hero: {
      title: "Complex Developers",
      tagline: "تحويل الأفكار إلى واقع رقمي",
      cta: "استكشف خدماتنا"
    },
    sections: {
      whatWeDo: "ما نفعله",
      whyChooseUs: "لماذا تختارنا",
      quickAbout: "نبذة سريعة",
      contactCTA: "جاهز لبدء مشروعك؟",
      getQuote: "احصل على عرض سعر",
      viewAllServices: "عرض جميع الخدمات",
      learnMore: "تعرف علينا أكثر",
      allServices: "جميع الخدمات",
      allProjects: "جميع المشاريع",
      filter: "تصفية",
      ourStory: "قصتنا",
      meetTeam: "تعرف على الفريق",
      coreValues: "القيم الأساسية",
      sendMessage: "إرسال رسالة",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      contactInfo: "معلومات الاتصال",
      followUs: "تابعنا"
    },
    services: {
      webDesigning: {
        name: "تصميم الويب",
        desc: "تصاميم ويب إبداعية ومتجاوبة تجذب جمهورك."
      },
      webDevelopment: {
        name: "تطوير الويب",
        desc: "تطبيقات ويب كاملة مبنية بأحدث التقنيات."
      },
      softwareDevelopment: {
        name: "تطوير البرمجيات",
        desc: "حلول برمجية مخصصة مصممة لاحتياجاتك."
      },
      gameDevelopment: {
        name: "تطوير الألعاب",
        desc: "تجارب ألعاب غامرة عبر منصات متعددة."
      },
      aiIntegration: {
        name: "تكامل الذكاء الاصطناعي",
        desc: "دمج الذكاء الاصطناعي في أنظمتك الحالية."
      },
      aiEngineering: {
        name: "هندسة الذكاء الاصطناعي",
        desc: "حلول ذكاء اصطناعي متقدمة ونماذج تعلم آلي."
      },
      apiIntegration: {
        name: "تكامل واجهة برمجة التطبيقات",
        desc: "ربط تطبيقاتك بخدمات الطرف الثالث."
      },
      cybersecurity: {
        name: "أمان الويب والتطبيقات",
        desc: "حلول أمن سيبراني شاملة واختبارات الاختراق."
      },
      cloudMigration: {
        name: "إعداد وترحيل البنية السحابية",
        desc: "خدمات ترحيل وإدارة سحابية للبنية التحتية القابلة للتوسع."
      },
      webAssembly: {
        name: "امتثال WebAssembly",
        desc: "تطبيقات ويب عالية الأداء باستخدام WebAssembly."
      },
      seoOptimization: {
        name: "تحسين السرعة ومحركات البحث",
        desc: "تعزيز أداء موقعك وترتيبه في محركات البحث."
      },
      automation: {
        name: "الأتمتة والتكامل",
        desc: "حلول أتمتة بدون كود وكود منخفض."
      },
      localization: {
        name: "تكامل مواقع متعددة اللغات",
        desc: "وسع نطاقك بمواقع محلية متعددة اللغات."
      },
      maintenance: {
        name: "خطة صيانة الموقع/التطبيق",
        desc: "صيانة كخدمة لمنتجاتك الرقمية."
      },
      appDevelopment: {
        name: "تطوير التطبيقات",
        desc: "تطبيقات محمولة أصلية ومتعددة المنصات."
      },
      postersCreation: {
        name: "إنشاء الملصقات",
        desc: "تصاميم ملصقات احترافية وجذابة للتسويق والفعاليات والحملات الترويجية."
      },
      contentWriting: {
        name: "كتابة المحتوى",
        desc: "محتوى جذاب ومحسّن لمحركات البحث يلقى صدى لدى جمهورك ويدفع التحويلات."
      },
      emailMarketing: {
        name: "التسويق عبر البريد الإلكتروني والأتمتة",
        desc: "حملات بريد إلكتروني استراتيجية وسير عمل آلي لتغذية العملاء المحتملين وإشراك العملاء بفعالية."
      },
      analytics: {
        name: "التحليلات",
        desc: "تحليلات بيانات شاملة ورؤى لتتبع الأداء وفهم سلوك المستخدم واتخاذ قرارات مدعومة بالبيانات."
      },
      businessDigitization: {
        name: "حزمة التحول الرقمي الكاملة للأعمال",
        desc: "حلول تحول رقمي شاملة من البداية للنهاية لتحديث جميع عملياتك وعمليات عملك."
      },
      saasDevelopment: {
        name: "تطوير SaaS (البرمجيات كخدمة)",
        desc: "حلول برمجية قابلة للتوسع قائمة على السحابة يتم تقديمها كخدمة، مما يتيح نماذج أعمال قائمة على الاشتراك."
      }
    },
    portfolio: {
      web: "الويب",
      app: "التطبيق",
      ai: "الذكاء الاصطناعي",
      game: "اللعبة"
    },
    about: {
      vision: "رؤيتنا",
      mission: "مهمتنا",
      story: "قصتنا",
      values: "القيم الأساسية"
    },
    footer: {
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      resources: "الموارد",
      copyright: "© 2025 Complex Developers. جميع الحقوق محفوظة."
    }
  }
};

// === Current Language ===
let currentLang = localStorage.getItem('language') || 'en';

// === Theme Management ===
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeToggle(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeToggle(newTheme);
}

function updateThemeToggle(theme) {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  }
}

// === Language Management ===
function initLanguage() {
  updateLanguage(currentLang);
}

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  updateLanguage(lang);
}

function updateLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      value = value?.[k];
    }
    if (value) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        // Check if it's a placeholder translation
        if (el.hasAttribute('placeholder') || el.hasAttribute('data-translate-placeholder')) {
          el.placeholder = value;
        } else {
          el.value = value;
        }
      } else {
        el.textContent = value;
      }
    }
  });

  // Update all elements with data-translate-placeholder attribute
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      value = value?.[k];
    }
    if (value && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
      el.placeholder = value;
    }
  });

  // Update language dropdown
  const langDropdown = document.querySelector('.lang-dropdown');
  if (langDropdown) {
    const langNames = { 
      en: 'English', 
      fr: 'Français', 
      es: 'Español',
      sw: 'Kiswahili',
      de: 'Deutsch',
      ar: 'العربية'
    };
    const langButton = langDropdown.querySelector('.lang-button');
    if (langButton) {
      langButton.textContent = langNames[lang] || 'English';
    }
    // Update active state in dropdown
    langDropdown.querySelectorAll('.lang-option').forEach(option => {
      option.classList.remove('active');
      if (option.getAttribute('data-lang') === lang) {
        option.classList.add('active');
      }
    });
  }
}

// === Loading Animation ===
function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 500);
  }
}

// === Navbar Scroll Effect ===
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// === Mobile Menu Toggle ===
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

// === Scroll Animations ===
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });
}

// === Scroll to Top Button ===
function initScrollTop() {
  const scrollTopBtn = document.querySelector('.scroll-top');
  const quoteBtn = document.querySelector('.quote-button');
  
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
      if (quoteBtn) quoteBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('visible');
      if (quoteBtn) quoteBtn.classList.remove('active');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// === Particles Effect ===
function createParticles() {
  const particlesContainer = document.querySelector('.particles');
  if (!particlesContainer) return;

  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    
    particlesContainer.appendChild(particle);
  }
}

// === Portfolio Filter ===
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter items
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// === EmailJS Configuration ===
// 
// SETUP INSTRUCTIONS:
// 1. Go to https://dashboard.emailjs.com and create a free account
// 2. Create an Email Service (Gmail, Outlook, etc.) and copy the SERVICE_ID
// 3. Create an Email Template with these variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{message}} - Message content
//    - {{to_email}} - Recipient email (optional)
// 4. Copy the TEMPLATE_ID from your template
// 5. Go to Account > API Keys and copy your PUBLIC_KEY
// 6. Replace the values below with your credentials
//
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',      // Your EmailJS Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',    // Your EmailJS Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'        // Your EmailJS Public Key
};

// === Contact Form Handler ===
function initContactForm() {
  const form = document.querySelector('.contact-form form');
  if (!form) return;

  // Initialize EmailJS when SDK is loaded (check periodically if not loaded yet)
  const initEmailJS = () => {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    } else if (EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      // Retry after a short delay if SDK not loaded yet
      setTimeout(initEmailJS, 100);
    }
  };
  initEmailJS();

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.textContent : '';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.SERVICE_ID === 'service_903s2j8' || 
        EMAILJS_CONFIG.TEMPLATE_ID === 'template_l6mvkpc' || 
        EMAILJS_CONFIG.PUBLIC_KEY === 'R2Xn7mUUj4SgdJQqw') {
      alert('EmailJS is not configured. Please add your Service ID, Template ID, and Public Key in script.js');
      return;
    }

    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
      alert('EmailJS SDK is not loaded. Please check your internet connection.');
      return;
    }

    // Get form data
    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      message: formData.get('message'),
      to_email: 'contact@developerscomplex.com' // Your receiving email
    };

    // Show loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      // Success
      if (response.status === 200) {
        // Show success message
        showFormMessage('success', 'Thank you for your message! We will get back to you soon.');
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Show error message
      showFormMessage('error', 'Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      // Reset button state
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });
}

// === Show Form Message ===
function showFormMessage(type, message) {
  // Remove existing messages
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create message element
  const messageEl = document.createElement('div');
  messageEl.className = `form-message form-message-${type}`;
  messageEl.textContent = message;
  messageEl.style.cssText = `
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
    animation: fadeIn 0.3s ease;
    ${type === 'success' 
      ? 'background: rgba(0, 212, 255, 0.1); color: var(--accent-blue); border: 1px solid var(--accent-blue);' 
      : 'background: rgba(255, 0, 0, 0.1); color: #ff4444; border: 1px solid #ff4444;'
    }
  `;

  // Insert after form
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.parentNode.insertBefore(messageEl, form.nextSibling);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      messageEl.style.opacity = '0';
      messageEl.style.transition = 'opacity 0.3s ease';
      setTimeout(() => messageEl.remove(), 300);
    }, 5000);
  } else {
    // Fallback to alert if form not found
    alert(message);
  }
}

// === Initialize Everything ===
document.addEventListener('DOMContentLoaded', () => {
  // Core functionality
  initTheme();
  initLanguage();
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initScrollTop();
  createParticles();
  initPortfolioFilter();
  initContactForm();

  // Hide loader after page loads
  window.addEventListener('load', () => {
    setTimeout(hideLoader, 500);
  });

  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Language dropdown
  const langDropdown = document.querySelector('.lang-dropdown');
  if (langDropdown) {
    const langButton = langDropdown.querySelector('.lang-button');
    const langMenu = langDropdown.querySelector('.lang-menu');
    
    if (langButton && langMenu) {
      langButton.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!langDropdown.contains(e.target)) {
          langDropdown.classList.remove('active');
        }
      });
      
      // Handle language selection
      langMenu.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
          e.stopPropagation();
          const selectedLang = option.getAttribute('data-lang');
          if (selectedLang) {
            changeLanguage(selectedLang);
            langDropdown.classList.remove('active');
          }
        });
      });
    }
  }
});

// Export for use in HTML
window.translations = translations;
window.currentLang = () => currentLang;
window.changeLanguage = changeLanguage;
window.toggleTheme = toggleTheme;

