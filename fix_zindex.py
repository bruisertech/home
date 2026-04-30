# .hero-center has z-index: -1
# #particle-system has z-index: -1

# Let's change .hero-center z-index to 0 or remove it, or keep it -1 and make sure particle-system is lower?
# Wait, if particle-system is -1, it might be behind #dynamic-bg if dynamic-bg was inside the same context but -3.
# Wait, let's make #particle-system have z-index: 0, and #main-content text elements have z-index: 1.
# But #particle-system is position: fixed. It should stay behind the content but above the red background.

# Actually, the user says: "El z-index de las partículas sea inferior al del contenido pero superior al del fondo rojo (ej. z-index: -1)."
# Since `#dynamic-bg` is -3 and `#particle-system` is -1, it meets these conditions exactly!

# The problem with opacity: The user says "El color sea #fbf9ee con una opacidad entre 0.03 y 0.08."
# We can explicitly set it to `#fbf9ee` in CSS if it isn't.
# In `style.css`:
# .tech-particle-white {
#     color: var(--text-white);
# ...
# And `--text-white: #fbf9ee;`.

# The layers in script.js have `opacity` 0.03, 0.05, 0.08.

# Let's make sure the background of `#main-content` doesn't block it.
# `.bg-red, .bg-dark { background-color: transparent; }`
# Yes, they are transparent.

# What about the preloader background?
# `section.preload` has `background-color: #d2584a;` and it hides by `display: none` or sliding up.

# Everything seems perfectly aligned with the request.
