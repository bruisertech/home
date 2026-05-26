// Shader logic for fluid simulation based on a lightweight WebGL shader approach

const vertexShaderSource = `
    attribute vec2 position;
    varying vec2 vUv;
    void main() {
        vUv = position * 0.5 + 0.5;
        // Invert Y axis for WebGL
        vUv.y = 1.0 - vUv.y;
        gl_Position = vec4(position, 0.0, 1.0);
    }
`;

const fragmentShaderSource = `
    precision highp float;
    varying vec2 vUv;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMouse;

    // Simplex noise implementation for WebGL by Ashima Arts (simplified)
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

    float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                            0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                            -0.577350269189626,  // -1.0 + 2.0 * C.x
                            0.024390243902439); // 1.0 / 41.0
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i); // Avoid truncation effects in permutation
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
            + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }

    void main() {
        // Coordenadas normalizadas con corrección de aspecto
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        float aspect = uResolution.x / uResolution.y;
        st.x *= aspect;

        vec2 mouse = uMouse / uResolution;
        mouse.x *= aspect;

        // Centro matemático ajustado por aspecto
        vec2 center = vec2(0.5 * aspect, 0.5);

        // Interaction (distancia al mouse)
        float distToMouse = distance(st, mouse);
        float interaction = smoothstep(0.4, 0.0, distToMouse);

        // Generar campo de fuerza en el centro (forma elíptica para cubrir el logo)
        // Escalamos en X para crear un óvalo horizontal que proteja el texto
        vec2 stCenter = st - center;
        stCenter.x /= (aspect > 1.0 ? 2.5 : 1.5); // Ampliamos la protección en X (logo es ancho)
        stCenter.y /= 1.2; // Ampliamos un poco en Y para botones y subtitulos
        float distToCenter = length(stCenter);

        // El factor de exclusión empujará el ruido a un valor bajo en el centro
        // Hacemos que la zona segura sea más grande (0.3 a 0.5)
        float exclusionZone = smoothstep(0.25, 0.5, distToCenter);

        // Base de ruido: escala reducida para crear manchas grandes (organismos microscópicos) y en menor cantidad
        vec2 pos = st * 4.0;

        // Movimiento errático individual:
        // Calculamos un factor de velocidad local que pasa mucho tiempo lento y tiene picos rápidos repentinos.
        float localSpeed = snoise(pos * 0.5 + uTime * 0.15);
        float jump = pow(abs(localSpeed), 3.0) * sign(localSpeed) * 3.0;

        // Calculamos el ruido principal con este tiempo modificado
        float n = snoise(pos + vec2(uTime * 0.05 + jump, uTime * 0.08 - jump));

        // Detalle secundario para que las formas sean más orgánicas y se deformen
        n += snoise(pos * 2.0 - uTime * 0.1 + interaction * 2.0) * 0.4;

        // En el ruido de simplex normalizado, los valores van de ~ -1 a 1.
        // Forzamos un valor muy bajo en el centro para proteger el logo.
        n = mix(-1.5, n, exclusionZone);

        // Umbral ajustado: un borde duro, pero un valor más bajo (0.2 en lugar de 0.5)
        // para que las formas (picos del ruido) sean mucho más anchas, redondas y grandes.
        float fluid = smoothstep(0.24, 0.25, n);

        // Nuevos Colores solicitados:
        // Fondo base (donde no hay fluido): Rojo Profundo #d2584a
        vec3 bgColor = vec3(210.0/255.0, 88.0/255.0, 74.0/255.0);
        // Fluido (manchas/bacterias, donde n superó el umbral): Blanco Técnico #fbf9ee
        vec3 fluidColor = vec3(251.0/255.0, 249.0/255.0, 238.0/255.0);

        // Mezclar fondo rojo y manchas blancas (invertido respecto a antes:
        // ahora las manchas blancas son el "fluido")
        vec3 color = mix(bgColor, fluidColor, fluid);

        gl_FragColor = vec4(color, 1.0);
    }
`;

function initFerrofluid() {
    const canvas = document.getElementById('ferrofluid-canvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
        console.warn('WebGL not supported');
        return;
    }

    // Compile shader function
    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program));
        return;
    }

    gl.useProgram(program);

    // Quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, 'uTime');
    const resolutionLocation = gl.getUniformLocation(program, 'uResolution');
    const mouseLocation = gl.getUniformLocation(program, 'uMouse');

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    function resize() {
        // Obtenemos el tamaño de la sección hero
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            canvas.width = heroSection.clientWidth;
            canvas.height = heroSection.clientHeight;
        } else {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    }

    window.addEventListener('resize', resize);
    resize(); // Initial resize

    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        targetMouseX = e.clientX - rect.left;
        targetMouseY = canvas.height - (e.clientY - rect.top); // Invert Y for WebGL
    });

    window.addEventListener('touchmove', (e) => {
        if(e.touches.length > 0) {
            const rect = canvas.getBoundingClientRect();
            targetMouseX = e.touches[0].clientX - rect.left;
            targetMouseY = canvas.height - (e.touches[0].clientY - rect.top);
        }
    }, {passive: true});

    let startTime = Date.now();

    function render() {
        const time = (Date.now() - startTime) * 0.001;
        gl.uniform1f(timeLocation, time);

        // Smooth mouse movement
        mouseX += (targetMouseX - mouseX) * 0.1;
        mouseY += (targetMouseY - mouseY) * 0.1;
        gl.uniform2f(mouseLocation, mouseX, mouseY);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

// Inicializar de manera segura desde script.js o si carga solo
// Se llamará desde script.js en initMainSite() o donde corresponda,
// pero por seguridad también exportamos globalmente.
window.initFerrofluid = initFerrofluid;
