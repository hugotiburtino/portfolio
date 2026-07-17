// ===============================================
// INTERNATIONALIZATION (i18n)
// ===============================================

const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            greeting: "Hi, I'm",
            title: "Full Stack Developer & DevOps Engineer",
            description: "Building scalable applications and automating infrastructure with modern technologies",
            viewWork: "View My Work",
            getInTouch: "Get In Touch"
        },
        about: {
            title: "About Me",
            description1: "I'm a passionate Full Stack Developer and DevOps Engineer with a strong focus on building efficient, scalable applications and automating infrastructure. Above all, I contribute to the organization in order to see everybody happy: clients, colleagues and myself 😄",
            description2: "I contributed to various web app projects working on infrastructure management, automating deployment and adding features."
        },
        skills: {
            title: "Skills & Technologies",
            frontend: "Frontend Development",
            backend: "Backend Development",
            devops: "DevOps & Cloud",
            tools: "Tools & Others"
        },
        projects: {
            title: "Featured Projects",
            'serlo-infra': {
                description: "Reorganized the code, simplified the infrastructure, saved costs."
            },
            kanban: {
                description: "Contributed to a real-time Kanban Board based on Nostr Protocol."
            },
            'serlo-api': {
                description: "Maintained and developed the Graphl API of serlo.org"
            },
            viewCode: "View Code",
            viewAll: "View All Projects on GitHub"
        },
        contact: {
            title: "Get In Touch",
            subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
            email: "Email"
        }
    },
    pt: {
        nav: {
            home: "Início",
            about: "Sobre",
            skills: "Habilidades",
            projects: "Projetos",
            contact: "Contato"
        },
        hero: {
            greeting: "Olá, eu sou",
            title: "Desenvolvedor Full Stack & Engenheiro DevOps",
            description: "Construindo aplicações escaláveis e automatizando infraestrutura com tecnologias modernas",
            viewWork: "Ver Meu Trabalho",
            getInTouch: "Entre em Contato"
        },
        about: {
            title: "Sobre Mim",
            description1: "Sou um Desenvolvedor Full Stack e Engenheiro DevOps apaixonado, com forte foco na construção de aplicações eficientes e escaláveis e automação de infraestrutura. Acima de tudo, contribuo para a organização com o intuito de ver todo mundo feliz: clientes, colegas e a mim mesmo 😄",
            description2: "Contribuí para vários projetos de aplicações da web, trabalhando no gerenciamento da infraestrutura, automatizando o deploy e adicionando funcionalidades",
        },
        skills: {
            title: "Habilidades & Tecnologias",
            frontend: "Desenvolvimento Frontend",
            backend: "Desenvolvimento Backend",
            devops: "DevOps & Nuvem",
            tools: "Ferramentas & Outros"
        },
        projects: {
            title: "Projetos em Destaque",
            'serlo-infra': {
                description: "Reorganizou o código, simplificou a infraestrutura, enconomizou os gastos."
            },
            kanban: {
                description: "Contribuiu para um quadro kanban em tempo real, baseado no protocolo Nostr."
            },
            'serlo-api': {
                description: "Manteve e desenvolveu o Graphl API de serlo.org"
            },
            viewCode: "Ver Código",
            viewAll: "Ver Todos os Projetos no GitHub"
        },
        contact: {
            title: "Entre em Contato",
            subtitle: "Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.",
            email: "E-mail"
        }
    },
    de: {
        nav: {
            home: "Start",
            about: "Über",
            skills: "Fähigkeiten",
            projects: "Projekte",
            contact: "Kontakt"
        },
        hero: {
            greeting: "Hallo, ich bin",
            title: "Full Stack Entwickler & DevOps Ingenieur",
            description: "Entwicklung skalierbarer Anwendungen und Automatisierung der Infrastruktur mit modernen Technologien",
            viewWork: "Meine Arbeit ansehen",
            getInTouch: "Kontakt aufnehmen"
        },
        about: {
            title: "Über Mich",
            description1: "Ich bin ein leidenschaftlicher Full Stack Entwickler und DevOps Ingenieur mit starkem Fokus auf den Aufbau effizienter, skalierbarer Anwendungen und die Automatisierung von Infrastruktur. Vor allem trage ich zu der Organisation bei, um alle glücklich zu sehen: Klienten, Mitarbeitende und mich selbst 😄.",
            description2: "Ich habe zu mehreren Web-App-Projekten beigetragen, darunter Infrastrukturmanagement, Automatisierung von Deployment und Feature-Entwicklung.",
        },
        skills: {
            title: "Fähigkeiten & Technologien",
            frontend: "Frontend Entwicklung",
            backend: "Backend Entwicklung",
            devops: "DevOps & Cloud",
            tools: "Tools & Sonstiges"
        },
        projects: {
            title: "Featured Projekte",
            'serlo-infra': {
                description: "Hat den Code reorganisiert, die Infrastruktur vereinfacht und Kosten gesenkt."
            },
            kanban: {
                description: "Hat zu einem Echtzeit-Kanban-Board auf Basis des Nostr-Protokolls beigetragen."
            },
            'serlo-api': {
                description: "Hat die GraphQL-API von serlo.org gewartet und weiterentwickelt."
            },
            viewCode: "Code ansehen",
            viewAll: "Alle Projekte auf GitHub ansehen"
        },
        contact: {
            title: "Kontakt aufnehmen",
            subtitle: "Ich bin immer offen für Diskussionen über neue Projekte, kreative Ideen oder Möglichkeiten, Teil Ihrer Vision zu werden.",
            email: "E-Mail",
            form: {
                name: "Ihr Name",
                email: "Ihre E-Mail",
                subject: "Betreff",
                message: "Ihre Nachricht",
                send: "Nachricht senden"
            }
        }
    }
}

let currentLang = (navigator.language || navigator.userLanguage).split("-")[0];

function getTranslation(key, lang = currentLang) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            return key; // Return key if translation not found
        }
    }
    
    return value;
}

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        
        // Special handling for elements that might contain HTML
        if (element.tagName === 'P' && element.querySelector('strong')) {
            // Keep the strong tags for organization names
            if (key === 'about.description2') {
                if (lang === 'en') {
                    element.innerHTML = 'I work with organizations like <strong>Serlo</strong> and <strong>edufeed-org</strong>, contributing to various projects including kanban editors, onboarding tools, and infrastructure management using Terraform and modern cloud technologies.';
                } else if (lang === 'pt') {
                    element.innerHTML = 'Trabalho com organizações como <strong>Serlo</strong> e <strong>edufeed-org</strong>, contribuindo para vários projetos incluindo editores kanban, ferramentas de integração e gerenciamento de infraestrutura usando Terraform e tecnologias modernas de nuvem.';
                } else if (lang === 'de') {
                    element.innerHTML = 'Ich arbeite mit Organisationen wie <strong>Serlo</strong> und <strong>edufeed-org</strong> zusammen und trage zu verschiedenen Projekten bei, darunter Kanban-Editoren, Onboarding-Tools und Infrastrukturmanagement mit Terraform und modernen Cloud-Technologien.';
                }
            } else {
                element.textContent = translation;
            }
        } else {
            element.textContent = translation;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = getTranslation(key, lang);
    });
    
    // Update language button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update hero subtitle for typing effect
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.setAttribute('data-original-text', getTranslation('hero.title', lang));
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
    
    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
});

// ===============================================
// NAVIGATION FUNCTIONALITY
// ===============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===============================================
// SMOOTH SCROLLING
// ===============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================================
// BACK TO TOP BUTTON
// ===============================================

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===============================================
// SCROLL ANIMATIONS
// ===============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateOnScroll = document.querySelectorAll(
    '.skill-category, .project-card, .contact-item, .stat-item, .about-text, .code-window'
);

animateOnScroll.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===============================================
// TYPING EFFECT FOR HERO SUBTITLE
// ===============================================

function startTypingEffect() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const subtitleText = heroSubtitle.getAttribute('data-original-text') || heroSubtitle.textContent;
    heroSubtitle.textContent = '';

    let charIndex = 0;
    function typeWriter() {
        if (charIndex < subtitleText.length) {
            heroSubtitle.textContent += subtitleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
}

// Start typing effect after page loads
window.addEventListener('load', () => {
    setTimeout(startTypingEffect, 500);
});

// ===============================================
// ANIMATED COUNTER FOR STATS
// ===============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ===============================================
// DYNAMIC PARTICLE BACKGROUND
// ===============================================

function createParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(99, 102, 241, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${5 + Math.random() * 10}s infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create particles on load
window.addEventListener('load', createParticles);

// ===============================================
// PROJECT CARD TILT EFFECT
// ===============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===============================================
// SKILL TAG HOVER EFFECT
// ===============================================

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===============================================
// CONSOLE MESSAGE
// ===============================================

function displayConsoleMessage() {
    const messages = {
        en: {
            name: '👨‍💻 Hugo Tiburtino',
            role: 'Full Stack Developer & DevOps Engineer',
            cta: 'Interested in collaboration? Let\'s talk!',
            link: '🔗 https://github.com/hugotiburtino'
        },
        pt: {
            name: '👨‍💻 Hugo Tiburtino',
            role: 'Desenvolvedor Full Stack & Engenheiro DevOps',
            cta: 'Interessado em colaboração? Vamos conversar!',
            link: '🔗 https://github.com/hugotiburtino'
        },
        de: {
            name: '👨‍💻 Hugo Tiburtino',
            role: 'Full Stack Entwickler & DevOps Ingenieur',
            cta: 'Interessiert an Zusammenarbeit? Lass uns reden!',
            link: '🔗 https://github.com/hugotiburtino'
        }
    };
    
    const msg = messages[currentLang] || messages.en;
    
    console.log(`%c${msg.name}`, 'font-size: 24px; font-weight: bold; color: #6366f1;');
    console.log(`%c${msg.role}`, 'font-size: 14px; color: #8b5cf6;');
    console.log(`%c${msg.cta}`, 'font-size: 12px; color: #94a3b8;');
    console.log(`%c${msg.link}`, 'font-size: 12px; color: #ec4899;');
}

// Display console message after language is set
setTimeout(displayConsoleMessage, 1000);
