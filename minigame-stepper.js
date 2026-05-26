// Lógica combinada para Fase 2 (Minijuego TLS) y Fase 3 (Cuestionario Stepper)

document.addEventListener('DOMContentLoaded', () => {
    // Array simulado de preguntas para el Stepper
    const stepperQuestions = [
        { id: 'q1', text: '01_ ¿Cuál es el nombre de su proyecto / empresa?', type: 'text' },
        { id: 'q2', text: '02_ Email de contacto técnico', type: 'email' },
        { id: 'q3', text: '03_ Describa brevemente el objetivo principal', type: 'textarea' },
        { id: 'q4', text: '04_ ¿Público objetivo principal?', type: 'text' },
        { id: 'q5', text: '05_ ¿Funcionalidades críticas requeridas? (ej. E-commerce, Login, API)', type: 'textarea' },
        { id: 'q6', text: '06_ ¿Tiene manual de marca existente? (Sí/No)', type: 'text' },
        { id: 'q7', text: '07_ Referencias visuales (URLs)', type: 'textarea' },
        { id: 'q8', text: '08_ Plazo estimado de despliegue', type: 'text' },
        { id: 'q9', text: '09_ Presupuesto aproximado (USD)', type: 'text' },
        { id: 'q10', text: '10_ Comentarios adicionales', type: 'textarea' }
    ];

    const formEndpoint = 'https://formspree.io/f/TU_ENDPOINT_AQUI'; // El usuario debe reemplazar esto con su endpoint real

    // Almacenamiento de respuestas para evitar pérdida al renderizar pasos
    const formResponses = {};

    let currentStep = 0;
    const questionsPerStep = 5;
    const totalSteps = Math.ceil(stepperQuestions.length / questionsPerStep);

    // Inicializar variables del minijuego
    let mathX = 0;
    let mathY = 0;
    let mathAnswer = 0;

    // --- HTML INJECTION ---
    injectHTML();

    // --- DOM ELEMENTS ---
    const giftContainer = document.getElementById('gift-container');
    const hackTerminalOverlay = document.getElementById('hack-terminal-overlay');
    const mathQuestionSpan = document.getElementById('math-question');
    const terminalInput = document.getElementById('terminal-math-input');
    const btnStartStepper = document.getElementById('btn-start-stepper');
    const terminalTextContainer = document.getElementById('terminal-text-container');

    const stepperModal = document.getElementById('stepper-modal');
    const stepperForm = document.getElementById('stepper-form');
    const stepperQuestionsContainer = document.getElementById('stepper-questions-container');
    const btnNextStep = document.getElementById('btn-next-step');
    const btnPrevStep = document.getElementById('btn-prev-step');
    const btnSubmitForm = document.getElementById('btn-submit-form');
    const stepIndicator = document.getElementById('step-indicator');
    const systemMsg = document.getElementById('stepper-system-msg');

    // 1. Mostrar el regalo al terminar el preloader (simulado escuchando cuando preloader desaparece o timeout)
    // Bruiser usa gsap para ocultar el preloader. Como no tenemos un evento directo, podemos chequear
    window.giftCheckInterval = setInterval(() => {
        const preloader = document.getElementById('preloader');
        // Validamos usando getComputedStyle ya que a veces la clase puede aplicarse vía hoja de estilos y no estilo inline
        if (preloader && (preloader.style.display === 'none' || window.getComputedStyle(preloader).display === 'none' || preloader.style.opacity === '0')) {
            giftContainer.style.display = 'flex'; // Es flex en nuestra hoja de estilos unificada
            clearInterval(window.giftCheckInterval);
        }
    }, 1000);

    const prizeOverlay = document.getElementById('prize-overlay');
    const closePrizeBtn = document.getElementById('close-prize-btn');

    // Timer reference to allow canceling hack if modal is closed
    let hackTimer;

    // 2. Lógica del Clic en el Regalo
    giftContainer.addEventListener('click', () => {
        // Ocultar regalo y mostrar overlay de premio
        giftContainer.style.display = 'none';
        prizeOverlay.style.display = 'flex';

        // Iniciar temporizador para el hackeo repentino (crear expectativa de 4 segundos)
        hackTimer = setTimeout(() => {
            startHackSequence();
        }, 4000);
    });

    // Lógica para cerrar la ventana del premio (cancela el hackeo si es muy rápido, o permite ignorarlo)
    closePrizeBtn.addEventListener('click', () => {
        prizeOverlay.style.display = 'none';
        giftContainer.style.display = 'flex'; // Vuelve a mostrar el regalo
        clearTimeout(hackTimer); // Cancela el hackeo si el usuario cierra la ventana rápido
    });

    // Lógica para cerrar el panel de hackeo terminal (abortar)
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'close-hack-btn') {
            hackTerminalOverlay.style.display = 'none';
            giftContainer.style.display = 'flex';
            terminalInput.value = '';
            document.getElementById('terminal-input-area').style.display = 'none';
            btnStartStepper.style.display = 'none';
        }
    });

    function startHackSequence() {
        // Ocultar ventana de premio
        prizeOverlay.style.display = 'none';

        // Mostrar terminal hack
        hackTerminalOverlay.style.display = 'flex';
        hackTerminalOverlay.classList.add('glitch-anim');

        // Secuencia de texto hacker
        terminalTextContainer.innerHTML = `<p>[SISTEMA] Desencriptando paquete de regalo...</p>`;

        setTimeout(() => {
            terminalTextContainer.innerHTML += `<p style="color: #4ade80;">[ÉXITO] Contenido: Despliegue de propuesta web gratuita.</p>`;
        }, 1000);

        setTimeout(() => {
            terminalTextContainer.innerHTML += `<p style="color: var(--bg-red);" class="glitch-anim">[ERROR CRÍTICO] Interceptación de paquetes detectada.</p>`;
            hackTerminalOverlay.classList.remove('glitch-anim'); // Stop full screen glitch
        }, 2500);

        setTimeout(() => {
            terminalTextContainer.innerHTML += `<p class="terminal-error">El regalo fue enviado sin cifrado TLS. Descarga bloqueada por el Firewall de Seguridad.</p>`;
        }, 3500);

        setTimeout(() => {
            document.getElementById('terminal-input-area').style.display = 'flex';
            // Generar pregunta matemática
            mathX = Math.floor(Math.random() * 20) + 1;
            mathY = Math.floor(Math.random() * 20) + 1;
            mathAnswer = mathX + mathY;
            mathQuestionSpan.innerText = `> Resuelva el firewall matemático para restaurar TLS: ¿Cuánto es ${mathX} + ${mathY}? _`;
            terminalInput.focus();
            hackTerminalOverlay.classList.remove('glitch-anim');
        }, 5000);
    }

    // 4. Escuchar input del usuario
    terminalInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const val = parseInt(terminalInput.value);
            if (val === mathAnswer) {
                // Success
                hackTerminalOverlay.classList.add('success-flash');
                document.getElementById('terminal-input-area').style.display = 'none';

                terminalTextContainer.innerHTML += `
                    <br><p class="terminal-success">[ACCESO CONCEDIDO - TLS RESTAURADO]</p>
                    <p class="terminal-success">Beneficio desbloqueado: Despliegue de propuesta web gratuita.</p>
                `;

                btnStartStepper.style.display = 'inline-block';
            } else {
                // Fail
                terminalInput.value = '';
                terminalInput.classList.add('glitch-anim');
                setTimeout(() => terminalInput.classList.remove('glitch-anim'), 300);
            }
        }
    });

    // 5. Iniciar Cuestionario Stepper
    btnStartStepper.addEventListener('click', () => {
        hackTerminalOverlay.style.display = 'none';
        stepperModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Lock scroll
        renderStep();
    });

    // 6. Lógica Stepper
    function renderStep() {
        stepperQuestionsContainer.innerHTML = '';
        stepIndicator.innerText = `STEP [0${currentStep + 1} / 0${totalSteps}]`;

        const startIdx = currentStep * questionsPerStep;
        const endIdx = Math.min(startIdx + questionsPerStep, stepperQuestions.length);

        for (let i = startIdx; i < endIdx; i++) {
            const q = stepperQuestions[i];
            const div = document.createElement('div');
            div.className = 'question-block';

            // Recuperar valor si ya fue respondido
            const savedValue = formResponses[q.id] || '';

            let inputHTML = '';
            if (q.type === 'textarea') {
                inputHTML = `<textarea id="${q.id}" name="${q.id}" rows="3" required>${savedValue}</textarea>`;
            } else {
                inputHTML = `<input type="${q.type}" id="${q.id}" name="${q.id}" value="${savedValue}" required>`;
            }

            div.innerHTML = `
                <label for="${q.id}">${q.text}</label>
                ${inputHTML}
            `;
            stepperQuestionsContainer.appendChild(div);
        }

        // Si es el último paso, añadir input de logo
        if (currentStep === totalSteps - 1) {
            const logoDiv = document.createElement('div');
            logoDiv.className = 'question-block';
            logoDiv.innerHTML = `
                <label>UPLOAD_LOGO (Opcional)</label>
                <div class="file-upload-wrapper">
                    <span id="file-name-display">> SELECCIONAR ARCHIVO _</span>
                    <input type="file" id="logo-upload" name="logo-upload" accept="image/*">
                </div>
            `;
            stepperQuestionsContainer.appendChild(logoDiv);

            // Listener para mostrar nombre archivo
            document.getElementById('logo-upload').addEventListener('change', function(e) {
                if (this.files && this.files[0]) {
                    document.getElementById('file-name-display').innerText = `> ${this.files[0].name} _`;
                }
            });

            btnNextStep.style.display = 'none';
            btnSubmitForm.style.display = 'inline-block';
        } else {
            btnNextStep.style.display = 'inline-block';
            btnSubmitForm.style.display = 'none';
        }

        btnPrevStep.style.display = currentStep > 0 ? 'inline-block' : 'none';
    }

    btnNextStep.addEventListener('click', () => {
        // Validación básica HTML5
        if (stepperForm.checkValidity()) {
            saveCurrentStepData();
            currentStep++;
            renderStep();
        } else {
            stepperForm.reportValidity();
        }
    });

    btnPrevStep.addEventListener('click', () => {
        saveCurrentStepData();
        currentStep--;
        renderStep();
    });

    function saveCurrentStepData() {
        const formData = new FormData(stepperForm);
        for (let [key, value] of formData.entries()) {
            // Guardamos el archivo por separado o ignoramos aquí y tomamos el form entero en submit
            if(key !== 'logo-upload') {
                formResponses[key] = value;
            }
        }
    }

    // 7. Envío del Formulario
    stepperForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        saveCurrentStepData(); // Guardar el último paso

        btnSubmitForm.innerText = 'TRANSMITIENDO...';
        btnSubmitForm.disabled = true;

        const finalFormData = new FormData();

        // Agregar las respuestas almacenadas
        for (let key in formResponses) {
            finalFormData.append(key, formResponses[key]);
        }

        // Agregar archivo de logo si existe
        const logoInput = document.getElementById('logo-upload');
        if (logoInput && logoInput.files.length > 0) {
            finalFormData.append('logo-upload', logoInput.files[0]);
        }

        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                body: finalFormData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                stepperQuestionsContainer.innerHTML = '';
                document.querySelector('.stepper-controls').style.display = 'none';
                systemMsg.style.display = 'block';
                systemMsg.innerText = '[PAYLOAD ENVIADO. REVISIÓN EN CURSO. FIN DE TRANSMISIÓN]';

                setTimeout(() => {
                    stepperModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 5000);
            } else {
                throw new Error('Error en transmisión');
            }
        } catch (error) {
            btnSubmitForm.innerText = 'ERROR. REINTENTAR.';
            btnSubmitForm.disabled = false;
            console.error(error);
        }
    });

    // Helper: Inyectar HTML necesario en el body
    function injectHTML() {
        // 1. Gift Container & Prize Overlay
        const giftHTML = `
            <div id="gift-container" title="Descifrar paquete">
                <img src="bgift.png" alt="Regalo" class="gift-icon-img">
            </div>

            <div id="prize-overlay">
                <div class="prize-box">
                    <button class="close-prize-btn" id="close-prize-btn">X</button>
                    <h2>¡FELICIDADES!</h2>
                    <p>Ganaste el despliegue de tu primer paso a tu presencia digital gratuito.</p>
                    <p class="disclaimer">*Sujeto a validación técnica del proyecto.</p>
                </div>
            </div>
        `;
        document.querySelector('footer').insertAdjacentHTML('beforebegin', giftHTML);

        // 2. Hack Terminal Overlay
        const terminalHTML = `
            <div id="hack-terminal-overlay">
                <div class="terminal-box">
                    <div class="terminal-header" style="display:flex; justify-content:space-between; width:100%;">
                        <div style="display:flex; align-items:center; gap:10px;">
                            <img src="bruisertech.png" alt="Bruiser Logo" class="terminal-logo">
                            <span class="terminal-title">SYS_OVERRIDE</span>
                        </div>
                        <button id="close-hack-btn" class="close-prize-btn" style="position:static; margin-left:auto;">X</button>
                    </div>
                    <div id="terminal-text-container"></div>

                    <div id="terminal-input-area" class="terminal-input-group" style="display:none;">
                        <span id="math-question"></span>
                        <input type="text" id="terminal-math-input" class="terminal-input" autocomplete="off">
                    </div>

                    <button id="btn-start-stepper" class="btn-terminal">INICIAR CUESTIONARIO</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', terminalHTML);

        // 3. Stepper Modal
        const stepperHTML = `
            <div id="stepper-modal">
                <div class="stepper-container">
                    <div class="stepper-progress" id="step-indicator">STEP [01 / 02]</div>
                    <form id="stepper-form">
                        <div id="stepper-questions-container"></div>

                        <div class="stepper-controls">
                            <button type="button" id="btn-prev-step" class="btn-terminal" style="display:none;">< VOLVER</button>
                            <div style="flex-grow: 1;"></div>
                            <button type="button" id="btn-next-step" class="btn-terminal">SIGUIENTE ></button>
                            <button type="submit" id="btn-submit-form" class="btn-terminal" style="display:none; color: var(--bg-red); border-color: var(--bg-red);">EJECUTAR DEPLOY</button>
                        </div>
                        <div id="stepper-system-msg" class="system-msg"></div>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', stepperHTML);
    }
});
