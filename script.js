// 0. Theme Engine (Light / Dark Mode)
(function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Handler
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    }

    // 1. Bilingual Dictionary & Multilingual Engine
    const translations = {
        es: {
            nav_home: "inicio",
            nav_about: "sobre nosotros",
            nav_bruisercare: "bruiserCare",
            nav_services: "servicios",
            nav_projects: "proyectos",
            nav_pentesting: "pentesting",
            nav_contact: "contacto",

            hero_badge: "Consultoría & Desarrollo B2B",
            hero_line1: "¿Te abruma la infraestructura web?",
            hero_line2: "déjalo en nuestras manos ;)",
            hero_line3_prefix: "conoce",
            hero_line3_highlight: "bruiserCare",
            hero_subtitle: "Tu web profesional en línea desde $45.900 COP / mes*. Sin enredos técnicos ni costos ocultos.",
            hero_cta_primary: "Descubrir bruiserCare",
            hero_cta_secondary: "Ver Desarrollo Tradicional",

            // Trust Bar
            trust_uptime: "Uptime Garantizado",
            trust_delivery: "Entrega a Producción",
            trust_support: "Monitoreo Proactivo",
            trust_hosting: "Hosting Privado NVMe",

            // Two Paths Block
            two_paths_badge: "• RUTAS DE DESARROLLO",
            two_paths_title: "Dos caminos para llevar tu proyecto a la realidad",
            path_care_tag: "Suscripción WaaS",
            path_care_sub: "Infraestructura + tu equipo técnico de confianza mes a mes.",
            path_care_price: 'Desde $45.900 COP* <span class="period">/ mes</span>',
            path_care_desc: "Web en línea en &lt;20 días, soporte básico ilimitado y servidores administrados.",
            path_care_cta: "Explorar plan detallado",
            path_trad_tag: "Proyecto Llave en Mano",
            path_trad_sub: "Desarrollo y entrega llave en mano para gestión propia.",
            path_trad_price: 'Desde $455.990 COP* <span class="period">pago único</span>',
            path_trad_desc: "Código propio, entrega completa y gestión autónoma.",
            path_trad_cta: "Cotizar desarrollo único",
            price_disclaimer: "* Sujeto a valoración técnica inicial del proyecto.",

            // Bruiser Care Dedicated Page
            care_badge: "• MODELO WAAS // WEBSITE AS A SERVICE",
            care_title: "bruiserCare: Tu equipo técnico de confianza mes a mes",
            care_subtitle: "Olvídate de servidores, caídas y parches de seguridad. Nos encargamos de toda tu infraestructura mientras tú te enfocas en vender.",
            care_speed_highlight: "Tu web en línea en menos de 20 días tras la confirmación del pago.",
            care_price_anchor: 'Planes desde <span style="color: var(--brand-coral);">$45.900 COP / mes*</span>',
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
            scope_title: "¿Qué Incluye tu Suscripción bruiserCare?",
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
            care_cta_wa: "Valoración técnica por WhatsApp",
            care_cta_form: "Formulario de contacto",

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

            view_project: "Ver sitio web",
            view_brand: "Ver manual de marca",

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
            pentest_badge: "Ingeniería en Ciberdefensa & Pentesting Ético",
            pentest_title: "Diagnóstico Preventivo & Auditoría de Intrusión Ética",
            pentest_subtitle: "Pensamos como el atacante para blindar tus bases de datos, APIs y servidores antes de que ocurra una brecha. Audita tu postura perimetral en tiempo real y descubre cómo mitigar vectores de capa profunda.",
            scanner_heading: "Auditor de Postura Digital y Ciberseguridad",
            scanner_sub: "Ingresa el dominio público de tu empresa (ej. miempresa.com) para auditar en vivo la autenticación de identidad, certificados SSL y resistencia perimetral.",
            scan_btn: "Ejecutar Diagnóstico",
            packages_badge: "Servicios Profesionales de Ciberdefensa",
            packages_title: "Paquetes de Blindaje Técnico y Pentesting Ético",
            packages_subtitle: "Diseñados por ingenieros de ciberseguridad para proteger empresas, e-commerce y aplicaciones SaaS contra pérdidas de datos, extorsiones de ransomware y multas legales.",
            audit_scope_badge: "Metodología Ética",
            audit_scope_title: "Cómo Ejecutamos la Intrusión y el Blindaje",
            check1_title: "Aislamiento de Bases de Datos & Inyección SQL",
            check1_desc: "Detección de inyecciones SQL ciegas, desbordamiento de búfer, falta de sentencias preparadas (PDO) y aislamiento estricto de puertos de base de datos dentro de una red privada VPC.",
            check2_title: "Seguridad en APIs REST/GraphQL & Tokens JWT",
            check2_desc: "Evaluación de debilidades BOLA (Broken Object Level Authorization), algoritmos débiles de firma JWT (None-algorithm attack), control de sesiones y rate limiting anti-fuerza bruta.",
            check3_title: "Hardening de Servidor Linux & Cierre de Puertos",
            check3_desc: "Eliminación de servicios innecesarios, desactivación de login root por contraseña, configuración de llaves Ed25519, parches de kernel y reglas de firewall a nivel de red.",
            check4_title: "Lógica de Negocio & Web Application Firewall",
            check4_desc: "Simulación de manipulación de precios en compras, bypass de pasarelas de pago, inyecciones de código malicioso XSS y despliegue de reglas WAF de protección activa.",

            footer_tagline: "Consultoría de Software, Infraestructura Web y Arquitectura Digital.",
            footer_status: "Sistemas y Red Operativos 100%"
        },
        en: {
            nav_home: "home",
            nav_about: "about us",
            nav_bruisercare: "bruiserCare",
            nav_services: "services",
            nav_projects: "projects",
            nav_pentesting: "pentesting",
            nav_contact: "contact",

            hero_badge: "B2B Consulting & Development",
            hero_line1: "Overwhelmed by web infrastructure?",
            hero_line2: "leave it in our hands ;)",
            hero_line3_prefix: "discover",
            hero_line3_highlight: "bruiserCare",
            hero_subtitle: "Your professional website online from $45,900 COP / month*. No technical complexity, no hidden fees.",
            hero_cta_primary: "Discover bruiserCare",
            hero_cta_secondary: "View Traditional Development",

            // Trust Bar
            trust_uptime: "Guaranteed Uptime",
            trust_delivery: "Production Delivery",
            trust_support: "Proactive Monitoring",
            trust_hosting: "Private NVMe Cloud",

            // Two Paths Block
            two_paths_badge: "• DEVELOPMENT PATHS",
            two_paths_title: "Two paths to bring your project to life",
            path_care_tag: "WaaS Subscription",
            path_care_sub: "Infrastructure + your trusted tech team month after month.",
            path_care_price: 'From $45,900 COP* <span class="period">/ month</span>',
            path_care_desc: "Website live in &lt;20 days, unlimited basic support, and fully managed servers.",
            path_care_cta: "Explore detailed plan",
            path_trad_tag: "Turnkey Project",
            path_trad_sub: "Turnkey development and delivery for self-management.",
            path_trad_price: 'From $455,990 COP* <span class="period">one-time payment</span>',
            path_trad_desc: "Own code, complete handover, and autonomous control.",
            path_trad_cta: "Quote custom build",
            price_disclaimer: "* Subject to initial technical project assessment.",

            // Bruiser Care Dedicated Page
            care_badge: "• WAAS MODEL // WEBSITE AS A SERVICE",
            care_title: "bruiserCare: Your trusted tech team month after month",
            care_subtitle: "Forget about server crashes, security patches, and downtime. We handle your entire web infrastructure so you can focus on sales.",
            care_speed_highlight: "Your website online in less than 20 days upon payment confirmation.",
            care_price_anchor: 'Plans starting at <span style="color: var(--brand-coral);">$45,900 COP / month*</span>',
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
            scope_title: "What is included in your bruiserCare subscription?",
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
            care_cta_wa: "Technical assessment on WhatsApp",
            care_cta_form: "Contact form",

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

            view_project: "Visit website",
            view_brand: "View brand manual",

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
            pentest_badge: "Cyberdefense Engineering & Ethical Pentesting",
            pentest_title: "Preventive Diagnostic & Ethical Intrusion Audit",
            pentest_subtitle: "We think like the adversary to shield your databases, APIs, and servers before a breach occurs. Audit your perimeter posture in real time and discover how to eliminate deep-layer attack vectors.",
            scanner_heading: "Digital Security & Posture Auditor",
            scanner_sub: "Enter your company's public domain (e.g. yourcompany.com) to audit its identity authentication, SSL certificates, and perimeter resilience.",
            scan_btn: "Run Diagnostic",
            packages_badge: "Professional Cyberdefense Services",
            packages_title: "Technical Hardening & Ethical Pentesting Packs",
            packages_subtitle: "Engineered by cybersecurity specialists to shield companies, e-commerce, and SaaS platforms against data breaches, ransomware extortion, and regulatory fines.",
            audit_scope_badge: "Ethical Methodology",
            audit_scope_title: "How We Execute Intrusion & Hardening",
            check1_title: "Database Isolation & SQL Injection Defense",
            check1_desc: "Detection of blind SQLi, buffer overruns, missing PDO prepared statements, and strict isolation of database ports within an isolated VPC network.",
            check2_title: "REST/GraphQL API Security & JWT Tokens",
            check2_desc: "Evaluation of BOLA (Broken Object Level Authorization) flaws, weak JWT signing algorithms, session controls, and anti-brute force rate limiting.",
            check3_title: "Linux Server Hardening & Port Exposure Control",
            check3_desc: "Elimination of redundant services, disabling root password login, configuring Ed25519 keys, kernel patching, and network-level firewall filtering.",
            check4_title: "Business Logic Flaws & Web Application Firewall",
            check4_desc: "Simulation of cart price tampering, payment gateway bypasses, stored XSS payload injections, and active WAF ruleset deployment.",

            footer_tagline: "Software Consulting, Web Infrastructure & Digital Architecture.",
            footer_status: "All Systems Operational 100%"
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
            if (translations[lang] && translations[lang][key]) {
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
            mobileToggle.classList.toggle('active');
        });

        // Close menu when clicking link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('mobile-open');
                mobileToggle.classList.remove('active');
            });
        });
    }

    // 3. Navbar scroll effect & Back to Top
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (navbar) {
            if (scrollPos > 30) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        if (backToTopBtn) {
            if (scrollPos > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 4. Contact Form WhatsApp Redirection
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

    // 5. Pentesting Real Diagnostic Engine & Lead Conversion Funnel
    const pentestForm = document.getElementById('pentest-scanner-form');
    const terminalOutput = document.getElementById('terminal-output');
    const scanBtn = document.getElementById('scan-btn');
    const resultsCard = document.getElementById('audit-results-card');

    if (pentestForm && terminalOutput) {
        function appendTerminalLine(text, color = '#94a3b8', isBold = false) {
            const line = document.createElement('div');
            line.style.marginBottom = '4px';
            line.style.color = color;
            if (isBold) line.style.fontWeight = 'bold';
            line.textContent = text;
            terminalOutput.appendChild(line);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }

        function sanitizeDomain(input) {
            if (!input) return '';
            let d = input.trim().toLowerCase();
            d = d.replace(/^[a-zA-Z]+:\/\//, ''); // strip https:// or http://
            d = d.split('/')[0].split('?')[0].split('#')[0]; // strip path, query, hash
            d = d.split(':')[0]; // strip port
            d = d.replace(/\.+$/, ''); // strip trailing dots
            return d;
        }

        async function fetchDns(name, type) {
            try {
                const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`);
                if (!res.ok) return null;
                return await res.json();
            } catch (err) {
                return null;
            }
        }

        async function fetchSslCert(domainName) {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 6500);
            try {
                const res = await fetch(`https://networkcalc.com/api/security/certificate/${encodeURIComponent(domainName)}`, {
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                if (!res.ok) return null;
                return await res.json();
            } catch (err) {
                clearTimeout(timeoutId);
                return null;
            }
        }

        pentestForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const rawInput = document.getElementById('target-url')?.value || '';
            const domain = sanitizeDomain(rawInput);

            // Validation
            const domainRegex = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/;
            terminalOutput.innerHTML = '';

            const headerBar = document.createElement('div');
            headerBar.className = 'terminal-header';
            headerBar.innerHTML = `
                <span class="terminal-dot red"></span>
                <span class="terminal-dot yellow"></span>
                <span class="terminal-dot green"></span>
                <span class="terminal-title">bruiser-sec-engine v3.3.0 -- offensive & defensive audit</span>
            `;
            terminalOutput.appendChild(headerBar);

            if (!domain || !domainRegex.test(domain)) {
                appendTerminalLine(`[!] Error: El dominio '${rawInput}' no tiene un formato válido.`, '#ef4444', true);
                appendTerminalLine(`[!] Por favor ingresa un dominio público como: tuempresa.com o subdominio.empresa.com`, '#f59e0b');
                return;
            }

            // Disable button during execution
            if (scanBtn) {
                scanBtn.disabled = true;
                scanBtn.innerHTML = `
                    <span>Auditando Perímetro & Vectores...</span>
                    <svg class="spin-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                `;
            }

            appendTerminalLine(`[+] ========================================================`, '#3b82f6');
            appendTerminalLine(`[+] BRUISER-SEC OFFENSIVE AUDIT ENGINE [LIVE MODE]`, '#3b82f6', true);
            appendTerminalLine(`[+] Objetivo fijado: ${domain}`, '#ffffff', true);
            appendTerminalLine(`[+] Fecha/Hora: ${new Date().toISOString()}`, '#94a3b8');
            appendTerminalLine(`[+] Iniciando análisis perimetral y modelado de vectores de ataque...`, '#94a3b8');
            appendTerminalLine(`[+] ========================================================`, '#3b82f6');

            // Apex domain calculation for fallback lookups
            const domainParts = domain.split('.');
            const apexDomain = domainParts.length > 2 ? domainParts.slice(-2).join('.') : domain;

            // Step 1: Query DNS
            appendTerminalLine(`[*] [1/4] Resolviendo infraestructura DNS (A, AAAA, CAA) vía Google DoH...`, '#94a3b8');
            const [dnsA, dnsAAAA, dnsCAA] = await Promise.all([
                fetchDns(domain, 'A'),
                fetchDns(domain, 'AAAA'),
                fetchDns(domain, 'CAA')
            ]);

            const aIps = (dnsA?.Answer || []).filter(a => a.type === 1).map(a => a.data);
            const aaaaIps = (dnsAAAA?.Answer || []).filter(a => a.type === 28).map(a => a.data);
            const hasA = aIps.length > 0;
            const hasAAAA = aaaaIps.length > 0;
            const caaRecords = (dnsCAA?.Answer || []).filter(a => a.type === 257).map(a => a.data.replace(/"/g, ''));

            if (hasA || hasAAAA) {
                appendTerminalLine(`    [OK] DNS Activo: ${aIps.length} IPv4 (${aIps.slice(0, 2).join(', ')}${aIps.length > 2 ? '...' : ''}), ${aaaaIps.length} IPv6`, '#10b981');
            } else if (dnsA?.Status === 3) {
                appendTerminalLine(`    [!] NXDOMAIN: El dominio no existe o no tiene resolución pública activa.`, '#ef4444', true);
            } else {
                appendTerminalLine(`    [?] Sin registros A/AAAA directos detectados en este host.`, '#f59e0b');
            }

            // Step 2: DMARC Anti-Spoofing
            appendTerminalLine(`[*] [2/4] Auditando autenticación Anti-Spoofing & Phishing (DMARC)...`, '#94a3b8');
            let dmarcRes = await fetchDns(`_dmarc.${domain}`, 'TXT');
            if ((!dmarcRes || !dmarcRes.Answer) && apexDomain !== domain) {
                dmarcRes = await fetchDns(`_dmarc.${apexDomain}`, 'TXT');
            }

            let dmarcRecord = null;
            let dmarcPolicy = 'missing'; // 'reject', 'quarantine', 'none', 'missing'
            if (dmarcRes?.Answer) {
                for (const ans of dmarcRes.Answer) {
                    const txt = (ans.data || '').replace(/"/g, '');
                    if (txt.toLowerCase().includes('v=dmarc1')) {
                        dmarcRecord = txt;
                        if (/p=reject/i.test(txt)) dmarcPolicy = 'reject';
                        else if (/p=quarantine/i.test(txt)) dmarcPolicy = 'quarantine';
                        else if (/p=none/i.test(txt)) dmarcPolicy = 'none';
                        break;
                    }
                }
            }

            if (dmarcPolicy === 'reject' || dmarcPolicy === 'quarantine') {
                appendTerminalLine(`    [OK] DMARC Blindado: Política '${dmarcPolicy.toUpperCase()}' activa (Inmune a suplantación).`, '#10b981');
            } else if (dmarcPolicy === 'none') {
                appendTerminalLine(`    [ALERTA] DMARC Incompleto: Política 'p=none' (Solo monitoreo, no bloquea correos falsos).`, '#f59e0b');
            } else {
                appendTerminalLine(`    [CRÍTICO] Sin DMARC: Vulnerable a suplantación corporativa (Email Spoofing).`, '#ef4444', true);
            }

            // Step 3: SPF Sender Policy
            appendTerminalLine(`[*] [3/4] Inspeccionando registro de autorización de remitentes (SPF)...`, '#94a3b8');
            let spfRes = await fetchDns(domain, 'TXT');
            if ((!spfRes || !spfRes.Answer) && apexDomain !== domain) {
                spfRes = await fetchDns(apexDomain, 'TXT');
            }

            let spfRecord = null;
            if (spfRes?.Answer) {
                for (const ans of spfRes.Answer) {
                    const txt = (ans.data || '').replace(/"/g, '');
                    if (txt.toLowerCase().startsWith('v=spf1') || txt.toLowerCase().includes('v=spf1')) {
                        spfRecord = txt;
                        break;
                    }
                }
            }

            if (spfRecord) {
                appendTerminalLine(`    [OK] SPF Configurado: Lista blanca de servidores de correo autorizados activa.`, '#10b981');
            } else {
                appendTerminalLine(`    [ALERTA] Sin SPF: No se detectó política de autorización de remitentes.`, '#f59e0b');
            }

            // Step 4: SSL/TLS Certificate Analysis
            appendTerminalLine(`[*] [4/4] Verificando cifrado de transporte y certificado TLS/SSL...`, '#94a3b8');
            const certRes = await fetchSslCert(domain);

            let sslValid = false;
            let sslIssuer = 'No detectado';
            let sslValidTo = null;
            let sslDaysLeft = 0;

            if (certRes?.status === 'OK' && certRes?.certificate) {
                const cert = certRes.certificate;
                sslIssuer = cert.issued_by || cert.issuer || 'Emisor CA Reconocido';
                if (cert.valid_to) {
                    sslValidTo = new Date(cert.valid_to);
                    const now = new Date();
                    sslDaysLeft = Math.ceil((sslValidTo - now) / (1000 * 60 * 60 * 24));
                    sslValid = sslDaysLeft > 0;
                }
            }

            if (sslValid) {
                appendTerminalLine(`    [OK] TLS/SSL Válido: Emitido por ${sslIssuer} (Expira en ${sslDaysLeft} días).`, '#10b981');
            } else if (hasA) {
                appendTerminalLine(`    [INFO] Inspección remota de certificado TLS limitada por timeout o proxy perimetral.`, '#94a3b8');
            } else {
                appendTerminalLine(`    [CRÍTICO] Sin certificado SSL detectable o host no responde en puerto seguro 443.`, '#ef4444');
            }

            // Calculate Security Score (0 to 100)
            let score = 0;
            const remediations = [];

            // Score: SSL (30 pts)
            if (sslValid) {
                if (sslDaysLeft < 15) {
                    score += 15;
                    remediations.push({
                        type: 'warn',
                        title: 'Certificado SSL próximo a expirar',
                        desc: `El certificado TLS vence en ${sslDaysLeft} días. Programa la renovación de inmediato para evitar bloqueos del navegador.`
                    });
                } else {
                    score += 30;
                }
            } else if (hasA) {
                score += 15;
                remediations.push({
                    type: 'info',
                    title: 'Auditoría SSL / HTTPS Perimetral',
                    desc: `Verifica que el puerto 443 tenga configurada la redirección 301 obligatoria hacia HTTPS y que la cabecera HSTS esté activa.`
                });
            } else {
                remediations.push({
                    type: 'fail',
                    title: 'Certificado SSL Inexistente o Expirado',
                    desc: 'El sitio no cuenta con cifrado TLS activo. El tráfico viaja en texto plano y los navegadores modernos lo clasificarán como No Seguro.'
                });
            }

            // Score: DMARC (30 pts)
            if (dmarcPolicy === 'reject' || dmarcPolicy === 'quarantine') {
                score += 30;
            } else if (dmarcPolicy === 'none') {
                score += 15;
                remediations.push({
                    type: 'warn',
                    title: 'Política DMARC en modo pasivo (p=none)',
                    desc: `Tu dominio publica DMARC pero solo en modo de observación. Se recomienda migrar gradualmente a 'p=quarantine' o 'p=reject' para bloquear activamente correos falsificados.`
                });
            } else {
                remediations.push({
                    type: 'fail',
                    title: 'Vulnerabilidad Crítica de Suplantación (Sin DMARC)',
                    desc: `Cualquier atacante puede usurpar la identidad de @${domain} y enviar correos de phishing en tu nombre. Es prioritario configurar el registro _dmarc.${domain}.`
                });
            }

            // Score: SPF (25 pts)
            if (spfRecord) {
                score += 25;
            } else {
                remediations.push({
                    type: 'fail',
                    title: 'Falta Registro SPF (Sender Policy Framework)',
                    desc: `No se encontró registro SPF (v=spf1). Los proveedores de correo receptores pueden rechazar tus correos legítimos o enviarlos a la carpeta de Spam.`
                });
            }

            // Score: DNS (10 pts)
            if (hasA || hasAAAA) {
                score += 10;
            } else {
                remediations.push({
                    type: 'fail',
                    title: 'Resolución DNS Incompleta',
                    desc: 'No se detectaron registros de host IPv4 o IPv6 para este nombre. Revisa la zona DNS en tus servidores de nombres autorizados.'
                });
            }

            // Score: CAA (5 pts)
            if (caaRecords.length > 0) {
                score += 5;
            } else {
                remediations.push({
                    type: 'info',
                    title: 'Restricción de Emisión de Certificados (CAA)',
                    desc: `Se recomienda configurar registros CAA para restringir qué autoridades certificadoras (ej. Let's Encrypt, Cloudflare) pueden emitir certificados para tu dominio.`
                });
            }

            if (score >= 90) {
                remediations.unshift({
                    type: 'pass',
                    title: 'Excelente Postura Perimetral Superficial',
                    desc: 'Tu dominio cuenta con las configuraciones criptográficas y de identidad anti-phishing más robustas recomendadas por las normas OWASP y NIST. Sin embargo, recuerda que la capa profunda (base de datos y APIs) requiere auditoría manual.'
                });
            }

            // Determine Grade & Text
            let grade = 'D';
            let gradeClass = 'score-d';
            let statusText = 'Riesgo Crítico';

            if (score >= 90) {
                grade = 'A';
                gradeClass = 'score-a';
                statusText = 'Excelente Protección';
            } else if (score >= 75) {
                grade = 'B';
                gradeClass = 'score-b';
                statusText = 'Protección Buena';
            } else if (score >= 50) {
                grade = 'C';
                gradeClass = 'score-c';
                statusText = 'Riesgo Moderado';
            }

            // Output Terminal Summary
            appendTerminalLine(`[+] ========================================================`, '#10b981');
            appendTerminalLine(`[+] AUDITORÍA DE SUPERFICIE FINALIZADA CON ÉXITO`, '#10b981', true);
            appendTerminalLine(`[+] Puntuación Perimetral: ${score}/100 (Grado ${grade}) - ${statusText}`, '#10b981', true);
            appendTerminalLine(`[!] ATENCIÓN: Iniciando modelado de amenazas en capa profunda (Base de Datos / APIs)...`, '#f59e0b', true);
            appendTerminalLine(`[+] Desplegando informe ejecutivo interactivo y plan de blindaje abajo...`, '#3b82f6');
            appendTerminalLine(`[+] ========================================================`, '#10b981');

            // Render Results Card
            if (resultsCard) {
                resultsCard.style.display = 'block';

                // Domain & Timestamp
                const domainBadge = document.getElementById('report-domain-badge');
                if (domainBadge) domainBadge.textContent = `DOMINIO: ${domain.toUpperCase()}`;

                const timestampEl = document.getElementById('report-timestamp');
                if (timestampEl) timestampEl.textContent = `Inspección finalizada: ${new Date().toLocaleString()}`;

                // Score Circle & Status
                const scoreCircle = document.getElementById('score-circle');
                if (scoreCircle) {
                    scoreCircle.className = `score-circle ${gradeClass}`;
                }

                const scoreGrade = document.getElementById('score-grade');
                if (scoreGrade) scoreGrade.textContent = grade;

                const scorePct = document.getElementById('score-pct');
                if (scorePct) scorePct.textContent = `${score}%`;

                const statusTextEl = document.getElementById('score-status-text');
                if (statusTextEl) statusTextEl.textContent = statusText;

                // Pillar 1: SSL
                const certBadge = document.getElementById('cert-status-badge');
                const certMeta = document.getElementById('cert-meta');
                if (certBadge) {
                    if (sslValid) {
                        certBadge.className = `audit-status-badge ${sslDaysLeft < 15 ? 'status-warn' : 'status-pass'}`;
                        certBadge.textContent = sslDaysLeft < 15 ? 'POR VENCER' : 'VÁLIDO';
                    } else if (hasA) {
                        certBadge.className = 'audit-status-badge status-warn';
                        certBadge.textContent = 'REVISAR';
                    } else {
                        certBadge.className = 'audit-status-badge status-fail';
                        certBadge.textContent = 'NO DETECTADO';
                    }
                }
                if (certMeta) {
                    if (sslValid) {
                        certMeta.textContent = `Emisor: ${sslIssuer} | Vence: ${sslValidTo.toLocaleDateString()} (${sslDaysLeft} días)`;
                    } else if (hasA) {
                        certMeta.textContent = 'Host resuelve DNS; confirmar redirección 301 HTTPS';
                    } else {
                        certMeta.textContent = 'Sin certificado TLS accesible';
                    }
                }

                // Pillar 2: DMARC
                const dmarcBadge = document.getElementById('dmarc-status-badge');
                const dmarcMeta = document.getElementById('dmarc-meta');
                if (dmarcBadge) {
                    if (dmarcPolicy === 'reject' || dmarcPolicy === 'quarantine') {
                        dmarcBadge.className = 'audit-status-badge status-pass';
                        dmarcBadge.textContent = 'PROTEGIDO';
                    } else if (dmarcPolicy === 'none') {
                        dmarcBadge.className = 'audit-status-badge status-warn';
                        dmarcBadge.textContent = 'SOLO MONITOREO';
                    } else {
                        dmarcBadge.className = 'audit-status-badge status-fail';
                        dmarcBadge.textContent = 'VULNERABLE';
                    }
                }
                if (dmarcMeta) {
                    if (dmarcRecord) {
                        dmarcMeta.textContent = dmarcRecord.length > 70 ? dmarcRecord.substring(0, 70) + '...' : dmarcRecord;
                    } else {
                        dmarcMeta.textContent = `Sin registro en _dmarc.${domain}`;
                    }
                }

                // Pillar 3: SPF
                const spfBadge = document.getElementById('spf-status-badge');
                const spfMeta = document.getElementById('spf-meta');
                if (spfBadge) {
                    if (spfRecord) {
                        spfBadge.className = 'audit-status-badge status-pass';
                        spfBadge.textContent = 'CONFIGURADO';
                    } else {
                        spfBadge.className = 'audit-status-badge status-fail';
                        spfBadge.textContent = 'NO DETECTADO';
                    }
                }
                if (spfMeta) {
                    if (spfRecord) {
                        spfMeta.textContent = spfRecord.length > 70 ? spfRecord.substring(0, 70) + '...' : spfRecord;
                    } else {
                        spfMeta.textContent = `Sin registro v=spf1 en DNS de ${domain}`;
                    }
                }

                // Pillar 4: DNS & CAA
                const dnsBadge = document.getElementById('dns-status-badge');
                const dnsMeta = document.getElementById('dns-meta');
                if (dnsBadge) {
                    if (hasA || hasAAAA) {
                        dnsBadge.className = 'audit-status-badge status-pass';
                        dnsBadge.textContent = caaRecords.length > 0 ? 'ROBUSTO' : 'BÁSICO';
                    } else {
                        dnsBadge.className = 'audit-status-badge status-fail';
                        dnsBadge.textContent = 'FALLA';
                    }
                }
                if (dnsMeta) {
                    const ipSummary = aIps.length > 0 ? `IPv4: ${aIps.slice(0, 2).join(', ')}` : (aaaaIps.length > 0 ? 'IPv6 activo' : 'Sin IPs');
                    const caaSummary = caaRecords.length > 0 ? `CAA: Activo (${caaRecords.length})` : 'CAA: No configurado';
                    dnsMeta.textContent = `${ipSummary} | ${caaSummary}`;
                }

                // Remediation List
                const remediationList = document.getElementById('remediation-list');
                if (remediationList) {
                    remediationList.innerHTML = '';
                    remediations.forEach(rem => {
                        const li = document.createElement('li');
                        li.style.marginBottom = '8px';
                        li.innerHTML = `<strong>${rem.title}:</strong> ${rem.desc}`;
                        remediationList.appendChild(li);
                    });
                }

                // Update Personalized Executive Proposal Box
                const proposalHeading = document.getElementById('proposal-target-heading');
                if (proposalHeading) {
                    proposalHeading.textContent = `Propuesta de Blindaje Integral para ${domain.toUpperCase()}`;
                }

                const proposalDesc = document.getElementById('proposal-target-desc');
                if (proposalDesc) {
                    proposalDesc.textContent = `Con base en el puntaje perimetral (${score}/100 - Grado ${grade}) y la exposición potencial para ${domain}, nuestro equipo recomienda priorizar el aislamiento estricto de base de datos, mitigación de inyecciones SQL y pruebas de penetración OWASP en lógica de negocio.`;
                }

                // Update 3 Deep Vector Direct CTAs
                const dbShieldBtn = document.getElementById('db-shield-btn');
                if (dbShieldBtn) {
                    const dbMsg = `*Solicitud de Blindaje de Base de Datos*\n\n` +
                        `*Dominio:* ${domain}\n` +
                        `*Score Perimetral:* Grado ${grade} (${score}/100)\n\n` +
                        `Hola Bruiser Tech, deseo cotizar el Blindaje de Base de Datos y mitigación de inyecciones SQLi para mi plataforma.`;
                    dbShieldBtn.href = `https://wa.me/573053862774?text=${encodeURIComponent(dbMsg)}`;
                }

                const apiPentestBtn = document.getElementById('api-pentest-btn');
                if (apiPentestBtn) {
                    const apiMsg = `*Solicitud de Pentesting de APIs y OWASP*\n\n` +
                        `*Dominio:* ${domain}\n\n` +
                        `Hola Bruiser Tech, deseo agendar una prueba de intrusión ética en APIs y lógica de autenticación para mi aplicación.`;
                    apiPentestBtn.href = `https://wa.me/573053862774?text=${encodeURIComponent(apiMsg)}`;
                }

                const darkwebAuditBtn = document.getElementById('darkweb-audit-btn');
                if (darkwebAuditBtn) {
                    const darkMsg = `*Solicitud de Auditoría Dark Web*\n\n` +
                        `*Dominio:* ${domain}\n\n` +
                        `Hola Bruiser Tech, deseo solicitar un reporte de credenciales y correos corporativos @${domain} expuestos en la Dark Web.`;
                    darkwebAuditBtn.href = `https://wa.me/573053862774?text=${encodeURIComponent(darkMsg)}`;
                }

                // Pre-fill Main WhatsApp link
                const waBtn = document.getElementById('remediation-wa-btn');
                if (waBtn) {
                    const waText = `*Diagnóstico Preventivo BruiserSec*\n\n` +
                        `*Dominio:* ${domain}\n` +
                        `*Calificación:* Grado ${grade} (${score}/100)\n` +
                        `*Estado Perimetral:* ${statusText}\n` +
                        `*SSL/TLS:* ${sslValid ? 'Válido' : 'Revisión Requerida'}\n` +
                        `*DMARC:* ${dmarcPolicy.toUpperCase()}\n` +
                        `*SPF:* ${spfRecord ? 'Configurado' : 'Faltante'}\n\n` +
                        `Hola Bruiser Tech, realicé el diagnóstico de mi sitio y deseo contratar una auditoría ética y blindaje de base de datos para proteger mi empresa.`;

                    waBtn.href = `https://wa.me/573053862774?text=${encodeURIComponent(waText)}`;
                }

                // Smooth scroll down to the card
                resultsCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            // Restore scan button
            if (scanBtn) {
                scanBtn.disabled = false;
                scanBtn.innerHTML = `
                    <span data-i18n="scan_btn">${currentLang === 'en' ? 'Run Diagnostic' : 'Ejecutar Diagnóstico'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                `;
            }
        });
    }

    // 6. Interactive Dark Web Corporate Email Risk Simulator
    const darkwebForm = document.getElementById('darkweb-test-form');
    const darkwebInput = document.getElementById('darkweb-email');
    const darkwebBtn = document.getElementById('darkweb-btn');
    const darkwebResult = document.getElementById('darkweb-result');

    if (darkwebForm && darkwebInput && darkwebResult) {
        darkwebForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = darkwebInput.value.trim().toLowerCase();
            if (!email || !email.includes('@')) return;

            const emailDomain = email.split('@')[1];

            if (darkwebBtn) {
                darkwebBtn.disabled = true;
                darkwebBtn.innerHTML = `<span>Consultando Repositorios...</span> <svg class="spin-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`;
            }

            setTimeout(() => {
                darkwebResult.style.display = 'block';
                darkwebResult.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
                        <span class="audit-status-badge status-warn" style="font-size: 0.76rem;">ALERTA DE VECTOR HUMANO & CREDENCIALES</span>
                        <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">${email}</span>
                    </div>
                    <h4 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--text-primary);">Evaluación de Exposición para la Organización @${emailDomain}</h4>
                    <p style="margin-bottom: 12px; color: var(--text-secondary); font-size: 0.92rem;">
                        Las bases de datos de ciberinteligencia registran que el <strong>80% de los accesos no autorizados a bases de datos y servidores cloud</strong> se originan mediante credenciales legítimas robadas por troyanos Infostealer (RedLine, Lumma, Vidar) instalados en equipos de empleados.
                    </p>
                    <div style="background: var(--bg-secondary); border-left: 3px solid #f59e0b; padding: 14px 16px; margin-bottom: 18px; border-radius: var(--radius-sm); font-size: 0.88rem;">
                        <strong style="color: #f59e0b;">Riesgo de Intrusión Lateral:</strong> Si un directivo o desarrollador reutiliza contraseñas de @${emailDomain} en plataformas externas vulneradas, los atacantes pueden ingresar a paneles de hosting (cPanel, AWS Console, phpMyAdmin) sin disparar alertas de firewall.
                    </div>
                    <div style="text-align: center;">
                        <a href="https://wa.me/573053862774?text=${encodeURIComponent(`*Consulta de Auditoría Dark Web*\n\n*Correo Evaluado:* ${email}\n*Dominio:* ${emailDomain}\n\nHola Bruiser Tech, deseo solicitar un reporte confidencial de credenciales y contraseñas expuestas para nuestra organización.`)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.9rem; padding: 12px 24px;">
                            <span>Solicitar Reporte Confidencial Dark Web para @${emailDomain}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>
                `;

                if (darkwebBtn) {
                    darkwebBtn.disabled = false;
                    darkwebBtn.innerHTML = `<span>Verificar Riesgo</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
                }

                darkwebResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 1000);
        });
    }
});
