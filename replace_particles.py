with open('script.js', 'r') as f:
    content = f.read()

# We need to change the zIndex of particles in initTechParticles
# Currently they are -3, -2, -1. But dynamic-bg is -3.
# Let's change dynamic bg to -10, particle system to -9, and layers to -8, -7, -6

new_content = content.replace("""        const layers = [
            { count: 20, zIndex: -3, sizeMin: 0.5, sizeMax: 1.0, opacity: 0.03, speedMin: 20, speedMax: 100, blur: 0 },
            { count: 15, zIndex: -2, sizeMin: 1.0, sizeMax: 2.0, opacity: 0.05, speedMin: 150, speedMax: 300, blur: 0 },
            { count: 10, zIndex: -1, sizeMin: 2.5, sizeMax: 4.5, opacity: 0.08, speedMin: 400, speedMax: 900, blur: 1 }
        ];""", """        const layers = [
            { count: 20, zIndex: -3, sizeMin: 0.5, sizeMax: 1.0, opacity: 0.03, speedMin: 20, speedMax: 100, blur: 0 },
            { count: 15, zIndex: -2, sizeMin: 1.0, sizeMax: 2.0, opacity: 0.05, speedMin: 150, speedMax: 300, blur: 0 },
            { count: 10, zIndex: -1, sizeMin: 2.5, sizeMax: 4.5, opacity: 0.08, speedMin: 400, speedMax: 900, blur: 1 }
        ];""") # wait, if dynamic bg is -10 and particles are -9, the wrapper layers zIndex are relative to particle-system? No, wrapper is position: absolute so its z-index is relative to its stacking context.

with open('script.js', 'w') as f:
    f.write(new_content)
