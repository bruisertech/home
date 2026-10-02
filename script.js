document.addEventListener('DOMContentLoaded', () => {
    // 1. Bilingual Dictionary & Multilingual Engine
    const translations = {
        es: {
            nav_home: "inicio",
            nav_about: "sobre nosotros",
            nav_bruisercare: "bruiser care",
            nav_services: "servicios",
            nav_projects: "proyectos",
            nav_pentesting: "pentesting",
            nav_contact: "contacto",

            hero_badge: "Consultoría & Desarrollo B2B",
            hero_line1: "¿Te abruma la infraestructura web?",
            hero_line2: "déjalo en nuestras manos ;)",
            hero_line3: "CONOCE BRUISER CARE",
            hero_subtitle: "Tu web profesional en línea desde $45.900 COP / mes. Sin enredos técnicos ni costos ocultos.",
            hero_cta_primary: "Descubrir Bruiser Care",
            hero_cta_secondary: "Ver Desarrollo Tradicional",

            // Two Paths Block
            two_paths_badge: "• RUTAS DE DESARROLLO",
            two_paths_title: "Dos caminos para llevar tu proyecto a la realidad",
            path_care_tag: "Suscripción WaaS",
            path_care_sub: "Infraestructura + tu equipo técnico de confianza mes a mes.",
            path_care_price: 'Desde $45.900 COP <span style="font-size: 1rem; font-weight: 600; color: var(--text-secondary);">/ mes</span>',
            path_care_desc: "Web en línea en &lt;20 días, soporte básico ilimitado y servidores administrados.",
            path_care_cta: "Explorar plan detallado →",
            path_trad_sub: "Desarrollo y entrega llave en mano para gestión propia.",
            path_trad_price: 'Desde $455.990 COP <span style="font-size: 1rem; font-weight: 600; color: var(--text-secondary);">pago único</span>',
            path_trad_desc: "Código propio, entrega completa y gestión autónoma.",
            path_trad_cta: "Cotizar desarrollo único →",

            // Bruiser Care Dedicated Page
            care_badge: "• MODELO WAAS // WEBSITE AS A SERVICE",
            care_title: "Bruiser Care: Tu equipo técnico de confianza mes a mes",
            care_subtitle: "Olvídate de servidores, caídas y parches de seguridad. Nos encargamos de toda tu infraestructura mientras tú te enfocas en vender.",
            care_speed_highlight: "⚡ Tu web en línea en menos de 20 días tras la confirmación del pago.",
            care_price_anchor: 'Planes desde <span style="color: var(--brand-coral);">$45.900 COP / mes</span> (sujeto a valoración técnica inicial).',
            care_hero_cta: "Solicitar valoración de mi proyecto",

            infra_badge: "Infraestructura Robusta",
            infra_title: "Arquitectura y Hosting Privado de Alto Rendimiento",
            infra_quote: '"Estamos aliados estratégicamente con proveedores de infraestructura privada en la nube, blindados con seguridad perimetral, almacenamiento NVMe de ultra baja latencia y enlaces redundantes de alta velocidad."',
            infra_feat1_title: "Alto Tráfico & Picos",
            infra_feat1_desc: "Capacidad para alojar arquitecturas de alto tráfico, catálogo masivo y picos de demanda concurrentes sin degradación de velocidad.",
            infra_feat2_title: "SSL & Cifrado Dedicado",
            infra_feat2_desc: "Certificados SSL/TLS dedicados instalados y gestionados automáticamente para garantizar la confidencialidad de tus usuarios.",
            infra_feat3_title: "Backups Diarios Automatic",
            infra_feat3_desc: "Copias de seguridad diarias automatizadas almacenadas fuera de sitio (off-site) con recuperación inmediata de desastres.",

            scope_badge: "Alcance Operativo",
            scope_title: "¿Qué Incluye tu Suscripción Bruiser Care?",
            scope_subtitle: "Transparencia total sobre lo incluido en tu mensualidad y cómo gestionamos los requerimientos adicionales.",
            scope_basic_title: "Soporte Básico Ilimitado",
            scope_basic_tag: "INCLUIDO EN LA MENSUALIDAD",
            scope_basic_1: "<strong>Monitoreo continuo 24/7:</strong> Supervisión constante de uptime y resolución inmediata ante caídas o anomalías del servidor.",
            scope_basic_2: "<strong>Mantenimiento preventivo:</strong> Actualizaciones periódicas de CMS, plugins, licencias, certificados SSL y parches críticos de seguridad.",
            scope_basic_3: "<strong>Ajustes menores de contenidos:</strong> Cambios de textos, reemplazo de imágenes proporcionadas por ti, actualización de horarios, números o datos de contacto.",
            scope_basic_4: "<strong>Optimización continua:</strong> Ajustes constantes de velocidad y rendimiento de carga (Core Web Vitals).",
            scope_major_title: "Cambios Mayores & Módulos",
            scope_major_tag: "COSTO ADICIONAL PREFERENCIAL",
            scope_major_def: "<strong>Definición:</strong> Creación de nuevas secciones estructurales, integración de pasarelas de pago no contempladas inicialmente, integraciones complejas con APIs de terceros o software a medida.",
            scope_guarantee_title: "Garantía Comercial Preferencial",
            scope_guarantee_desc: '"Cualquier requerimiento mayor será evaluado directamente con nuestro equipo técnico, ofreciéndote soluciones a la medida con tarifas preferenciales sustancialmente más favorables que los costos abiertos del mercado."',

            terms_badge: "Condiciones Claras",
            terms_title: "Términos de Continuidad y Renovación",
            terms_contract_title: "Contrato Anual Protegido",
            terms_contract_desc: "Acuerdo de suscripción de 12 meses con cobro recurrente mensual. Renovación anual con un incremento tope garantizado de máximo el <strong>8%</strong>, protegiendo tu presupuesto de la inflación.",
            terms_rule_title: "Regla de Operación",
            terms_rule_desc: "La web permanece activa y alojada en nuestros servidores optimizados mientras la suscripción mensual esté vigente, asegurando rendimiento, parches y estabilidad continua.",

            care_cta_badge: "Comienza Hoy",
            care_cta_title: "¿Listo para dejar tu web en nuestras manos?",
            care_cta_desc: "Solicita la valoración técnica de tu proyecto y pon tu web en línea en menos de 20 días.",
            care_cta_wa: "💬 Valoración técnica por WhatsApp",
            care_cta_form: "✉️ Formulario de contacto",

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
            nav_bruisercare: "bruiser care",
            nav_services: "services",
            nav_projects: "projects",
            nav_pentesting: "pentesting",
            nav_contact: "contact",

            hero_badge: "B2B Consulting & Development",
            hero_line1: "Overwhelmed by web infrastructure?",
            hero_line2: "leave it in our hands ;)",
            hero_line3: "DISCOVER BRUISER CARE",
            hero_subtitle: "Your professional website online from $45,900 COP / month. No technical complexity, no hidden fees.",
            hero_cta_primary: "Discover Bruiser Care",
            hero_cta_secondary: "View Traditional Development",

            // Two Paths Block
            two_paths_badge: "• DEVELOPMENT PATHS",
            two_paths_title: "Two paths to bring your project to life",
            path_care_tag: "WaaS Subscription",
            path_care_sub: "Infrastructure + your trusted tech team month after month.",
            path_care_price: 'From $45,900 COP <span style="font-size: 1rem; font-weight: 600; color: var(--text-secondary);">/ month</span>',
            path_care_desc: "Website live in &lt;20 days, unlimited basic support, and fully managed servers.",
            path_care_cta: "Explore detailed plan →",
            path_trad_sub: "Turnkey development and delivery for self-management.",
            path_trad_price: 'From $455,990 COP <span style="font-size: 1rem; font-weight: 600; color: var(--text-secondary);">one-time payment</span>',
            path_trad_desc: "Own code, complete handover, and autonomous control.",
            path_trad_cta: "Quote custom build →",

            // Bruiser Care Dedicated Page
            care_badge: "• WAAS MODEL // WEBSITE AS A SERVICE",
            care_title: "Bruiser Care: Your trusted tech team month after month",
            care_subtitle: "Forget about server crashes, security patches, and downtime. We handle your entire web infrastructure so you can focus on sales.",
            care_speed_highlight: "⚡ Your website online in less than 20 days upon payment confirmation.",
            care_price_anchor: 'Plans starting at <span style="color: var(--brand-coral);">$45,900 COP / month</span> (subject to initial technical assessment).',
            care_hero_cta: "Request project assessment",

            infra_badge: "Robust Infrastructure",
            infra_title: "High-Performance Architecture & Private Cloud Hosting",
            infra_quote: '"We strategically partner with private cloud infrastructure providers, shielded with perimeter security, ultra-low latency NVMe storage, and high-speed redundant links."',
            infra_feat1_title: "High Traffic & Spikes",
            infra_feat1_desc: "Engineered to host high-traffic architectures, massive product catalogs, and concurrent demand spikes without speed degradation.",
            infra_feat2_title: "Dedicated SSL & Encryption",
            infra_feat2_desc: "Dedicated SSL/TLS certificates installed and managed automatically to ensure end-to-end user data privacy.",
            infra_feat3_title: "Automatic Daily Backups",
            infra_feat3_desc: "Automated off-site daily backups with immediate disaster recovery capabilities.",

            scope_badge: "Operational Scope",
            scope_title: "What is included in your Bruiser Care subscription?",
            scope_subtitle: "Full transparency on what is included in your monthly plan and how additional requirements are managed.",
            scope_basic_title: "Unlimited Basic Support",
            scope_basic_tag: "INCLUDED IN MONTHLY PLAN",
            scope_basic_1: "<strong>24/7 Continuous Monitoring:</strong> Constant uptime supervision and immediate resolution for server outages or anomalies.",
            scope_basic_2: "<strong>Preventive Maintenance:</strong> Regular updates for CMS, plugins, licenses, SSL certificates, and critical security patches.",
            scope_basic_3: "<strong>Minor Content Adjustments:</strong> Text changes, replacing client-supplied images, updating business hours or contact details.",
            scope_basic_4: "<strong>Continuous Optimization:</strong> Ongoing performance and loading speed tuning (Core Web Vitals).",
            scope_major_title: "Major Changes & New Modules",
            scope_major_tag: "PREFERENTIAL EXTRA COST",
            scope_major_def: "<strong>Definition:</strong> Creating new structural sections, integrating unmapped payment gateways, complex third-party API integrations, or custom software.",
            scope_guarantee_title: "Preferential Rate Guarantee",
            scope_guarantee_desc: '"Any major requirement will be evaluated directly with our engineering team, offering tailored solutions with preferential rates substantially lower than open market rates."',

            terms_badge: "Clear Terms",
            terms_title: "Continuity & Renewal Terms",
            terms_contract_title: "Protected Annual Contract",
            terms_contract_desc: "12-month subscription agreement with recurring monthly billing. Annual renewal with a guaranteed cap increase of max <strong>8%</strong> to shield against inflation.",
            terms_rule_title: "Operational Rule",
            terms_rule_desc: "The website remains live and hosted on our optimized servers as long as the monthly subscription is active, guaranteeing continuous stability and patches.",

            care_cta_badge: "Start Today",
            care_cta_title: "Ready to leave your web infrastructure in our hands?",
            care_cta_desc: "Request your project's technical assessment and get your site online in under 20 days.",
            care_cta_wa: "💬 Technical assessment on WhatsApp",
            care_cta_form: "✉️ Contact form",

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
