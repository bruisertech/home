with open('index.html', 'r') as f:
    content = f.read()

# I see what's happening. `particle-system` has `z-index: -2` in CSS.
# `dynamic-bg` has `z-index: -3` in CSS.
# `body` has background `bg-red`. Wait, `body` is the root stacking context for these fixed elements (if they are direct children of body, no, they are inside `#main-content` which has `z-index: 1`).
# Wait, `#main-content` has `opacity: 0` originally, then `opacity: 1`. Since it has `opacity: < 1` or `z-index: 1`, it creates a stacking context.
# Inside `#main-content`, `#dynamic-bg` has `z-index: -3`. So it will be painted BEHIND the background of `#main-content`. But `#main-content` is transparent.
# But `#particle-system` has `z-index: -2` AND its children `wrapper` have `z-index: -1`, `-2`, `-3`.
# If `wrapper` has `z-index: -3`, it will be drawn BEHIND `#dynamic-bg` (because `#dynamic-bg` is `-3` but comes first? Actually, `#particle-system` is `-2`, which is a stacking context!
# Wait! `#particle-system` has `z-index: -2` but NOT `position: fixed` or `relative` creating a stacking context? Yes, it has `position: fixed`.
# So `#particle-system` is a stacking context with z-index `-2`.
# Its children `.particle-wrapper` have `z-index: -1`, `-2`, `-3`. These z-indexes are RELATIVE TO `#particle-system`. So they will NEVER go behind `#dynamic-bg` because `#dynamic-bg` is `-3` and `#particle-system` is `-2`.
# However, the user says "Asegúrate de que los elementos parallax... estén activos en el fondo con opacidad baja." "El problema es de visibilidad. Asegúrate de que: El z-index de las partículas sea inferior al del contenido pero superior al del fondo rojo (ej. z-index: -1). El color sea #fbf9ee con una opacidad entre 0.03 y 0.08."

# Let's change the z-index of `#particle-system` to `-1`.
