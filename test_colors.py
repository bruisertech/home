import re

with open('index.html', 'r') as f:
    content = f.read()

hero_start = content.find('<svg class="hero-logo"')
if hero_start != -1:
    hero_end = content.find('</svg>', hero_start)
    hero_svg = content[hero_start:hero_end+6]

    # Are there any other colors in hero_svg?
    print(set(re.findall(r'fill="[^"]+"', hero_svg)))
