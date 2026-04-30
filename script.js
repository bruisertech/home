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

    function initMainSite() {
        // Show main content
        const mainContent = document.getElementById('main-content');
        mainContent.style.visibility = 'visible';
        gsap.to(mainContent, { opacity: 1, duration: 0.5 });

        // Enable scrolling
        $('body').css('overflow', 'auto');

        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
        });

        // Integrate Lenis with ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

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

        // 2. Brutal Hero Animation
        gsap.to('.massive-text', {
            scale: 1.5,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.brutal-hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // 3. Project Images Parallax (Massive)
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
    }

    // Start everything
    runTerminalSequence();
});