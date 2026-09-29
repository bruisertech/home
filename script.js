document.addEventListener('DOMContentLoaded', () => {
    // 1. Bilingual Dictionary & Multilingual Engine
    const translations = {
        es: {
            nav_home: "inicio",
            nav_about: "sobre nosotros",
            nav_services: "servicios",
            nav_projects: "proyectos",
            nav_pentesting: "pentesting",
            nav_contact: "contacto",

            hero_badge: "Consultoría & Desarrollo B2B",
            hero_title: '¿Te abruma la infraestructura web?<br><span class="highlight">déjalo en nuestras manos ;)</span>',
            hero_subtitle: "Optimizamos tu operación, blindamos tus sistemas y construimos plataformas digitales a la medida para que te concentres en hacer crecer tu negocio.",
            hero_cta_primary: "impulsemos tu proyecto",
            hero_cta_secondary: "mira nuestro trabajo",

            pillars_badge: "Propuesta de Valor",
            pillars_title: "¿Por qué Bruiser Tech? La tecnología no debería frenar tu crecimiento, debería acelerarlo.",

            pillar1_title: "Mejorar eficiencia",
            pillar1_subtitle: "Procesos más ágiles",
            pillar1_desc: "Optimizamos flujos de trabajo para operar con mayor velocidad y menor fricción operativa en tus plataformas.",

            pillar2_title: "Reducir fallos",
            pillar2_subtitle: "Operaciones precisas",
            pillar2_desc: "Automatizamos y estructuramos infraestructuras para minimizar caídas, errores críticos y retrabajo técnico.",

            pillar3_title: "Escalar tu negocio",
            pillar3_subtitle: "Tecnología que crece contigo",
            pillar3_desc: "Arquitecturas preparadas para soportar alto tráfico, transacciones masivas e incremento sostenido de demanda.",

            pillar4_title: "Desbloquear oportunidades",
            pillar4_subtitle: "Innovación a medida",
            pillar4_desc: "Desarrollo de software y soluciones a medida para liderar en tu sector y expandir tu presencia digital.",

            services_badge: "Especialidades",
            services_title: "Servicios de Ingeniería & Arquitectura Digital",
            services_desc: "Soluciones integrales de alto nivel para potenciar la infraestructura y el ecosistema tecnológico de tu empresa.",

            srv1_badge: "INFRAESTRUCTURA & CLOUD",
            srv1_title: "Infraestructura, Nube y Servidores",
            srv1_desc: "Gestión integral de servidores Nginx y Apache, migraciones seguras (AWS, VPS, hosting dedicado), optimización de rendimiento, balanceo de carga y monitoreo 24/7.",

            srv2_badge: "BACKEND & API",
            srv2_title: "Desarrollo Backend & Integraciones",
            srv2_desc: "Ingeniería de software en Python y PHP 8.3, diseño de APIs REST escalables, microservicios y acoplamiento fluido entre sistemas empresariales existentes.",

            srv3_badge: "WEB & E-COMMERCE",
            srv3_title: "Arquitectura Web & E-Commerce",
            srv3_desc: "Creación de plataformas web de alto impacto, tiendas e-commerce a medida y desarrollos avanzados en WordPress y WooCommerce optimizados para velocidad y conversión.",

            srv4_badge: "SEGURIDAD & AUTOMATIZACIÓN",
            srv4_title: "Seguridad & Automatización de Procesos",
            srv4_desc: "Blindaje de endpoints, protección de la integridad de datos empresariales, auditorías de seguridad y automatización de flujos operativos repetitivos para reducir costos.",

            projects_badge: "Casos de Éxito",
            projects_title: "Lo Que Hemos Construido",
            projects_desc: "Proyectos reales diseñados con arquitectura limpia, velocidad extrema y foco en resultados B2B.",

            p1_tag: "IA & Analytics",
            p1_desc: "Algoritmos de inferencia y analítica predictiva. Arquitectura de procesamiento de datos en tiempo real diseñada para análisis y toma de decisiones autónomas.",

            p2_tag: "E-Commerce Desacoplado",
            p2_desc: "Plataforma e-commerce desacoplada con frontend personalizado a medida y plugin propietario para consumo e integración automática de APIs.",

            p3_tag: "Branding & Web Architecture",
            p3_desc: "Arquitectura de marca, catálogo digital e interfaces de usuario para una presencia digital coherente y moderna.",

            p4_tag: "Motion Design & Interactive",
            p4_desc: "Plataforma interactiva con animación web de alto rendimiento, optimizada para bajo impacto en el hilo principal del navegador.",

            view_project: "Ver sitio web →",
            view_brand: "Ver manual de marca →",

            testimonials_badge: "Testimonios",
            testimonials_title: "Lo Que Dicen Nuestros Clientes",

            test1_quote: '"Trabajar con Bruiser Tech fue un giro total para nuestra infraestructura. Migraron la plataforma desacoplada sin tiempo de inactividad y la velocidad de carga aumentó exponencialmente."',
            test1_title: "Dirección de Operaciones",
            test1_role: "Sector E-Commerce & Perfumería High-End",

            test2_quote: '"Resolvieron cuellos de botella críticos de arquitectura y consumo de APIs que otros proveedores consideraban inviables. La disponibilidad operativa de nuestros sistemas es ahora del 99.9%."',
            test2_title: "Liderazgo de Tecnología",
            test2_role: "Infraestructura & Plataformas Web",

            test3_quote: '"Entendieron la complejidad técnica desde el primer día. Desarrollaron una suite interactiva de alto rendimiento lista para soportar alto tráfico simultáneo."',
            test3_title: "CTO & Founder",
            test3_role: "Plataforma Interactiva & Digital Products",

            contact_badge: "Contacto Directo",
            contact_title: "Hablemos de tu proyecto o problema técnico",
            contact_subtitle: "Estamos listos para analizar tus requerimientos de infraestructura, desarrollo o software a medida.",
            contact_whatsapp_label: "WhatsApp Directo",
            contact_email_label: "Correo Electrónico",
            contact_location_label: "Ubicación",

            form_name_label: "Nombre completo",
            form_email_label: "Correo electrónico",
            form_company_label: "Empresa",
            form_phone_label: "Teléfono / WhatsApp",
            form_message_label: "Descripción del proyecto",
            form_submit: "Enviar mensaje",

            // About page
            about_badge: "Nuestra Filosofía & Metodología",
            about_hero_title: "Ingeniería de software pragmática para empresas con visión de escala",
            about_hero_subtitle: "En Bruiser Tech eliminamos la fricción técnica. Diseñamos, optimizamos y blindamos la infraestructura digital de negocios en crecimiento con precisión y velocidad.",
            methodology_badge: "Principios B2B",
            methodology_title: "Cómo Trabajamos",
            methodology_subtitle: "Nuestra arquitectura se basa en estabilidad, rendimiento extremo y mantenimiento libre de sorpresas.",

            // Services page
            services_page_badge: "Servicios de Ingeniería",
            services_page_title: "Soluciones tecnológicas diseñadas para alto rendimiento operativo",
            services_page_subtitle: "Abarcamos todo el ciclo de vida de tu plataforma: desde la arquitectura de servidores hasta el desarrollo backend y la protección de datos.",

            // Projects page
            projects_page_badge: "Casos de Estudio & Portafolio",
            projects_page_title: "Ingeniería probada en producción",
            projects_page_subtitle: "Descubre cómo transformamos desafíos técnicos complejos en sistemas eficientes, plataformas e-commerce ultrarrápidas y algoritmos de alta precisión.",

            // Pentesting page
            pentest_badge: "Seguridad & Ciberdefensa",
            pentest_title: "Simulador de Pentesting & Auditoría Web",
            pentest_subtitle: "Ingresa el dominio de tu empresa para ejecutar un diagnóstico rápido de cabeceras de seguridad, puertos de servicio y configuración de certificados SSL.",
            scanner_heading: "Escáner de Vulnerabilidades Web (Demo)",
            scanner_sub: "Ingresa la URL pública de tu plataforma para simular la auditoría inicial de seguridad.",
            scan_btn: "Escanear Sitio Web",
            wip_title: "WORK IN PROGRESS — Módulo Automatizado en Desarrollo",
            wip_desc: "Nuestro motor de prueba de penetración automatizado en tiempo real se encuentra actualmente en fase Beta activa. Para una auditoría técnica profunda ejecutada manualmente por nuestro equipo de infraestructura, solicita una revisión con un ingeniero senior.",
            wip_cta: "Solicitar Pentesting Manual",

            footer_tagline: "Consultoría de Software, Infraestructura Web y Arquitectura Digital."
        },
        en: {
            nav_home: "home",
            nav_about: "about us",
            nav_services: "services",
            nav_projects: "projects",
            nav_pentesting: "pentesting",
            nav_contact: "contact",

            hero_badge: "B2B Consulting & Development",
            hero_title: 'Overwhelmed by web infrastructure?<br><span class="highlight">leave it in our hands ;)</span>',
            hero_subtitle: "We optimize your operations, shield your systems, and build custom digital platforms so you can focus on growing your business.",
            hero_cta_primary: "let's drive your project",
            hero_cta_secondary: "view our work",

            pillars_badge: "Value Proposition",
            pillars_title: "Why Bruiser Tech? Technology shouldn't hold your growth back, it should accelerate it.",

            pillar1_title: "Improve Efficiency",
            pillar1_subtitle: "Agile processes",
            pillar1_desc: "We streamline workflows to operate with maximum speed and minimal operational friction across your platforms.",

            pillar2_title: "Reduce Failures",
            pillar2_subtitle: "Precise operations",
            pillar2_desc: "We automate and structure infrastructures to minimize downtime, critical errors, and technical rework.",

            pillar3_title: "Scale Your Business",
            pillar3_subtitle: "Tech that grows with you",
            pillar3_desc: "Architectures engineered to handle high traffic, massive transaction volumes, and sustained growth.",

            pillar4_title: "Unlock Opportunities",
            pillar4_subtitle: "Tailored innovation",
            pillar4_desc: "Custom software development and bespoke solutions to lead your sector and expand your digital presence.",

            services_badge: "Specialties",
            services_title: "Engineering & Digital Architecture Services",
            services_desc: "High-level end-to-end solutions to power up your company's infrastructure and tech ecosystem.",

            srv1_badge: "INFRASTRUCTURE & CLOUD",
            srv1_title: "Infrastructure, Cloud & Servers",
            srv1_desc: "Full management of Nginx & Apache servers, secure migrations (AWS, VPS, dedicated hosting), performance tuning, load balancing, and 24/7 monitoring.",

            srv2_badge: "BACKEND & API",
            srv2_title: "Backend Development & Integrations",
            srv2_desc: "Software engineering in Python and PHP 8.3, scalable REST API design, microservices, and smooth coupling with legacy enterprise systems.",

            srv3_badge: "WEB & E-COMMERCE",
            srv3_title: "Web Architecture & E-Commerce",
            srv3_desc: "High-impact web platforms, bespoke e-commerce stores, and advanced WordPress/WooCommerce builds optimized for speed and conversion.",

            srv4_badge: "SECURITY & AUTOMATION",
            srv4_title: "Security & Process Automation",
            srv4_desc: "Endpoint hardening, enterprise data integrity protection, security audits, and automation of repetitive operational workflows to cut costs.",

            projects_badge: "Case Studies",
            projects_title: "What We Have Built",
            projects_desc: "Real projects designed with clean architecture, extreme speed, and a strong focus on B2B results.",

            p1_tag: "AI & Analytics",
            p1_desc: "Inference algorithms and predictive analytics. Real-time data processing architecture designed for autonomous analysis and decision making.",

            p2_tag: "Decoupled E-Commerce",
            p2_desc: "Decoupled e-commerce platform featuring custom frontend and proprietary plugin for automated API consumption.",

            p3_tag: "Branding & Web Architecture",
            p3_desc: "Brand architecture, digital catalog, and UI interfaces engineered for a modern, consistent digital presence.",

            p4_tag: "Motion Design & Interactive",
            p4_desc: "Interactive platform with high-performance web animations, optimized for minimal impact on the browser main thread.",

            view_project: "Visit website →",
            view_brand: "View brand manual →",

            testimonials_badge: "Testimonials",
            testimonials_title: "What Our Clients Say",

            test1_quote: '"Working with Bruiser Tech was a total game changer for our infrastructure. They migrated our decoupled platform zero-downtime and page load speed increased exponentially."',
            test1_title: "Director of Operations",
            test1_role: "E-Commerce & High-End Perfumery Sector",

            test2_quote: '"They solved critical architecture and API consumption bottlenecks that other vendors deemed impossible. Our system uptime is now at 99.9%."',
            test2_title: "Technology Leadership",
            test2_role: "Web Platforms & Infrastructure",

            test3_quote: '"They understood our technical complexity from day one. They developed an interactive, high-performance suite ready to support high concurrent traffic."',
            test3_title: "CTO & Founder",
            test3_role: "Interactive Platforms & Digital Products",

            contact_badge: "Direct Contact",
            contact_title: "Let's discuss your project or technical challenge",
            contact_subtitle: "We are ready to review your infrastructure, custom development, or engineering requirements.",
            contact_whatsapp_label: "Direct WhatsApp",
            contact_email_label: "Email Address",
            contact_location_label: "Location",

            form_name_label: "Full Name",
            form_email_label: "Email Address",
            form_company_label: "Company",
            form_phone_label: "Phone / WhatsApp",
            form_message_label: "Project Description",
            form_submit: "Send Message",

            // About page
            about_badge: "Our Philosophy & Methodology",
            about_hero_title: "Pragmatic software engineering for ambitious companies",
            about_hero_subtitle: "At Bruiser Tech we eliminate technical friction. We design, optimize, and shield digital infrastructure for growing businesses with precision and speed.",
            methodology_badge: "B2B Principles",
            methodology_title: "How We Work",
            methodology_subtitle: "Our architecture is built on stability, extreme performance, and surprise-free maintenance.",

            // Services page
            services_page_badge: "Engineering Services",
            services_page_title: "Technology solutions engineered for operational performance",
            services_page_subtitle: "We cover your platform's full lifecycle: from server architecture to backend engineering and data protection.",

            // Projects page
            projects_page_badge: "Case Studies & Portfolio",
            projects_page_title: "Production-proven engineering",
            projects_page_subtitle: "Discover how we turn complex technical challenges into efficient systems, lightning-fast e-commerce platforms, and high-precision algorithms.",

            // Pentesting page
            pentest_badge: "Security & Cyberdefense",
            pentest_title: "Pentesting Simulator & Web Audit",
            pentest_subtitle: "Enter your company domain to run a rapid assessment of security headers, service ports, and SSL certificate setup.",
            scanner_heading: "Web Vulnerability Scanner (Demo)",
            scanner_sub: "Enter your platform public URL to simulate an initial security audit.",
            scan_btn: "Scan Website",
            wip_title: "WORK IN PROGRESS — Automated Module Under Active Development",
            wip_desc: "Our real-time automated penetration test engine is currently in active Beta. For a deep manual technical audit conducted by senior infrastructure engineers, request a review with our team.",
            wip_cta: "Request Manual Pentest",

            footer_tagline: "Software Consulting, Web Infrastructure & Digital Architecture."
        }
    };

    let currentLang = 'es';

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;

        // Toggle active button style
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Translate elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
    }

    // Attach language switcher listeners
    document.getElementById('lang-es')?.addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en')?.addEventListener('click', () => setLanguage('en'));

    // 2. Mobile Hamburger Navigation
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-open');
        });

        // Close menu when clicking link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('mobile-open');
            });
        });
    }

    // 3. Contact Form WhatsApp Redirection
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const company = document.getElementById('company')?.value || 'N/A';
            const phone = document.getElementById('phone')?.value || 'N/A';
            const message = document.getElementById('message')?.value || '';

            const waText = `*Nuevo Mensaje desde Bruiser Tech Website*%0A%0A` +
                `*Nombre:* ${encodeURIComponent(name)}%0A` +
                `*Correo:* ${encodeURIComponent(email)}%0A` +
                `*Empresa:* ${encodeURIComponent(company)}%0A` +
                `*Teléfono:* ${encodeURIComponent(phone)}%0A%0A` +
                `*Proyecto:* ${encodeURIComponent(message)}`;

            const waUrl = `https://wa.me/573053862774?text=${waText}`;
            window.open(waUrl, '_blank');
        });
    }

    // 4. Pentesting Interactive Terminal Simulation
    const pentestForm = document.getElementById('pentest-scanner-form');
    const terminalOutput = document.getElementById('terminal-output');

    if (pentestForm && terminalOutput) {
        pentestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const targetUrl = document.getElementById('target-url')?.value || 'https://tuempresa.com';

            terminalOutput.innerHTML = '';

            const logs = [
                `[+] Iniciando BruiserSec Audit Engine en ${targetUrl}...`,
                `[+] Resolviendo DNS A/AAAA registros... OK`,
                `[+] Conectando a target host vía TLS 1.3... SSL Handshake Exitoso`,
                `[*] Inspeccionando cabeceras HTTP:`,
                `    - Content-Security-Policy (CSP): [PRESENTE]`,
                `    - Strict-Transport-Security (HSTS): [DETECTADO - 31536000s]`,
                `    - X-Frame-Options: [SAMEORIGIN]`,
                `[*] Realizando banner grabbing en puertos de servicio (80, 443, 8080, 8443)...`,
                `[!] ALERTA: Módulo de escaneo profundo automatizado en desarrollo (Work in Progress).`,
                `[+] Para obtener una auditoría manual exhaustiva y prueba de penetración en tiempo real, contacta directamente a nuestro equipo técnico.`
            ];

            let index = 0;
            const scanBtn = document.getElementById('scan-btn');
            if (scanBtn) scanBtn.disabled = true;

            const interval = setInterval(() => {
                if (index < logs.length) {
                    const line = document.createElement('div');
                    line.style.marginBottom = '4px';
                    if (logs[index].startsWith('[!]')) {
                        line.style.color = '#f59e0b';
                        line.style.fontWeight = 'bold';
                    } else if (logs[index].startsWith('[+]')) {
                        line.style.color = '#10b981';
                    } else {
                        line.style.color = '#9ca3af';
                    }
                    line.innerText = logs[index];
                    terminalOutput.appendChild(line);
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                    index++;
                } else {
                    clearInterval(interval);
                    if (scanBtn) scanBtn.disabled = false;
                }
            }, 350);
        });
    }
});
