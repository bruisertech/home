with open('script.js', 'r') as f:
    content = f.read()

new_content = content.replace("color: var(--text-white);", "color: #fbf9ee;") # Wait, var(--text-white) IS #fbf9ee. So color is fine.
# "El color sea #fbf9ee con una opacidad entre 0.03 y 0.08."
# This matches layers: opacity 0.03, 0.05, 0.08.

# Is #particle-system z-index issue fixed? Yes, changed to -1.
