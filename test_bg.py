# The user issue says:
# "El problema es de visibilidad. Asegúrate de que:
# El z-index de las partículas sea inferior al del contenido pero superior al del fondo rojo (ej. z-index: -1).
# El color sea #fbf9ee con una opacidad entre 0.03 y 0.08."

# We did change `#particle-system` z-index to -1 (it was -2).
# Wait, `#dynamic-bg` is -3. `#particle-system` is -1.
# Both are in `#main-content` which is z-index 1.
# BUT `.brutal-hero` has `background: transparent;` right?
# If we look at `body`, `body { background-color: var(--bg-red); }`.
# Wait, the `body` background is solid red. The `body` doesn't have a z-index.
# The particles are inside `#main-content`, so their effective z-index is above the `body` background, because `main-content` has `z-index: 1`.
# Let's check `body` background.
