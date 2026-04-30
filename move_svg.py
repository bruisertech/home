import re

with open('index.html', 'r') as f:
    content = f.read()

# We want to move the <svg class="hero-logo"...> ... </svg> before <h1 class="massive-text brutal-title">bruiser</h1>
# Let's find the hero-center div
start_hero_center = content.find('<div class="hero-center">')
if start_hero_center != -1:
    end_hero_center = content.find('</div>', start_hero_center)

    hero_center_content = content[start_hero_center:end_hero_center+6]

    # find h1
    h1_start = hero_center_content.find('<h1')
    h1_end = hero_center_content.find('</h1>') + 5
    h1 = hero_center_content[h1_start:h1_end]

    # find svg
    svg_start = hero_center_content.find('<svg')
    svg_end = hero_center_content.find('</svg>') + 6
    svg = hero_center_content[svg_start:svg_end]

    new_hero_center_content = '<div class="hero-center">\n                ' + svg + '\n                ' + h1 + '\n            </div>'

    new_content = content[:start_hero_center] + new_hero_center_content + content[end_hero_center+6:]
    with open('index.html', 'w') as f:
        f.write(new_content)
