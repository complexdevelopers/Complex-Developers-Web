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
      copyright: "© 2024 Complex Developers. All rights reserved."
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
      copyright: "© 2024 Complex Developers. Tous droits réservés."
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
      copyright: "© 2024 Complex Developers. Todos los derechos reservados."
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

  // Update language toggle
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    const langNames = { en: 'EN', fr: 'FR', es: 'ES' };
    langToggle.textContent = langNames[lang] || 'EN';
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

// === Contact Form Handler ===
function initContactForm() {
  const form = document.querySelector('.contact-form form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Here you would normally send to Formspree, EmailJS, or your backend
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  });
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

  // Language toggle
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const langs = ['en', 'fr', 'es'];
      const currentIndex = langs.indexOf(currentLang);
      const nextIndex = (currentIndex + 1) % langs.length;
      changeLanguage(langs[nextIndex]);
    });
  }
});

// Export for use in HTML
window.translations = translations;
window.currentLang = () => currentLang;
window.changeLanguage = changeLanguage;
window.toggleTheme = toggleTheme;

