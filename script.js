$(document).ready(function() {
    $('.preload').css({'display': 'table'});

    const terminalContainer = document.getElementById('terminal-container');
    const commands = [
        "> ROOT_ACCESS_GRANTED",
        "> rendering_bruiser_vectors()",
        "> COMPILING_DIGITAL_ARCHITECTURE..."
    ];

    // Config: typing speed for letters (ms)
    const typingSpeed = 15;
    // Config: pause between lines (ms)
    const linePause = 50;

    // The cursor element
    const cursorHTML = '<span class="terminal-cursor"></span>';

    // Helper to simulate sleep
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function typeLine(text) {
        // Create a new line element
        const lineEl = document.createElement('div');
        terminalContainer.appendChild(lineEl);

        // Type letter by letter
        for (let i = 0; i < text.length; i++) {
            lineEl.innerHTML = text.substring(0, i + 1) + cursorHTML;
            await sleep(typingSpeed);
        }
        // Remove cursor from this line after finishing it
        lineEl.innerHTML = text;
    }

    async function runTerminalSequence() {
        // 1. Type the first sequence of commands
        for (let i = 0; i < commands.length; i++) {
            await typeLine(commands[i]);
            await sleep(linePause);
        }

        // At this point, the drawing animation is nearly finishing (~1.5s).
        // Let's add a small pause to wait for the 1.5s total animation time to completely finish
        // if the typing was slightly faster.
        await sleep(400);

        // 2. Add final colors to logo
        $('svg').addClass('fill-colors finished-loading');

        // 3. Print > SYSTEM_READY
        const readyLine = document.createElement('div');
        terminalContainer.appendChild(readyLine);
        const readyText = "> SYSTEM_READY";
        for (let i = 0; i < readyText.length; i++) {
            readyLine.innerHTML = readyText.substring(0, i + 1) + cursorHTML;
            await sleep(typingSpeed);
        }
        readyLine.innerHTML = readyText;

        // 4. Flicker effect on the terminal text
        terminalContainer.classList.add('flicker');

        // 5. Transition to Main Site after short flicker
        setTimeout(() => {
            terminalContainer.classList.add('hide');
            terminalContainer.classList.remove('flicker');

            // Slide up the preloader using GSAP
            gsap.to('.preload', {
                y: '-100%',
                ease: 'power4.inOut',
                duration: 1.5,
                onComplete: () => {
                    $('.preload').hide();
                    initMainSite();
                }
            });

        }, 600); // Wait 600ms to show the flicker
    }

    function initTechParticles() {
        const container = document.getElementById('particle-system');
        // Tech symbols using white color now
        const techSymbols = ['+', '[ ]', '//', '0x8F', 'init_sys', '>', '< />', '_px', '10110'];

        // 3 Layers for extreme depth (Z-Index -3, -2, -1) with white lens color and low opacity
        const layers = [
            { count: 20, zIndex: -3, sizeMin: 0.5, sizeMax: 1.0, opacity: 0.03, speedMin: 20, speedMax: 100, blur: 0 },
            { count: 15, zIndex: -2, sizeMin: 1.0, sizeMax: 2.0, opacity: 0.05, speedMin: 150, speedMax: 300, blur: 0 },
            { count: 10, zIndex: -1, sizeMin: 2.5, sizeMax: 4.5, opacity: 0.08, speedMin: 400, speedMax: 900, blur: 1 }
        ];

        layers.forEach(layer => {
            for (let i = 0; i < layer.count; i++) {
                const wrapper = document.createElement('div');
                wrapper.className = 'particle-wrapper';
                wrapper.style.zIndex = layer.zIndex;

                const startX = Math.random() * 100;
                const startY = Math.random() * 150 - 25;
                wrapper.style.left = `${startX}vw`;
                wrapper.style.top = `${startY}vh`;

                const particle = document.createElement('div');
                particle.className = 'tech-particle-white';
                particle.textContent = techSymbols[Math.floor(Math.random() * techSymbols.length)];

                const size = Math.random() * (layer.sizeMax - layer.sizeMin) + layer.sizeMin;
                particle.style.fontSize = `${size}rem`;
                particle.style.opacity = layer.opacity;
                if (layer.blur > 0) {
                    particle.style.filter = `blur(${layer.blur}px)`;
                }

                wrapper.appendChild(particle);
                container.appendChild(wrapper);

                // Breathing Animation
                gsap.to(particle, {
                    x: `random(-40, 40)`,
                    y: `random(-40, 40)`,
                    rotation: `random(-25, 25)`,
                    duration: `random(6, 12)`,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });

                // Scroll Parallax (Mostly up, some down)
                const directionMultiplier = Math.random() > 0.8 ? 1 : -1;
                const speed = (Math.random() * (layer.speedMax - layer.speedMin) + layer.speedMin) * directionMultiplier;

                gsap.to(wrapper, {
                    y: speed,
                    ease: "none",
                    scrollTrigger: {
                        trigger: 'body',
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        });
    }

    function initMainSite() {
        // Show main content
        const mainContent = document.getElementById('main-content');
        mainContent.style.visibility = 'visible';
        gsap.to(mainContent, { opacity: 1, duration: 0.5 });

        // Enable scrolling
        $('body').css('overflow', 'auto');



        // 1. Text Reveal Animation (SplitType + GSAP)
        const revealTexts = document.querySelectorAll('.reveal-text');
        revealTexts.forEach(text => {
            const split = new SplitType(text, { types: 'words, chars' });
            gsap.to(split.chars, {
                y: 0,
                ease: "power4.out",
                duration: 1.2,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: text,
                    start: "top 85%",
                }
            });
        });

        // 2. Background Color Transition
        gsap.to('#dynamic-bg', {
            backgroundColor: '#050505', // Transition to black
            scrollTrigger: {
                trigger: '.projects-section',
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        // 3. Brutal Hero Animation (Applies to both logo and text via .hero-center)
        gsap.to('.hero-center', {
            scale: 1.5,
            opacity: 0,
            y: 100, // Slight parallax
            ease: 'none',
            scrollTrigger: {
                trigger: '.brutal-hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });


        // 7. Continuous Bouncing Arrow & Scroll Routing
        const arrow = document.getElementById('scroll-indicator');
        if (arrow) {
            // Show arrow after init
            gsap.to(arrow, { opacity: 1, visibility: 'visible', duration: 1, delay: 1 });

            // Bouncing animation
            gsap.to(arrow, {
                y: 15,
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

            // Hide at bottom (e.g., when reaching footer or the projects section bottom)
            ScrollTrigger.create({
                trigger: '#projects',
                start: "center center", // hide when the last major section takes over
                onEnter: () => gsap.to(arrow, { opacity: 0, duration: 0.5 }),
                onLeaveBack: () => gsap.to(arrow, { opacity: 1, duration: 0.5 })
            });

            // Arrow Click Logic to Major Sections
            const majorSections = Array.from(document.querySelectorAll('.major-section'));
            arrow.addEventListener('click', () => {
                const scrollY = window.scrollY;

                // Find the next section whose top is below the current scroll pos (with small buffer)
                let targetSection = null;
                for (let i = 0; i < majorSections.length; i++) {
                    const sectionTop = majorSections[i].offsetTop;
                    if (sectionTop > scrollY + 50) {
                        targetSection = majorSections[i];
                        break;
                    }
                }

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }

        // 4. Initialize Particle Ecosystem
        initTechParticles();


        // 5. Project Images Parallax (Massive)
        const projectImgs = document.querySelectorAll('.project-img');
        projectImgs.forEach(img => {
            gsap.to(img, {
                y: '30%',
                ease: 'none',
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });

        // 6. Glassmorphism Module Cards (Drawing border, Text Scramble, Descriptions, Micro-details)

        // Random Hex Generator for bottom corners
        function generateRandomHex() {
            return '0x' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
        }

        // Random System Version for top corners
        function generateRandomVersion() {
            const major = Math.floor(Math.random() * 10);
            const minor = Math.floor(Math.random() * 20);
            return `v${major}.${minor}.x`;
        }

        // Scramble logic
        const chars = '!<>-_\\/[]{}—=+*^?#________';
        function scrambleText(element, finalString, duration = 800) {
            let startTime = null;

            function update(time) {
                if (!startTime) startTime = time;
                const elapsed = time - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Calculate how many characters of the final string should be revealed
                const revealCount = Math.floor(progress * finalString.length);

                let currentStr = finalString.substring(0, revealCount);

                // Add scrambled characters for the rest
                for(let i = revealCount; i < finalString.length; i++) {
                    currentStr += chars[Math.floor(Math.random() * chars.length)];
                }

                element.innerText = currentStr;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    element.innerText = finalString;
                }
            }

            requestAnimationFrame(update);
        }

        const moduleCards = document.querySelectorAll('.module-card');
        moduleCards.forEach((card, index) => {
            const rect = card.querySelector('.module-border-svg rect');
            const title = card.querySelector('.module-title');
            const desc = card.querySelector('.module-desc');
            const originalText = title.getAttribute('data-original-text');

            // Corner elements
            const tl = card.querySelector('.top-left');
            const tr = card.querySelector('.top-right');
            const bl = card.querySelector('.bottom-left');
            const br = card.querySelector('.bottom-right');

            // Set up SVG Stroke Dash Array/Offset dynamically
            let perimeter = 3000;
            if (rect) {
                // Approximate perimeter since it's 100% width/height
                // A safer way is just to use a massively large number that covers any screen
                perimeter = window.innerWidth * 2 + window.innerHeight * 2 + 1000;
            }
            gsap.set(rect, { strokeDasharray: perimeter, strokeDashoffset: perimeter });

            // Set up infinite loop for corners
            let loopInterval;

            ScrollTrigger.create({
                trigger: card,
                start: "top 85%",
                onEnter: () => {
                    // 1. Draw SVG Border
                    gsap.to(rect, { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut", overwrite: "auto" });

                    // 2. Scramble Title
                    scrambleText(title, originalText, 800);

                    // 3. Fade up description right after scramble (around 0.8s later)
                    gsap.to(desc, {
                        opacity: 0.8,
                        y: 0,
                        duration: 0.8,
                        delay: 0.8,
                        ease: "power2.out"
                    });

                    // 4. Start corner data loop
                    clearInterval(loopInterval);
                    loopInterval = setInterval(() => {
                        if (tl) tl.innerText = `SYS.${generateRandomVersion()}`;
                        if (tr) tr.innerText = `COORD.${(Math.random()*100).toFixed(2)}`;
                        if (bl) bl.innerText = generateRandomHex();
                        if (br) br.innerText = generateRandomHex();
                    }, 100);
                },
                onLeave: () => clearInterval(loopInterval),
                onEnterBack: () => {
                    // Restart loop if they scroll back up
                    clearInterval(loopInterval);
                    loopInterval = setInterval(() => {
                        if (tl) tl.innerText = `SYS.${generateRandomVersion()}`;
                        if (tr) tr.innerText = `COORD.${(Math.random()*100).toFixed(2)}`;
                        if (bl) bl.innerText = generateRandomHex();
                        if (br) br.innerText = generateRandomHex();
                    }, 100);
                },
                onLeaveBack: () => clearInterval(loopInterval)
            });
        });





    }

    // Start everything
    runTerminalSequence();
});